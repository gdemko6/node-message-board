const express = require("express");
const app = express();

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
  res.send("Hello, world");
});

app.listen(3000, () => {
  console.log("node app");
});
