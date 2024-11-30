# Task Manager Application
A simple, feature-rich task management application that provides CRUD operations, task filtering, and a clean, responsive user interface. Built with modern web development practices.

---

## Features
- **Create, Read, Update, Delete (CRUD):** Full control over tasks.
- **Filter Tasks:** Filter tasks by status (All, Pending, Completed).
- **Form Validation:** Ensures accurate and complete input.
- **Delete Confirmation:** Prevent accidental deletions.
- **Status Toggle:** Easily update task completion status.
- **Toast Notifications:** Feedback for all actions.
- **Responsive Design:** Optimized for all screen sizes.
- **Clean UI:** Designed with Tailwind CSS.
- **Icon Integration:** Powered by Lucide React.

---

## Application Structure

### **Database Layer**
- **Library:** `idb` for efficient local storage.
- **Schema:** Structured schema with all required task fields.

### **Service Layer**
- Handles all CRUD operations.
- Provides clean interfaces for database interactions.

### **Components**
1. **TaskForm:** Handles task creation and editing.
2. **TaskList:** Displays tasks with edit/delete functionality.
3. **TaskFilter:** Filters tasks by status.

---

## Technologies Used
- **Frontend:** React, Tailwind CSS, Lucide React (icons)
- **Backend:** Node.js and  IndexedDB
- **Toast Notifications:** Custom or library-based implementation

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sharmaanchita/Task_Management_system.git
   ```
2. Install dependencies:
    ```bash
    npm install 
    ```
3. Run app:
    ```bash
    npm run dev
    ```


 
