import FilterOptions from "./components/FilterOptions";
import SearchBar from "./components/SearchBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";
import { Task } from "./types/task";

import { useState } from "react";

const TasksPlayGround = () => {
  const {
    tasks,
    loading,
    error,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
  } = useTasks();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Completed" | "Incompleted"
  >("All");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  // Filtered and Searched Tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "All" ||
      (filterStatus === "Completed" && task.completed) ||
      (filterStatus === "Incompleted" && !task.completed);
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleSubmit = (title: string) => {
    if (editingTask) {
      handleUpdateTask({ ...editingTask, title });
      setEditingTask(null);
    } else {
      const newTask = {
        userId: 1,
        title,
        completed: false,
      };
      handleAddTask(newTask);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Task Manager</h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterOptions
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <TaskForm onSubmit={handleSubmit} editingTask={editingTask} />

      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default TasksPlayGround;
