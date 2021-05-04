# campfire

## Contributions:

### **Anya Tralshawala (RCS: tralsa, Github: anya-tralshawala):** 
* General Design
    * I worked with Rachel to design our app logo and helped create the Figma wireframes. We worked on the themes/design for all of our slide decks, worked on UI/UX, and styled all of the components in our app using CSS and bootstrap elements.
    
* Vanilla HTML/CSS/JS implementation of all of our pages from the wireframe
    * I converted the wireframe design into working code for our midterm presentation This code was primarily in HTML/CSS/JS and used nodes to serve the pages. I worked on coding up all four of the create event forms, the finish form page, as well as noth both dashboard view. This code was the starting point for all of the angular code we wrote. The majority of the code I had written and style remained the same but we used angular components to sever the many different pages on a singular page.
    
* Front - end implementation in Angular as well as Angular file structure
    * Rachel and I worked on converting all of the initial pages into angular components. We spent a lot of time figuring out the best way to organize our files and making sure the file structure made sense. We used child components for the multiple create event form pages, and the different views of the dashboards. We converted all of the code housed in the public directory into their respective angular components. I then extensively worked on css and bootsrtap styling to make sure everything lined up properly and was visually appealing

* Initial Database set up and database maintenance/management
    * I worked on creating our database and set up all the collections. I also maintained our DB and made sure everyone had access to it. If anyone ran into issues with the database I was always the person to debug and reset connections strings and such.

* Database Schema
    * Rachel and I worked together to create a general database schema for our application. 

* Worked on ALL of the POST requests and set up the MongoDB connection
    * I worked on making all of the create event form POST requests. I secured the connection between angular to node to mongo and thoroughly tested the post requests to make sure they were working properly. I also set up the mongodb connection for the rest of my group members to use.

* Mobile UX
    * I did a good portion of the mobile UX styling. I worked extensively on the landing page, all 4 of our create event form pages, join event page, finish form page, and both views of the event dashboard pages. To do this I used chrome developer tools, bootstrap elements, as well as @media queries.

### **Rachel Wang (RCS: wangr15, Github: rachel-wg):**
* UX design/general design
	* I led UX design for our application, sketching wireframes and user flows and making final mockups using Figma (Figma file included in our repo under "presentations" directory, final user flow located on slide 10 in our final presentation). I worked with Anya to redesign our Campfire logo and used this to create the favicon. We also worked together for other design materials like slide deck format and refining the visuals and front-end of our application. 
	  
* User research
	* I led creating and analyzing a Google Forms survey to scope out our problem space (helping people plan events - questions/results are in the appendix of our midterm and final presentations) and reviewed the questions with our team members. We used the results from our survey to help rebrand our app from weMeet to campfire, ideate new features, and focus on our new target audience, college and university students planning events for clubs. 
	
* Front-end (vanilla HTML/CSS/JS) implementation of mockup 
	* I worked with Anya to implement the mockup screens into a mostly static front-end prototype of our application. I specifically implemented the event feed and join event screens (join event flow). I also did the color changing buttons/labels on click that appear throughout our application. I also implemented JS/TS functionality for these screens, such as the dropdowns on event feed.  

* Database schema
	* Anya and I worked together to devise a database and document schema for Campfire. 
	
* Front-end JS, Node and Angular implementation
	* Anya and I worked together to setup the Node server for our application and implementing our front-end prototype into Angular, breaking up our prior prototype code into components and refining as necessary. 

* Some mobile UX
	* I worked on mobile UX styling for the join event flow (event feed and join event screens) and our lab 6 data viz screen.
	
* Preliminary accessibility testing
	* I checked our application using the axe chrome extension for compliance with w3c WAI guidelines and basic keyboard testing, for which our app passes all automatic checks except for color contrast and some things to do with iframes (some of this markup we can't edit as the source of the iframes, like Google, automatically use some semantic markup & aria-labels that may not pass these tests). To make sure our app is compliant, I edited semantic markup, hover states, colors, etc. where necessary. Some of our colors do not fully pass the highest level of w3c compliance (such as our use of white text on yellow background, buttons with a transparent background and color text). In the future, we would like to conduct full usability and accessibility testing with users, and further look into these color contrast issues and see if it is possible to modify the automatic semantic markup generated by our iframe sources.


### **Michael Kokkatt (RCS: kokkam, Github: mkokkatt):**
* I worked primarily with Teddy on backend of this web app. We spent a much of our time researching, testing and figuring out how to work certain aspects of the backend. We worked primarily on our locals and spent a lot of time figuring out the flow from angular to node to mongo and back. More recently, we finally got this process working. I changed the forms to use angular and automagically pull data from all of the create-event forms to the typescript. I also added endpoints in server.js to get database data and update the event feed and viewer event dashboards. I also added code to post events to the database from create-event and get the event code working as well. Users are now able to join an event with event codes. I added a new collection called eventCodes to store the event codes as well. I didn't commit as often as I should've been to my personal branch but moving forward I know to commit work more periodically to my branch even if it may be a bit buggy.



### **Teddy Clark (RCS: clarke4, Github: teddy-clark):**
* Database Schema
	* I worked with Michael to submit the forms needed to create an event to the respective typescript files then to our server js file and then finally to our MongoDb collection. We chose to submit each form after the submitEventStart API as an array with attributes specified in the forms for simplicity and separation of concerns.

* Writing to the Database and Requests
	* I finished the implementation for 4 out of 5 post requests which first starts with populating the createEvent collection. After this document is created with the submitEventStart API, the next 3 forms at APIs submitEventBasics, submitCategories, submitEventTransportation, query the database based on the id of the first document and update the document based on data from these 3 forms.
	* To write to the database, Michael and I converted our forms to angular and sent form data to typescript. For event categories, I needed to learn and implement form groups since we had multiple radio buttons. In the other form pages, we simply assigned a class to our radio button to denote if it was selcted or not. However, with multiple radio buttons, I created a form group so that only a single value for eventCategory and clubCategory would be recieved in our ts file.

* Event Feed and Database Queries
	* To display created events in our event feed, Michael and I implemented an ngFor div to dynamically display all events. In each event object, we used angular to automsgically display attributes of each event such as date, time, eventName, yourName, eventCategory, eventDescription, and clubCategory. We relied on the getEvents API to get a response from the MongoDB with createEvent documents.
	* To query the database based on clubCategory, I needed to create an index for the ngFor div so that the form would update after the div was populated with new data. I chose to set the index as the internal schema id from MongoDB so that I would not need to create any new attributes and so that I could rely on this primary key. After a user selected a clubCategory, the events from the getEvents get request were compared based on the clubCategory to determine if the event would be written the the ngFor div.

## Challenges:

### Scripts issue - 
When we were working on the initial front-end prototype for our application, we had some Javascript functions in our script.js file that interacted with the DOM. Once we began Angular integration though, we noticed that some of these functions would not execute or would not execute where expected to (e.g., when buttons with event listeners are clicked, like the add friends/add cars in the create event flow). Some of the functions do execute (e.g., add friends/add cars on the event dashboard), but only on localhost:4200/the Angular development server. We tried rewriting these functions in the relevant TS files for their corresponding components, however, we then ran into issues with TS recognizing jQuery. Fixes like (https://momane.com/how-to-use-jquery-with-typescript) to get Typescript to recognize jQuery failed and the functions would still not execute. In the future, we would like to improve on this and fix these issues. 

### Updating Dashboard Pages  - 
The back-end team (Teddy and Michael) was responsible for this. Due to the lack of time they were unable to finish the PUT requests and therefore were not able to dynamically update the owner and viewer dashboard pages based on owner and event code.

### Typescript -> node -> mongo - 
We spent a lot of time trying to figure out this flow from typescript to node to mongo. It wasn't working for us for the longest time and we had many bugs and conflicting articles on the way to figuring it out. We set up meetings in office hours and did some more research and eventually got this to work more recently. After getting this to work we were able to move away from just testing on local and actually pushing code to github. This was one of the biggest roadblocks for our project.

### Querying the Database by Category -
In order to determine which category was selected for event or club categories, I created an angular on click event (click) to call a function with the value of the specific catgeory. Unfortunately, this approach required many (click) events so the the page could not load after writing all these functions. I looked into creating a single event for clubCategory and eventCategory on the parent div element, however, I could not find a way to call this function with the category that was clicked on from the child buttons. Therefore, the current application only queries the database, based on 'Identity' and 'Hobby & Special Interest' for club category.
