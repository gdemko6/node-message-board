const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function newMessage(name, message) {
  await pool.query(
    "INSERT INTO messages (name, message, added) VALUES ($1, $2, NOW())",
    [name, message]
  );
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

module.exports = { getAllMessages, newMessage, getMessageById };
