export interface Contact {
  email: string;
  phone: string;
}

export interface Task {
  task: string;
  priority: "High" | "Medium" | "Low";
}

export interface Department {
  name: string;
  members: number;
}

export interface Settings {
  darkMode: boolean;
  notifications: boolean;
}

export interface DataItem {
  id: number;
  name: string;
  role?: string;
  skills?: string[];
  contact?: Contact;
  meta?: {
    projects: string[];
    address: {
      city: string;
      country: string;
    };
  };
  tasks?: Task[];
  details?: null | { [key: string]: unknown };
  departments?: Department[];
  settings?: Settings;
}
