const express = require("express");
const app = express();

app.use(express.json());

let students = [];

app.post("/student", (req, res) => {
  const { name, age, course } = req.body;
  const student = { name, age, course };
  students.push(student);
  res.status(201).json(student);
});

app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/student/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < students.length) {
    res.json(students[id]);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

app.put("/student/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, course } = req.body;
  if (id >= 0 && id < students.length) {
    students[id] = { name, age, course };
    res.json(students[id]);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

app.delete("/student/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < students.length) {
    const deletedStudent = students.splice(id, 1);
    res.json(deletedStudent[0]);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

app.listen(3000, () => {
  console.log(`The server started for PS01 at 3000`);
});
