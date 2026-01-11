const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Read configuration from environment variables
const APP_NAME = process.env.APP_NAME || "DevOps Demo App";
const APP_ENV = process.env.APP_ENV || "dev";
const APP_VERSION = process.env.APP_VERSION || "0.0.1";

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Version endpoint
app.get("/version", (req, res) => {
  res.json({
    appName: APP_NAME,
    environment: APP_ENV,
    version: APP_VERSION
  });
});

// Inject env values into dashboard
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 ${APP_NAME} running on port ${PORT}`);
});
