const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());


app.get("/visit", (req, res) => {
  let visitCount = parseInt(req.cookies.visitCount) || 0;
  visitCount += 1;
  res.cookie("visitCount", visitCount, { httpOnly: true });
  res.json({ message: `You have visited this page ${visitCount} times` });
});

app.get("/reset", (req, res) => {
  res.cookie("visitCount", 0, { httpOnly: true });
  res.json({ message: "Visit count reset" });
});

app.listen(3002, () => {
  console.log(`Server is running on port 3002 for PS03`);
});