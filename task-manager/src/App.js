import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import FilterControls from "./components/FilterControls";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Simulate API loading
  useEffect(() => {
    setTimeout(() => {
      setTasks([
        { id: 1, text: "Read React documentation", isCompleted: false },
        { id: 2, text: "Build a small project", isCompleted: true },
        { id: 3, text: "Write lab report", isCompleted: false }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Add Task
  const handleAddTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      isCompleted: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  // Toggle Task
  const handleToggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Delete Task
  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  // Filter Logic
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;
    return true;
  });

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>

      <TaskInput onAddTask={handleAddTask} />

      <FilterControls
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;