---
id: deploy-spark-with-gigahex
title: Submit Spark Application
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Once you've [installed](https://docs.gigahex.com/docs/install) Gigahex SDK in your Spark cluster, running a Spark application with monitoring on Gigahex is a two step process.

- Every Spark application that needs to be tracked in Gigahex Monitoring platform, needs to be first registered by navigating to the [projects](https://app.gigahex.com/projects) section.
- Submit your spark application using `gx-cli` by prefixing **gx** to your spark-submit command, as demonstrated below.

```bash
gx spark-submit \
--class com.gigahex.sample.SparkPi \
--master yarn \
--name daily-hits \
--conf spark.executor.instances=10
/apps/path/spark-app.jar --input /hdfs/input --output /hdfs/out
```

The `gx spark-submit` command will first checks if this application with name `daily-hits` (for example), has already been registered. If found registered, it will
start publishing the metrics for this run.

:::caution

Make sure that the provided application name through `--name` option, matches the project name registered in Gigahex Monitoring platform.

:::

## Current Limitations

As we are still in `alpha` version, therefore we are currently supporting small workloads and the limitations would be gradually lifted in the future versions. Here are the current limitations in place:

- We are supporting capturing of metrics for only a duration of 15 minutes.
- A user would be able to register `5` spark projects.
- For a Spark project, last `5` history runs would be visible.

Now, we will look at how we can make some sense of metrics.
