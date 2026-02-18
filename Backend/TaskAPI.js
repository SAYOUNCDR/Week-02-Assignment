const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const demoTask = [
  { id: 1, title: "Task 1", Completed: false },
  { id: 2, title: "Task 2", Completed: true },
  { id: 3, title: "Task 3", Completed: false },
];

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "API is running successfully!" });
});

app.get("/api/tasks", (req, res) => {
  const { completed } = req.query;
  let filteredTasks = demoTask;

  if (completed === "true") {
    filteredTasks = demoTask.filter((t) => t.Completed === true);
  } else if (completed === "false") {
    filteredTasks = demoTask.filter((t) => t.Completed === false);
  }

  res.status(200).json(filteredTasks);
});

app.get("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = demoTask.find((t) => t.id === taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.post("/api/tasks", (req, res) => {
  const { title, completed } = req.body;
  const newTask = {
    id: demoTask.length + 1,
    title,
    Completed: completed || false,
  };
  demoTask.push(newTask);
  res.status(201).json(newTask);
});

app.put("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = demoTask.findIndex((t) => t.id === taskId);

  if (taskIndex == -1) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  const { title, completed } = req.body;
  demoTask[taskIndex] = { ...demoTask[taskIndex], title, Completed: completed };
  res.status(200).json(demoTask[taskIndex]);
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = demoTask.findIndex((t) => t.id === taskId);
  if (taskIndex == -1) {
    res.status(404).json({ message: "Task not found" });
    return;
  }
  demoTask.splice(taskIndex, 1);
  res.status(200).json({ message: "Task deleted successfully" });
});

app.listen(4001, () => {
  console.log(`Server is running on port 4001`);
});
