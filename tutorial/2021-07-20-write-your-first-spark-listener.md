---
title: Write your first Spark listener
author: Shad Amez
featured: true
description:
  Learn how to write Spark listener and capture job, stages and task metrics
image: /img/tutorial/shared/og-spark.png
---

### Objective

In this tutorial we will be developing Spark listener for capturing runtime
metrics of Spark's job, stages and tasks.

### About Apache Spark

It's an analytics engine for processing large scale data stored in variety of
file system and database.

### About Spark listeners

Spark listeners allows you to hook custom code on different events emitted while
the spark application is running. These events help us to capture metrics, that
could be quite helpful in debugging and optimizing the code.

### Pre-requisites

- A spark cluster running on YARN or standalone. To quickly spin up a local
  cluster, checkout this
  [tutorial](https://www.gigahex.com/tutorial/2021/06/30/setting-up-spark-cluster).
- Basic knowledge of Scala programming language and Spark APIs.
- Eclipse or IntelliJ IDEA which supports Scala language.

### Instructions

- Create a Scala project and add the following dependencies in the build.sbt
  file as shown below.

```scala title="build.sbt"
lazy val sample = (project in file("."))
  .settings(projectSettings)
  .settings(
    name := "spark-scala-samples",
    moduleName := "spark-samples",
    libraryDependencies ++= Seq(
      "org.apache.spark" %% "spark-core" % "3.0.0" ,
      "org.apache.spark" %% "spark-sql" % "3.0.0"
    )
  )
```

- Next, create a Listener class, which extends `SparkListener` abstract class,
  which internally implements `SparkListenerInterface`. This class will consist
  of the overriden methods, that will receive the metrics once a Job, stage,
  task or the entire application ends.

```scala title="src/org/apache/spark/listeners/SparkMetricsListener.scala"
/**
 * Spark listener class to handle the Spark events
 */
class SparkMetricsListener extends SparkListener {

}
```

- We need some variable to be initialized, that will be storing all the metrics.

```scala title="src/org/apache/spark/listeners/SparkMetricsListener.scala"

class SparkMetricsListener extends SparkListener {

  private val jobsCompleted   = new AtomicInteger(0)
  private val stagesCompleted = new AtomicInteger(0)
  private val tasksCompleted = new AtomicInteger(0)
  private val executorRuntime = new AtomicLong(0L)
  private val recordsRead     = new AtomicLong(0L)
  private val recordsWritten  = new AtomicLong(0L)

}

```

- The listener interface allows us to hook custom code on certain events. For
  this basic example, we want to capture metrics once a job, stage, task or
  application completes. Following are the events -

```java title="src/org/apache/spark/listeners/SparkMetricsListener.scala"

override def onApplicationEnd(applicationEnd: SparkListenerApplicationEnd): Unit = ???
override def onJobEnd(jobEnd: SparkListenerJobEnd): Unit = ???
override def onStageCompleted(stageCompleted: SparkListenerStageCompleted): Unit = ???
override def onTaskEnd(taskEnd: SparkListenerTaskEnd): Unit = ???

```

- Implement the methods as shown below to capture the metrics.

```java title="src/org/apache/spark/listeners/SparkMetricsListener.scala"

override def onApplicationEnd(applicationEnd: SparkListenerApplicationEnd): Unit = {
    log.info("***************** Aggregate metrics *****************************")
    log.info(s"* Jobs = ${jobsCompleted.get()}, Stages = ${stagesCompleted.get()}, Tasks = ${tasksCompleted}")
    log.info(s"* Executor runtime = ${executorRuntime.get()}ms, Records Read = ${recordsRead.get()}, Records written = ${recordsWritten.get()}")
    log.info("*****************************************************************")
  }

  override def onJobEnd(jobEnd: SparkListenerJobEnd): Unit =
  jobsCompleted.incrementAndGet()

  override def onStageCompleted(stageCompleted: SparkListenerStageCompleted): Unit =
  stagesCompleted.incrementAndGet()

  override def onTaskEnd(taskEnd: SparkListenerTaskEnd): Unit = {
    tasksCompleted.incrementAndGet()
    executorRuntime.addAndGet(taskEnd.taskMetrics.executorRunTime)
    recordsRead.addAndGet(taskEnd.taskMetrics.inputMetrics.recordsRead)
    recordsWritten.addAndGet(taskEnd.taskMetrics.outputMetrics.recordsWritten)
  }

```

- Now its time to use the above created Spark listener in any spark application.
  For simplicity, create a basic Spark application, that reads a text file and
  counts the number of lines present in the file. The highlighted line shows one
  way of adding your custom Spark listener to your application. You can also
  pass a list of custom spark listeners as mentioned in the official Spark
  configuration
  [documentation](https://spark.apache.org/docs/latest/configuration.html).

```scala title="src/com/gigahex/samples/rdd/SparkApp.scala"

package com.gigahex.samples.rdd

import org.apache.spark.sql.SparkSession
import org.apache.spark.listeners.SparkMetricsListener

object SparkApp {

  def main(args: Array[String]): Unit = {
    /**
     * Setup the spark session
     */
    val spark = SparkSession.builder()
      .master("local[*]")
      .appName("hello-spark")
      .getOrCreate()

    spark.sparkContext.addSparkListener(new SparkMetricsListener)

    val rdd = spark.sparkContext.textFile(getClass.getResource("/data.in").getPath)
    println(rdd.count())

    spark.stop()
  }

}

```

- Let's run the above application and check the logs to get the metrics.

```bash
INFO SparkMetricsListener: ***************** Aggregate metrics *****************************
INFO SparkMetricsListener: * Jobs = 1, Stages = 1, Tasks = 2
INFO SparkMetricsListener: * Executor runtime = 120ms, Records Read = 6, Records written = 0
INFO SparkMetricsListener: *****************************************************************
```

The complete example can be found in the Github
[repository](https://github.com/GigahexHQ/spark-scala-samples/blob/main/src/main/scala/org/apache/spark/listeners/SparkMetricsListener.scala).
If you have any queries, do post in
[Q&A section](https://github.com/GigahexHQ/spark-scala-samples/discussions/categories/q-a)
