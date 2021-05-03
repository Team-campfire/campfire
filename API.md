## Campfire App 

# GET requests
* Responsibility of the back-end team (Teddy and Michael) to implement, these are currently not implemented.
* GET requests are used to go to specific pages that load data from the database.
    * GET /edit/:ownerCode/ownerDashboard
        * This endpoint goes to the owner dashboard and loads the data of the specified event.
    * GET /join/:eventCode/viewerDashboard
        *  This endpoint goes to a view-only dashboard and loads the data  of the specified event.
    * GET /getEvents
        * This endpoint queries the database to get the events and load them into the Public Event Feed.


# POST requests
* POST requests are used to post create form data to the database.
    *   POST /createEvent/eventStart
        * This endpoint posts the email address, owner name, and friend email addresses to the database.
    *   POST /createEvent/eventBasics
        * This endpoint posts whether or not the event is public or private, event date and time, and whether or not the event is online. or offline to the database.
    *   POST /createEvent/eventCategories  
        * This endpoint posts the event category, event description, club category, and club description to the database. 
    *   POST /createEvent/eventTransportation
        * This endpoint posts the spotify URL, whether you require transportation or not, and name of drivers.
    *   POST /createEvent/eventCode
        * This endpoint posts the event code and owner code to the database in an arrav called eventCode.


# PUT requests
* Responsibility of the back-end team (Teddy and Michael) to implement, these are currently not implemented.
* PUT requests are mainly used to update the Owner Dashboard when the user clicks the "save changes" button. 
    *  PUT /edit/:ownerCode/ownerDashboard
        * This endpoint updates the event in the database with the new edits the owner has made. These changes should be reflected on both the owner and public dashboard of the event, as well as the event's card in the public event feed if it's a public event.
