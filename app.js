const express = require("express");
const app = express();
const path = require("node:path");
const messageController = require("./controllers/messageController");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "New Message" },
  ];
  next();
});

const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New" },
];

const messages = [
  { text: "Hello", user: "Greg", added: new Date() },
  {
    text: "yo",
    user: "Charles",
    added: new Date(),
  },
  { text: "whats up", user: "Bob", added: new Date() },
];

app.get("/", messageController.getMessages);

app.get("/new", (req, res) => {
  res.render("form.ejs", { links: links });
});

app.get("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const message = messages[index];
  res.render("message.ejs", { message: message, links: links });
});

app.post("/new", messageController.newMessagePost);

app.listen(3000, () => {});
