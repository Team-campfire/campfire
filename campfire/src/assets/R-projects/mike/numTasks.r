 install.packages("ggplot2")
 library(ggplot2)
ggplot(numTasks, aes(x=eventName, y=delegateTasks)) + geom_bar(stat = "identity", fill = "brown") + coord_flip() + labs(title="Event Workload",x ="Event Name", y = "Number of Tasks")