import { DataItem } from "./interfaces";

export const data: DataItem[] = [
  // 1. Simple object
  {
    id: 1,
    name: "Alice",
    role: "Developer",
  },

  // 2. Object with nested array
  {
    id: 2,
    name: "Bob",
    skills: ["JavaScript", "React", "Node.js"],
  },

  // 3. Object with nested object
  {
    id: 3,
    name: "Charlie",
    contact: { email: "charlie@example.com", phone: "123-456-7890" },
  },

  // 4. Object with mixed nested data
  {
    id: 4,
    name: "Diana",
    meta: {
      projects: ["Project A", "Project B"],
      address: { city: "Berlin", country: "Germany" },
    },
  },

  // 5. Object with deep nested array
  {
    id: 5,
    name: "Eve",
    tasks: [
      { task: "Fix bug", priority: "High" },
      { task: "Write docs", priority: "Medium" },
    ],
  },

  // 6. Object with nullable nested fields
  {
    id: 6,
    name: "Frank",
    details: null, // Explicit null (useful for APIs)
  },

  // 7. Complex object (arrays + objects)
  {
    id: 7,
    name: "Grace",
    departments: [
      { name: "Frontend", members: 5 },
      { name: "Backend", members: 3 },
    ],
    settings: { darkMode: true, notifications: false },
  },
];
