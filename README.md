# SlackInterview
This integration involves 3 APIs 1)Incoming Webhook 2)Slash command 3)Event Subscription.
This code is deployed in Heroku and can be accessed at https://aqueous-headland-93426.herokuapp.com/.

Prerequisites:
1.Created a Team in Slack with name "Interview"
2.Creted 2 new Channels in team "oders" and "shipment"
3.Created 2 new APPs "Tech-Assessment" and "USPS" for integration of channels.

Incoming Webhook API integration with APP

Build a new App "Tech-assessment" with the feature of Incoming webhook. Posting a message to "orders" channel through "https://hooks.slack.com/services/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".
Integrated this URL with "https://aqueous-headland-93426.herokuapp.com/" and new endpoint url "/callwebhook" by using this posting message to Orders channel.

Slash command API integration:

Created a new slash command "/wishme" through slashcommand. Gave the requset URL:"https://aqueous-headland-93426.herokuapp.com/" and integrated with Tech-Assessment APP.In Orders channel if we use /wishme command we are sending "Hi Hello !!! How are you?" message from server.

EventSubscription API integration:
Created a USPS APP with incoming webhookAPI and 
