//script runs once at start to init database
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 20 ),
    message VARCHAR ( 255 ),
    added VARCHAR ( 100 )
);

INSERT INTO messages (name, message, added) VALUES
    ('Greg', 'Hello, how are you?', NOW());
`;

async function main() {
  console.log("database initialization started");
  console.log("Connecting to DB:", process.env.DATABASE_URL);

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("database initialization finished.");
}

main();
