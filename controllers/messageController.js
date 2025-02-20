const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index.ejs", { messages });
}

async function newMessagePost(req, res) {
  await db.newMessage(req.body.user, req.body.text);
  res.redirect("/");
}

const newMessageGet = (req, res) => {
  res.render("form.ejs", { links: res.locals.links });
};

module.exports = { getMessages, newMessagePost, newMessageGet };
