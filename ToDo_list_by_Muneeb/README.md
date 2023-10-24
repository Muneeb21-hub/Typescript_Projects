# CLI_Todo_List_by_Muneeb
 
# Todo App

A simple command-line Todo app built with TypeScript and Node.js that allows you to manage your tasks.

## Description

Welcome to the Todo App! This program lets you create and manage your tasks using a command-line interface. You can add new tasks, mark tasks as done, and list your tasks. The app stores your tasks in a JSON file for persistence across sessions.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the Todo app files are located.

3. Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   npm install
   ```

5. Start the Todo app by running the following command:

   ```sh
    tsc ToDO_list.ts && node ToDo_list.js
   ```

6. Follow the prompts to interact with the app. You can add new tasks, mark tasks as done, list tasks, and exit the app.

7. Your tasks will be stored in the `todos.json` file in the app's directory.

## Code Overview

The Todo app is implemented using TypeScript and the `inquirer` library for user input. Here's a brief overview of how the code works:

- The program uses the `fs` module to read and write tasks to a JSON file.
- The `TodoApp` class manages the core functionality of adding, marking, and listing tasks.
- Users interact with the app through a command-line interface provided by the `inquirer` library.

Feel free to explore the code and customize it as you see fit. You can enhance the app by adding features like task editing, due dates, and priority levels.

## Dependencies

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

[Muneeb u Rehman]