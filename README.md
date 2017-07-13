# SlackInterview
This integration involves 3 APIs <br> 1. Incoming Webhook <br> 2. Slash command <br> 3. Event Subscription. <br>
This code is deployed in Heroku and can be accessed at https://aqueous-headland-93426.herokuapp.com/.

Prerequisites: <br>
1. Created a Team in Slack with name "Interview".
2. Created 2 new Channels in the team with the names "orders" and "shipment".
3. Created 2 new APPs "Tech-Assessment" and "USPS" for integration of API's.

<h1>Incoming Webhook API integration with APP</h1>
<h2>Summary :-</h2>
Built a new App "Tech-assessment" with the feature of Incoming webhook in the channel "orders". It will post give message to the channel "orders". 
<h2>Usage :-</h2>
Hit the below Heroku App get URL and pass the data to be sent in the query string param "data" like below.
https://aqueous-headland-93426.herokuapp.com/callwebhook?data=Hello
This will pass text "Hello" to the channel "orders".

<h1>Slash command API integration</h1>
<h2>Summary :-</h2>
Created a new slash command "/wishme" in the Tech-Assessment APP in the channel "orders" which is associated with the app server url "https://aqueous-headland-93426.herokuapp.com/wishme". 
<br/>
<h2>Usage :-</h2>
You can use the slash command "/wishme" in the channel "orders" and it will reply back saying "Hi Hello !!! How are you?" from server.

<h1>EventSubscription API integration</h1>
<h2>Summary :-</h2>
- Subscribed to an event "message.channels" in the channel "orders" in the app "USPS" with the callback to the app server https://aqueous-headland-93426.herokuapp.com/callmeslack 
- The app server reacts to the message "order made"
- The app server sends message "An order has been placed in other channel" to the channel "shipment"
<br/>
<h2>Usage :-</h2>
Send message called "order made" in the channel "orders" and you will see a echo message "An order has been placed in other channel" in the other channel "shipment".
