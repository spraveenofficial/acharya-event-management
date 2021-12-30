const Router = require("express").Router();
const Acharya = require("../lib/acharyaApi");
const Features = require("../lib/features");
const Mail = require("../services/mail");
Router.post("/login", Acharya.erpLogin);
Router.post("/dashboard", Acharya.studentProfile);
Router.get("/attendence", Acharya.Attendence);
Router.post("/add-event", Acharya.addEvent);
Router.post("/contribute", Features.registerForContribution);
Router.get("/events", Acharya.getEvents);
Router.post("/events", Acharya.bookEvent);
Router.get("/event/:eventId", Acharya.eachEvent)
Router.post("/isadmin", Acharya.isAdmin);
Router.post("/onlineclass", Acharya.onlineClasses);
Router.post("/offlineclass", Acharya.offlineClasses);
// Router.get("/offlineclass", Acharya.offlineClasses);
Router.get("/mail", Mail.sendBookingSuccessMail)
Router.get("/email", Mail.sendMail);

module.exports = Router;
