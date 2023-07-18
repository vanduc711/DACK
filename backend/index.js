const express = require("express");
const cors = require("cors");
const app = express();
const route = require("./routes")
const cookieParser = require("cookie-parser");
const db = require("./config/db")

db.connect()


app.use(cors());
app.use(cookieParser());
app.use(express.json());

route(app)

app.listen(8000, () => {
  console.log("Server is running");
});