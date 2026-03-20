require("dotenv").config();
 
const express = require("express");
 
const crypto = require("crypto");
 
const app = express();
 
// Capture raw JSON
 
app.use(express.json({
 
  verify: (req, res, buf) => {
 
    req.rawBody = buf.toString();
 
  }
 
}));
 
const SECRET = process.env.ZOOM_WEBHOOK_SECRET_TOKEN;
 
app.post("/", (req, res) => {
   let body;
 
  // Parse rawbody if SFMC sends string
  try {
 
    body = req.body;
 
    if (typeof body === "string") {
       res.send("Zoom Webhook is running 2");
    }
    res.send(body);
 
  } catch (err) {
    return res.status(400).json({ error: "Invalid JSON from SFMC", raw: req.rawBody });
  }
 
 
app.listen(process.env.PORT || 4000, () =>
 
  console.log("Zoom Webhook server running")
 
);
 
 
 
