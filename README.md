# EZ TODO

A simple and efficient web application for managing daily tasks. This app allows users to add new tasks with due dates, mark them as completed, and delete them when they are no longer needed.

## Functionality

- **Add Tasks:** Users can input a task name and a due date via a popup modal.
- **Task Counter:** Dynamically tracks and displays the number of completed tasks versus total tasks.
- **Validation:** The form prevents users from submitting empty or invalid data.
- **Task Management:**
  - **Check:** Mark a task as complete by clicking the checkbox.
  - **Delete:** Remove a task permanently by clicking the trash icon.
- **Responsive:** Works on desktop and mobile screens.

## Technologies

- **HTML5** & **CSS3** (with Flexbox/Grid)
- **JavaScript (ES6)**
- **Advanced Object-Oriented Programming (OOP):** The codebase has been refactored into a modular class structure:
  - `Section`: Handles rendering the list of tasks.
  - `Popup` & `PopupWithForm`: Manages modal opening, closing, and form submission.
  - `TodoCounter`: Tracks and updates task statistics.
  - `Todo`: Generates task elements and handles individual task interactions.
  - `FormValidator`: Handles form validation logic.
- **ES Modules:** Code is organized into separate files, with `index.js` serving as the main entry point to connect the classes.
- **BEM Methodology:** For clean and organized CSS class naming.

## Deployment

This project is deployed on GitHub Pages:
[Link to EZ TODO](https://miguelgho.github.io/se_project_todo-app/)
