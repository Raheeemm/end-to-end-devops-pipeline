const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Read configuration from environment variables
const APP_NAME = process.env.APP_NAME || "DevOps Demo App";
const ENVIRONMENT = process.env.ENVIRONMENT || "local";
const BUILD_VERSION = process.env.BUILD_VERSION || "dev";

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files
app.use(express.static("public"));

// Health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Version endpoint
app.get("/version", (req, res) => {
  res.json({
    appName: APP_NAME,
    environment: ENVIRONMENT,
    version: BUILD_VERSION
  });
});

// Inject env values into dashboard
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
