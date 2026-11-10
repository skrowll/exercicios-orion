const http = require("node:http");
const pool = require("./db");

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "GET" && req.url === "/health") {
    try {
      await pool.query("SELECT 1");

      res.writeHead(200);
      return res.end(JSON.stringify({ status: "ok" }));
    } catch (error) {
      console.error(error);

      res.writeHead(503);
      return res.end(
        JSON.stringify({ status: "error", message: "Database unavailable" })
      );
    }
  }

  if (req.method === "GET" && req.url === "/") {
    try {
      const result = await pool.query(
        "SELECT * FROM messages ORDER BY id DESC LIMIT 1"
      );

      if (result.rows.length === 0) {
        res.writeHead(200);
        return res.end(JSON.stringify({ message: "No messages found" }));
      }

      res.writeHead(200);
      return res.end(JSON.stringify(result.rows[0]));
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      return res.end(JSON.stringify({ error: "Internal server error" }));
    }
  }

  if (req.method === "POST" && req.url === "/messages") {
    try {
      let body = "";

      for await (const chunk of req) {
        body += chunk;
      }

      const { message } = JSON.parse(body);

      if (typeof message !== "string" || !message.trim()) {
        res.writeHead(400);
        return res.end(JSON.stringify({ error: "Invalid message" }));
      }

      const result = await pool.query(
        "INSERT INTO messages (content) VALUES ($1) RETURNING *",
        [message]
      );

      res.writeHead(201);
      return res.end(JSON.stringify(result.rows[0]));
    } catch (error) {
      console.error(error);
      res.writeHead(500);
      return res.end(JSON.stringify({ error: "Internal server error" }));
    }
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Not found" }));
});

async function start() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      content TEXT NOT NULL
    )
  `);

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start().catch(console.error);