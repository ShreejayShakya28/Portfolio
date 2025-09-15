const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allows frontend (React or browser) to call API

// Minimal API route
app.get("/description", (req, res) => {
  res.json({
    paragraph: "This is a simple description sent from the backend API.",
    image: "https://picsum.photos/400/200" // random placeholder image
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
