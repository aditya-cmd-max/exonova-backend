const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bhau ka backend chal gaya! 🔥");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Exonova se greetings!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
