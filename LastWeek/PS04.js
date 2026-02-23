const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Sayoun", role: "admin", loggedIn: false },
  { id: 2, name: "Dhruva", role: "user", loggedIn: false },
  { id: 3, name: "Charlie", role: "admin", loggedIn: false },
  { id: 4, name: "Pranav", role: "user", loggedIn: false },
  { id: 5, name: "Eve", role: "user", loggedIn: false },
];

app.post("/login", (req, res) => {
  const { name } = req.body;
  const user = users.find((u) => u.name === name);

  if (user) {
    user.loggedIn = true;
    if (user.role === "admin") {
      res.send("Admin LoggedIn");
    } else {
      res.send("Client LoggedIn");
    }
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/dashboard", (req, res) => {
  const { name } = req.body;
  const loggedUser = users.find((u) => u.name === name && u.loggedIn);

  if (!loggedUser) {
    return res.status(401).send("Access Denied: Log in first");
  }

  if (loggedUser.role === "admin") {
    res.send("Welcome Admin");
  } else {
    res.send("Welcome Client");
  }
});

app.post("/logout", (req, res) => {
  const { name } = req.body;
  const user = users.find((u) => u.name === name);

  if (user && user.loggedIn) {
    user.loggedIn = false;
    res.send("Logged Out Successfully");
  } else {
    res.status(400).send("No active session found for this user");
  }
});


app.listen(3003, () => {
  console.log(`Server running on http://localhost:3003`);
});
