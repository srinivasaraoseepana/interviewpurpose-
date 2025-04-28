import { Task } from "../types/task";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = async (): Promise<Task> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("falied to fetch tasks");
  }
  const result = await response.json();
  return result;
};

export const addTask = async (task: Omit<Task, `id`>): Promise<Task> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error("failed to add task");
  }
  const result = response.json();

  return result;
};

export const updateTask = async (task: Task): Promise<Task> => {
  const response = await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to update task");
  return response.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete task");
};
