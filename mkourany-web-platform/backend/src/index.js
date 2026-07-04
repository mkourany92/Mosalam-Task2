const express = require("express");
const app = express();

// GET /api/health  -> Liveness: quick app-level check
app.get('/api/health', (req,res) => res.json({status:'ok'}));

// GET /api/ready  -> Readiness: depends on DB/other deps
app.get('/api/ready', async (req,res) => {
  try {
    await pool.query('SELECT 1'); // fast DB ping
    res.json({ready:true});
  } catch (err) {
    res.status(503).json({ready:false});
  }
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice", email: "alice@example.com" }
  ]);
});

app.listen(3000, () => {
  console.log("backend listening on 3000");
});