# To-Do List (React)

## Overview  
A simple **To-Do List** web application built with **React** and **Tailwind CSS**. This application allows users to add, edit, delete, and mark tasks as completed. Tasks are persisted in the **Local Storage**, allowing them to remain across browser sessions. The app features task filtering, showing only completed tasks when needed.

## Features
- **Add Tasks:** Add new tasks to your to-do list.
- **Edit Tasks:** Modify any existing task.
- **Delete Tasks:** Remove tasks from your list.
- **Mark as Completed:** Check/uncheck tasks as completed.
- **Filter Tasks:** Toggle to show only completed tasks.
- **Persistence:** All tasks are saved in **Local Storage** for persistent data.

## Technologies Used
- **React**
- **Tailwind CSS**
- **UUID** (for generating unique task IDs)
- **Local Storage** (for task persistence)

## How to Run
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/todo-list-react.git
    ```
2. Install dependencies:
    ```bash
    cd todo-list-react
    npm install
    ```
3. Install `uuid` module:
    ```bash
    npm install uuid
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
   This will launch the app in your browser at `http://localhost:5173`.

5. Open the app and start managing your to-do list!

## Example Interaction
Here is how the application interacts with the user:

1. **Adding a task:**
    - Type a task into the input field and click **Save** to add it to your to-do list.
2. **Marking a task as completed:**
    - Click the checkbox next to a task to mark it as completed, which will strike through the text.
3. **Editing a task:**
    - Click the **Edit** button next to a task to modify it.
4. **Deleting a task:**
    - Click the **Delete** button next to a task to remove it from the list.
5. **Resetting the list:**
    - Click the **Reset** button to clear all tasks from Local Storage.

## Example Screenshots  
Here’s how the app might look:

![Todo App Screenshot](<Insert screenshot URL>)

## License
This project is open-source and available under the **MIT License**.
