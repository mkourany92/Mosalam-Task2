const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice", email: "alice@example.com" }
  ]);
});

app.listen(3000, () => {
  console.log("backend listening on 3000");
});