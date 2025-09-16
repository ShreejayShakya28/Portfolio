const express = require("express");
const cors = require("cors");
const path = require('path')
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // allows frontend (React or browser) to call API

// Minimal API route
app.get("/description", (req, res) => {
  res.json({
    paragraph: "Hello From The Backend",
    // image: "https://picsum.photos/400/200" // random placeholder image
  });
});


app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname,'/index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
