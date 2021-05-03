# Campfire Installation Instructions

## Setting up the campfire app:

1. Clone the git repository.
2. In your terminal, cd into the Node root directory (.../campfire) and run `npm install` to get all Node dependencies. 
3. Open up a new instance of your terminal and cd into the Angular root directory (.../campfire/campfire) and run `npm install` to get all Node dependencies. 
4. In this terminal, run `ng build --watch` to build the app on an Angular server. 
5. Go back to the terminal window with the Node root directory (.../campfire) and run `node server`
6. In your browser, go to `localhost:3000` to see the application


## Setting up database:
1. In MongoDB or MongoDB Compass, create a new database called `campfireApp` with these 3 collections in it: `allEvents`, `createEvent`, `lab6data`. 
2. Import the JSON files into Compass. JSON files are located in .../campfire/json
3. Update the var url (line 26 in .../campfire/server.js file) with your connection string and password.
