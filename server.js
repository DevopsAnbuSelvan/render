const express = require("express");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Redirect root to index.html
app.get("/", (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
