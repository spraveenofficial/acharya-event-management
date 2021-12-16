const Router = require("express").Router();
const Acharya = require("../lib/acharyaApi");

Router.post("/login", Acharya.erpLogin);
Router.post("/dashboard", Acharya.studentProfile);
Router.get("/attendence", Acharya.Attendence);
Router.post('/add-event', Acharya.addEvent)
Router.get('/events', Acharya.getEvents)
module.exports = Router;
