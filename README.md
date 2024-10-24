# Task Tracker App

## Overview

The Task Tracker App is a beginner-friendly project developed using React and Tailwind CSS. The primary goal of this project is to familiarize myself with the React framework and utilize Tailwind CSS for styling. The app allows users to manage tasks, track their progress, and move tasks between "To-Do" and "Completed" sections.

## Features

- **Add New Tasks**: Users can add new tasks with project names and descriptions.
- **Edit Tasks**: Users can edit existing tasks in both the "To-Do" and "Completed" sections.
- **Drag and Drop**: Users can drag tasks from the "To-Do" section to the "Completed" section.
- **Timer**: Each task has a timer that tracks the duration of time spent on it.
- **Delete Tasks**: Users can delete tasks from both sections.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React DnD**: A drag-and-drop library for React.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-tracker.git

2. Navigate into the project directory:
   ```bash
   cd task-tracker-app

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev


## Known Bugs & Future Fixes

### 1. Delete Button Not Working in Completed Section
- **Issue:** After dragging a task to the "Completed" section, the delete button does not function.
- **Fix:** This will be addressed in future updates.

### 2. Timer Not Visible After Moving Tasks
- **Issue:** When a task is dragged to the "Completed" section, the time it had when still in "To-Do" is not visible.
- **Fix:** A fix will ensure that time-tracking data remains intact after dragging and dropping.

### 3. Task Editing in the Completed Section
- **Issue:** Editing a task in the "Completed" section currently updates the task in the "To-Do" section instead.
- **Fix:** Future improvements will ensure that editing works correctly for both sections.

### 4. Duplicate Task Drop Creates an Empty Component
- **Issue:** Dropping the same task multiple times into the "Completed" section results in an empty task being added.
- **Fix:** This issue will be addressed in upcoming updates.


## Project Motivation
This project was created to practice React fundamentals like state management, component interaction, and Tailwind CSS for styling. It serves as an introductory project for anyone looking to dive into React with drag-and-drop functionality and simple CRUD operations.

## Future Enhancements
- **Persistent Data:** Implement local storage or a backend to save tasks even after the page reloads.
- **Task Sorting:** Add functionality to reorder tasks manually.
- **Task Categories:** Introduce categories for better organization of tasks.
