const Router = require("express").Router();
const Acharya = require("../lib/acharyaApi");
const Features = require("../lib/features")
Router.post("/login", Acharya.erpLogin);
Router.post("/dashboard", Acharya.studentProfile);
Router.get("/attendence", Acharya.Attendence);
Router.post('/add-event', Acharya.addEvent)
Router.post('/contribute', Features.registerForContribution)
Router.get('/events', Acharya.getEvents);
Router.post('/isadmin', Acharya.isAdmin);
Router.post('/onlineclass', Acharya.onlineClasses)
module.exports = Router;
