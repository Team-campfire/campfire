# campfire

## Contributions:

### **Anya Tralshawala (RCS: tralsa, Github: anya-tralshawala):** 
* General Design
    * I worked with Rachel to design our app logo and helped create the Figma wireframes. We worked on the themes/design for all of our slide decks, worked on UI/UX, and styled all of the components in our app using CSS and bootstrap elements.
    
* Basic HTML/CSS/JS implementation of all of our pages from the wireframe
    * I worked on converting all of the wireframe design into working code for our midterm presentation This code was primarily in HTML/CSS/JS and used nodes to serve the pages. This code was the framework for all of the angular code we wrote. The majority of the code and style remained the same but we used angular components to sever the many different pages on a singular page.
    
* Front - end implementation in Node and Angular as well as Angular file structure
    * Rachel and I worked on converting all of the initial pages into angular components. We spent a lot of time figuring out the best way to organize our files and making sure the file structure made sense. We used chile components for the multiple create event form pages, and the different views of the dashboards.

* Initial Database set up
    * I worked on creating our database and set up all the collections. I also maintained our DB and made sure everyone had access to it.

* Database Schema
    * Rachel and I worked together to create a general database schema for our application. 

* Worked on all of the POST requests and MongoDB connection
    * I worked on making all of the create event form POST requests. I secured the connection between angular to node to mongo and thoroughly tested to post requests to make sure it was working. I also set up the mongo connection for the rest of my group members to use.

* Mobile UX
    * I did mobile UX styling on the landing page, all 4 of our create event form pages, join event page, finish form page, and both views of the event dashboard page. To do this I used chrome developer tools, bootstrap elements, as well as @media queries.

### **Rachel Wang (RCS: wangr15, Github: rachel-wg):**
* UX design/general design
	* I led UX design for our application, sketching wireframes and user flows and making final mockups using Figma (Figma file included in our repo). I worked with Anya to redesign our Campfire logo and favicon, and we also worked together for other design materials like slide deck format and refining the visuals and front-end of our application. 
	  
* User research
	* I led creating and analyzing a Google Forms survey to scope out our problem space (helping people plan events - questions/results are in the appendix of our midterm and final presentations) and reviewed the questions with our team members. We used the results from our survey to help rebrand our app from weMeet to campfire, ideate new features, and focus on our new target audience, college and university students planning events for clubs. 
	
* Front-end (basic HTML/CSS/JS) implementation of mockup 
	* I worked with Anya to implement the mockup screens into a mostly static front-end prototype of our application. I specifically implemented the event feed and join event screens (join event flow). I also did the color changing buttons/labels on click that appear throughout our application. I did JS/TS functionality for adding friends/cars, dropdowns on event feed.  

* Database schema
	* Anya and I worked together to devise a database and document schema for Campfire. 
	
* Front-end JS, Node and Angular implementation
	* Anya and I worked together to setup the Node server for our application and implementing our front-end prototype into Angular, breaking up our prior prototype code into components and refining as necessary. 

* Some mobile UX
	* I worked on mobile UX styling for the join event flow (event feed and join event screens) and our lab 6 data viz screen.
	
* Preliminary accessibility testing
	* I checked our application using the axe chrome extension for compliance with w3c WAI guidelines and basic keyboard testing, which our app passes. To make sure our app is compliant, I edited semantic markup, hover states, colors, etc. where necessary. Some of our colors do not fully pass the highest level of w3c compliance (such as our use of white text on yellow background), since this color is very rarely used in our application this is not the worst violation, but would be something to look into in addition to further usability and accessibility testing in the future. 


### **Michael Kokkatt (RCS: kokkam, Github: mkokkatt):**


### **Teddy Clark (RCS: clarke4, Github: teddy-clark):**


## Challenges:

### Scripts issue - 
When we were working on the initial front-end prototype for our application, we had some Javascript functions in our script.js file that interacted with the DOM. Once we began Angular integration though, we noticed that some of these functions would not execute or would not execute where expected to (e.g., when buttons with event listeners are clicked, like the add friends/add cars in the create event flow). Some of the functions do execute (e.g., add friends/add cars on the event dashboard), but only on localhost:4200/the Angular development server. We tried rewriting these functions in the relevant TS files for their corresponding components, however, we then ran into issues with TS recognizing jQuery. Fixes like (https://momane.com/how-to-use-jquery-with-typescript) to get Typescript to recognize jQuery failed and the functions would still not execute. In the future, we would like to improve on this and fix these issues. 


### Typescript -> node -> mongo - 
