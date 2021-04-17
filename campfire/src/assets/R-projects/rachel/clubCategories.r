# # for font import: from https://r-coder.com/custom-fonts-r/#Loading_a_custom_font
# # install.packages("showtext")
# library(showtext)

# # Check the fonts path of your system
# font_paths() 
# # Add a custom font. You will need to run this code every time you restart R
# font_add(family = "brandon", # Name you want to use 
#          regular = "Brandon_reg.otf") # Text of the 'General' tab plus the font extensio
 library(extrafont)
 # device argument also supports "pdf" and "postscript"
loadfonts(device = "mac", quiet = TRUE) 
par(family = "Kollektif")

clubCategories <- read_csv("~/Documents/websci/campfire/campfire/campfire/src/assets/csv-files/clubCategories.csv")
df1<-(clubCategories)
hobbycount <- ldply(df1, function(c) sum(c=="Hobby/Special Interest"))
identitycount <- ldply(df1, function(c) sum(c=="Identity Based"))
sr_count <- ldply(df1, function(c) sum(c=="Sports & Recreation"))
cs_count <- ldply(df1, function(c) sum(c=="Community Service"))
ap_count <- ldply(df1, function(c) sum(c=="Academic & Professional"))
other_count <- ldply(df1, function(c) sum(c=="Other"))
sg_count <- ldply(df1, function(c) sum(c=="Student Government & Event Planning"))


hobbycount <- hobbycount$V1[3]
identitycount <- identitycount$V1[3]
sr_count <- sr_count$V1[3]
ap_count <- ap_count$V1[3]
sg_count <- sg_count$V1[3]
other_count <- other_count$V1[3]
cs_count <- cs_count$V1[3]

# Create data for the graph.
makePlot<-function() { x <-  c(hobbycount, cs_count, identitycount, sr_count, ap_count, sg_count, other_count)
labels <- c("Hobby/Special Interest","Community Service","Identity Based","Sports & Recreation", "Academic & Professional","Student Government & Event Planning", "Other")
# Give the chart file a name.
png(file = "clubCategories.png", height ="850", width="800")

piepercent<- round(100*x/sum(x), 1) 
# Plot the chart.
pie(x, labels = piepercent, main = "Clubs Hosting Events", col = c("#EA4335", "#EA8600", "#FFBD00", "#02A144", "#41BBD9", "#390099", "#9E0059"))}
makePlot()
legend(-1, -.85, legend=c("Hobby/Special Interest", "Community Service", "Identity Based","Sports & Recreation", "Academic & Professional", "Student Government & Event Planning", "Other"), cex = 0.8, fill = rainbow(length(x)))
#theme_void()
# Save the file.
dev.off()
