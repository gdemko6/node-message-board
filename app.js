const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
  { text: "Hello", user: "Greg", added: new Date() },
  {
    text: "yo",
    user: "Charles",
    added: new Date(),
  },
  { text: "whats up", user: "Bob", added: new Date() },
];

app.get("/", (req, res) => {
  res.render("index.ejs", { messages: messages });
});

app.listen(3100, () => {
  console.log("node app");
});
