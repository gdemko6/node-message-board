const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index.ejs", { messages });
}

module.exports = { getMessages };
