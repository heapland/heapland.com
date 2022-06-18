---
id: sandbox-clusters
title: Install Spark Cluster
---

Sandbox clusters are single node clusters running on docker containers.

### Instructions

- Once you've created the workspace, its time to create your first cluster.
  Click on the Add Cluster as shown below. Provide local cluster details as per
  your requirement.

![Create cluster!](/img/docs/sandbox-cluster/build_cluster.png "Create sandbox cluster")

- Click on the start button to initialize and run the cluster. Once the cluster
  has been started, you can view the resources allocated and the logs.

![Cluster state!](/img/docs/sandbox-cluster/cluster_info.png "Cluster state")

### Open Interactive Shell

Now that we have the cluster up and running, we can interact with the cluster by
opening an interacting shell from the terminal using the following command

Once you've open the interactive shell for the cluster, you can run
`spark-shell` commands to explore Spark.
