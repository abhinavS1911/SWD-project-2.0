const express = require("express");
const http = require("http");
import fetch from "node-fetch";

const { json } = require("body-parser");

const app = express();
app.use(express.static("public"));

fetch("http://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/prototype.html");
// });

// app.post("/", function (req, res) {
//   const postUrl = "http://jsonplaceholder.typicode.com/posts";
//   http.get(postUrl, function (response) {
//     // on is a method to tap into server's data and search through it
//     response.on("data", function (data) {
//       const postData = JSON.parse(data);
//       console.log(postData[0].title);
//     });
//   });
// });

// app.post("/posts", function (req, res) {
//   // completion handler
//   const postUrl = "http://jsonplaceholder.typicode.com/posts";
//   http.get(postUrl, function (response) {
//     // on is a method to tap into server's data and search through it
//     response.on("data", function (data) {
//       const postData = JSON.parse(data);
//       console.log(postData);
//     });
//   });
// });

// app.post("/albums", function (req, res) {
//   const albumUrl = "http://jsonplaceholder.typicode.com/albums";
// });
app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000.");
});
