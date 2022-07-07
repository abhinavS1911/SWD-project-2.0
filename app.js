const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const { json } = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/prototype.html");
});

app.post("/", function (req, res) {
  const postUrl = "http://jsonplaceholder.typicode.com/posts";
  http.get(postUrl, function (response) {
    // on is a method to tap into server's data and search through it
    response.on("data", function (data) {
      const postData = JSON.parse(data);
      console.log(postData[0].title);
    });
  });
});

app.post("/posts", function (req, res) {
  // completion handler
  const postUrl = "http://jsonplaceholder.typicode.com/posts";
  http.get(postUrl, function (response) {
    // on is a method to tap into server's data and search through it
    response.on("data", function (data) {
      const postData = JSON.parse(data);
      console.log(postData);
    });
  });
});

// app.post("/albums", function (req, res) {
//   const albumUrl = "http://jsonplaceholder.typicode.com/albums";
// });
app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000.");
});
