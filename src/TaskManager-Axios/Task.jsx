import axios from "axios";
import { useState } from "react";

const baseURL = "http://localhost:4001/api";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [singleTask, setSingleTask] = useState(null);
  const [status, setStatus] = useState("");

  const [inputId, setInputId] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputCompleted, setInputCompleted] = useState(false);

  const getAllTasks = async () => {
    try {
      const response = await axios.get(`${baseURL}/tasks`);
      setTasks(response.data);
      setStatus("Fetched all tasks");
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setStatus("Error fetching tasks");
    }
  };

  const getTaskById = async () => {
    if (!inputId) {
      setStatus("Please enter an ID");
      return;
    }
    try {
      const response = await axios.get(`${baseURL}/tasks/${inputId}`);
      setSingleTask(response.data);
      setStatus(`Fetched task ${inputId}`);
    } catch (error) {
      console.error("Error fetching task:", error);
      setStatus("Task not found");
      setSingleTask(null);
    }
  };

  const createTask = async () => {
    if (!inputTitle) {
      setStatus("Please enter a title");
      return;
    }
    try {
      const newTask = { title: inputTitle, completed: inputCompleted };
      const response = await axios.post(`${baseURL}/tasks`, newTask);
      setTasks([...tasks, response.data]);
      setStatus(`Task created: ${response.data.id}`);
      setInputTitle("");
      setInputCompleted(false);
    } catch (error) {
      console.error("Error creating task:", error);
      setStatus("Error creating task");
    }
  };

  const updateTask = async () => {
    if (!inputId) {
      setStatus("Please enter an ID to update");
      return;
    }
    try {
      const updatedData = { title: inputTitle, completed: inputCompleted };
      await axios.put(`${baseURL}/tasks/${inputId}`, updatedData);
      getAllTasks();
      setStatus(`Updated task ${inputId}`);
    } catch (error) {
      console.error("Error updating task:", error);
      setStatus("Error updating task");
    }
  };

  const deleteTask = async () => {
    if (!inputId) {
      setStatus("Please enter an ID to delete");
      return;
    }
    try {
      await axios.delete(`${baseURL}/tasks/${inputId}`);

      setTasks(tasks.filter((t) => t.id !== parseInt(inputId)));

      setStatus(`Deleted task ${inputId}`);
      setSingleTask(null);
    } catch (error) {
      console.error("Error deleting task:", error);
      setStatus("Error deleting task");
    }
  };

  return (
    <div className="border border-gray-400 shadow-sm p-4 m-10 rounded-md">
      <h1 className="text-center text-md font-bold mt-10">Task Manager</h1>
      <div>
        <h3>Tasks</h3>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            placeholder="Enter task title"
          />

          <label>
            Completed:
            <input
              type="checkbox"
              checked={inputCompleted}
              onChange={(e) => setInputCompleted(e.target.checked)}
            />
          </label>

          <button onClick={createTask}>Create New Task</button>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Task ID: </label>
          <input
            type="number"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
            placeholder="ID"
          />

          <button
            onClick={getTaskById}
            className="p-2 border border-gray-400 rounded-md m-2"
          >
            Get by ID
          </button>
          <button
            onClick={updateTask}
            className="p-2 border border-gray-400 rounded-md m-2"
          >
            Update by ID
          </button>
          <button
            onClick={deleteTask}
            className="p-2 border border-gray-400 rounded-md m-2"
          >
            Delete by ID
          </button>
        </div>

        <div>
          <button
            onClick={getAllTasks}
            className="p-2 border border-gray-400 rounded-md m-2"
          >
            Get All Tasks
          </button>
        </div>
      </div>

      <div>Status: {status}</div>

      <div>
        <div>
          <h3>Task List:</h3>
          <ul>
            {tasks.map((task) => (
              <li>
                <span>
                  <strong>{task.id}.</strong> {task.title}
                </span>
                <span
                  style={{
                    color:
                      task.Completed || task.completed ? "green" : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {task.Completed || task.completed ? "Completed" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {singleTask && (
          <div>
            <h3>Single Task View:</h3>
            <p>
              <strong>ID:</strong> {singleTask.id}
            </p>
            <p>
              <strong>Title:</strong> {singleTask.title}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {singleTask.Completed || singleTask.completed
                ? "Completed"
                : "Pending"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
