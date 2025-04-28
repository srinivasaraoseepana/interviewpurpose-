// src/components/TaskForm.tsx

import { useState, useEffect } from "react";
import { Task } from "../types/task";

interface TaskFormProps {
  onSubmit: (title: string) => void;
  editingTask: Task | null;
}

const TaskForm = ({ onSubmit, editingTask }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (editingTask) {
      setInputValue(editingTask.title); // If editing, prefill input
    } else {
      setInputValue(""); // Else empty input
    }
  }, [editingTask]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSubmit(inputValue.trim());
    setInputValue(""); // After submit, clear input
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={editingTask ? "Edit task..." : "Add new task..."}
        style={{
          padding: "8px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TaskForm;
