const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

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

app.get("/new", (req, res) => {
  res.render("form.ejs");
});

app.post("/new", (req, res) => {
  message = req.body;
  messages.push({ text: message.text, user: message.user, added: new Date() });
  res.redirect("/");
});

app.listen(3100, () => {});
