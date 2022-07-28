require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/database.js");
const route = require("./routes/index.js");

const PORT = process.env.PORT || 5000;

// Connect to DB
db.connect();

const app = express();
app.use(cors());

// config route
route(app);

app.listen(PORT, () => {
	console.log(`Server is running on PORT=${PORT}`);
});
