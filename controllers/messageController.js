const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index.ejs", { messages });
}

async function getMessageByIndex(req, res) {
  const index = parseInt(req.params.index);

  // Validate index to prevent SQL errors
  if (isNaN(index)) {
    return res.status(400).send("Invalid message ID");
  }

  const message = await db.getMessageById(index);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message.ejs", { message, links: res.locals.links });
}

async function newMessagePost(req, res) {
  await db.newMessage(req.body.user, req.body.text);
  res.redirect("/");
}

const newMessageGet = (req, res) => {
  res.render("form.ejs", { links: res.locals.links });
};

module.exports = {
  getMessages,
  newMessagePost,
  newMessageGet,
  getMessageByIndex,
};
