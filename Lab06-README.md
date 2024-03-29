# Campfire

## Contributions:

**Anya Tralshawala (RCS: tralsa, Github: anya-tralshawala):** 

For this lab I worked with Rachel to create ALL of the logic for creating/downloading the csv files that we all used to do our R visualizations and displaying everything to the frontend. I came up with the logic to connect angular to node and actually have our frontend connect to the database. Rachel and I expanded on that to basically create a template for our other group memebers to follow and put in their visualizations. We also created the wireframes for this lab (located in the "\src\assets\lab6-wireframe" directory). As a group we came up with the 8 differnt viz categories. I personally set up the organization and file structure for all the csv files, R projects, and visualizations. I also set up the json file for all the data we uploaded to mongo as well as the lab6data collection in mongodbcompass. All the assets mentioned abover are in the assets folder inside src in the angular campfire directory. 

Along with working with Rachel to come up with all of the logic for the rest of our group to use, I personally worked on the Event Categories and Online vs. Offline visualizations. I created a barplot and dot chart chart for Event Categories visualizations and then then created a pie chart and barplot for the Online vs. Offline visualizations. I made sure they were visually appealing, evernly spaced, and representated the data well. 

In terms of creativity besides styling the buttons to fit theme of our project I made sure that the colors of my visualizations fit into the predetermined color scheme and theme of our app. I also created 2 visualizations per data set I worked on instead of the one that was required. I then styled the page using bootstrap cards, css animations and came up with the logic to enlarge the data viz images when they were hovered over. 

**Rachel Wang (RCS: wangr15, Github: rachel-wg):**
For this lab, I worked with Anya to wireframe this lab, and use the json2csv NPM package and related logic to convert the JSON files in our database into the CSV files used in our visualizations. We also together devised the logic and code for downloading the CSV files when the appropriate front-end object is clicked, and then each wrote this code for our individual front-end objects.  As a team, we decided what the subjects our data visualizations would cover (based on the CSV file data) and assigned each team member to 2 data visualizations. Each person then was responsible for determining what type of data viz would best suit their assigned subjects, and creating R visualizations for their assigned subjects. 

Personally, I worked on the front-end objects and data visualizations related to the Club Categories of clubs hosting events, and the Meeting Dates of events. For Meeting Dates, I created a timeline (referencing this tutorial: https://benalexkeen.com/creating-a-timeline-graphic-using-r-and-ggplot2/) that plots the events on a timeline by what month they occur in. For the Club Categories visualization, I created a pie chart (referencing R documentation and tutorialspoint.com) with percentages and a legend. I couldn't find a nice way to fix the spacing in between the different events on for Meeting Dates unforunately, but otherwise tried to keep these graphs readable and with multiple signifiers to distinguish items (colors, labels, etc.) for readibility. In my R projects, I wrote additional code to scan the CSV fields and calculate any necessary additional fields (e.g., number of clubs for each type of club category).

For difficulties, as said earlier, I ran into issues with the spacing between text for my Meeting Dates visualization (tried editing variious prooperties relating to y-values and spacing, which did not fix the issue), as well as savinng the code from my R projects. I was able to recreate the code for Club Categories (saved in clubCategories.r under assets/R-projects/rachel), but not the code for Meeting Dates, so I wasn't able to edit it after I originally made it and had to edit in a title.

For creativity, I ran accessibility checks and edited our markup (aria labels, format for alt tag content, etc.) and CSS to follow w3c WAI accessibility guidelines, reformatted and styled our nav bar to include a button to our data, button hover changes, and other good hueristics. I also looked into different R data visualization aditional fields and used the color scheme of our app in my data viz to be more visually appealing. 

**Michael Kokkatt (RCS: kokkam, Github: mkokkatt):**

For this lab, I worked with Teddy in using our data schema for our project to create a data set to use for this lab. I helped come up with ideas for the different types of
data we could exploit and use to display in our R visualizations. We populated a data set with fake data to use for this lab and made it accessible by uploading it to Mongo. I was in charge of the number of tasks visualizations and the number of driver visualizations. I had two data visualizations which were both bar plots because I felt that the clearest way to represent the data I was showing the user would be in the form of a bar graph. From looking at the graph, the user will know right away what the work load and transportation needs are by event. At the end of the day, the data visualization chosen largely depends on the data set and the analysis that is being conveyed. 
For creativity, when creating the data set, I made sure to add variances and similarities to create unique and interesting data out of 20 entries. I also used different color schemes for my visualizations and flipped the coordinates of the plots to make them more aesthetically pleasing. 


**Teddy Clark (RCS: clarke4, Github: teddy-clark):**

For this lab, I worked with Michael to populate the lab06.json file according to our data schema. After we completed populating data, we uploaded the file to
MongoDB. I came up with ideas for the different R components that the team could use for data visualization. I used R to display the number of invititations sent
out by each user and whether an event required transportation. In the server.js file, I also created 2 post requests to dowload data needed for these
visualizations.

For creativity, I made sure to duplicate attributes so that data visualization components would benfit from having attributes grouped together. I also created
both a bar chart and pie chart to highlight different R visualizations and added colors to both charts to make the data more visually appealing. 
