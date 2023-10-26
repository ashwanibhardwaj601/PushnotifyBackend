const express = require("express");
const dbconnect = require("./dbconnect");
const authrouter = require("./router/authrouter");
const tokenrouter=require("./router/tokenrouter")
const morgan = require("morgan");
const cors = require("cors");
const fs = require('fs');
const https =  require('https');

const app = express();
app.use(express.json());
app.use(morgan("common"));

var admin = require("firebase-admin");

var serviceAccount = require("./pushnotify-9184a-firebase-adminsdk-zaezu-a2b43fe8ee.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:3001"],
};

app.use(cors(corsOptions));

app.get("/test", (req, res) => {
  res.status(200).send("Welcome");
});
app.use("/auth", authrouter);
app.use("/api",tokenrouter);
dbconnect();

app.listen(4000, () => {
  console.log("listening on port:4000");
});
