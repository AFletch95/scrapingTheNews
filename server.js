import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import cheerio from "cheerio";
import db from "./models";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI)


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
