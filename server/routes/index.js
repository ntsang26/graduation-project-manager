const studentRoute = require("./studentRoute.js");

const route = (app) => {
	app.use("/api/students", studentRoute);
};

module.exports = route;
