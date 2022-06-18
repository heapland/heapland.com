---
title: Setting up your first Spark cluster
author: Shad Amez
featured: true
description: Setup of your first Spark cluster on your Mac using Gigahex app
image: /img/tutorial/shared/og-spark.png
---

### Objective

We will be creating a single node Spark cluster on our desktop.

### About Apache Spark

It's an analytics engine for processing large scale data stored in variety of
file system and database.

### About Gigahex

Gigahex allows you to install and manage multiple Spark and Hadoop sandbox
clusters on desktop, for faster development and testing..

### Instructions

- Download and install Docker. For docker installation instructions, check the
  [official guide](https://docs.docker.com/docker-for-mac/install/)
- Download and install [Gigahex](https://gigahex.com). **Currently it supports
  MacOS only.**
- Once you've started the Gigahex app, navigate to clusters and click on **Add
  Cluster**. Choose the cluster image version and the service as Spark
  Standalone.
- Share a directory from your workstation, with the container that will be
  running the container. As an example, share/mount your home directory
  `/Users/donald/workspace` with the container at `/home/coder/workspace`.

**Note: ** By default the cluster has the username as `coder`.

- Click on save and then click on **Start the cluster** button, to run the
  single node cluster. Now wait for the cluster to be up and running.
- Click on the terminal icon to get the command to open interactive shell in the
  cluster.

### Watch the demo

<figure class="video-container">
  <iframe
    src="https://www.loom.com/embed/0dbafc2d13ec436b9fe8bf86d931f1cc"
    frameBorder="0"
    allowFullScreen
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  />
</figure>
