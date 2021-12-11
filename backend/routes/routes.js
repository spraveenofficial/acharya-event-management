const Router = require("express").Router();
const Acharya = require("../lib/acharyaApi");

Router.post("/login", Acharya.erpLogin);
Router.post("/dashboard", Acharya.studentProfile);

module.exports = Router;
