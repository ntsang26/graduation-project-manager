require("dotenv").config();
const mongoose = require("mongoose");

const url = `mongodb+srv://bogdev:${process.env.DB_PASSWORD}@cluster0.wn9cxif.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connect = () => {
	mongoose
		.connect(url, connectionParams)
		.then(() => {
			console.log("Connected to database");
		})
		.catch((err) => {
			console.error(`Error connecting to the database. \n${err}`);
		});
};

module.exports = { connect };
