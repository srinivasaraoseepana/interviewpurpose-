// src/hooks/useTasks.ts

import { useState, useEffect } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "../utils/api";
import { Task } from "../types/task";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks from server
  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTasks();
      setTasks(data.slice(0, 5));
      setError(null);
    } catch (error) {
      setError("failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  // Add new task
  const handleAddTask = async (task: Omit<Task, "id">) => {
    try {
      setLoading(true);
      setError(null);
      const newTask = await addTask(task);
      setTasks((prev) => [...prev, newTask]);
    } catch (error) {
      setError("faliled to add task");
    } finally {
      setLoading(false);
    }
  };

  // Update existing task
  const handleUpdateTask = async (updatedTask: Task) => {
    try {
      setLoading(true);
      setError(null);
      const newTask = await updateTask(updatedTask);
      setTasks((prev) =>
        prev.map((task) => (task.id === updateTask.id ? newTask : task))
      );
    } catch (error) {
      setError("failed to update task");
    } finally {
      setLoading(false);
    }
  };

  // Delete task
  const handleDeleteTask = async (id: number) => {
    try {
      setLoading(true);
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      setError(null);
    } catch (err) {
      setError("Failed to delete task");
    } finally {
      setLoading(false);
    }
  };

  // Load tasks automatically when the component mounts
  useEffect(() => {
    loadTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
    loadTasks, // if manually reload needed
  };
};
