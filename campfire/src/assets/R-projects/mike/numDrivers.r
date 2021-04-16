 install.packages("ggplot2")
 library(ggplot2)
 ggplot(numDrivers, aes(x=eventName, y=transportation)) + geom_bar(stat = "identity", fill = "blue") + coord_flip() + labs(title="Transportation Needs",x ="Event Name", y = "Number of Drivers")