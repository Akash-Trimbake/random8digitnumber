const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// Define a route for the root path
app.get("/", (req, res) => {
  const min = 100;
  const max = 99999999;

  const random8DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const formattedNumber = String(random8DigitNumber).padStart(8, "0");
  console.log(formattedNumber)
  res.send(`${formattedNumber}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
