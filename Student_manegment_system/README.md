# Student Enrollment and Management System

The **Student Enrollment and Management System** is a console-based application developed in TypeScript. It allows users to enroll students in courses, manage their balances, view their information, and save their data to a JSON file. The program utilizes the `inquirer` library for user interaction and the `fs` module for file operations.

## Features

- **Enroll a Student:** Enter student details including name, initial balance, course name, and course fee to enroll the student in a course.
- **View Balance:** After enrolling, view the student's current balance.
- **Pay Tuition:** Students can pay tuition fees to reduce their balance. The program ensures that students cannot overpay.
- **Student Status:** Display detailed information about a student, including name, student ID, enrolled courses, and balance.
- **Saving and Loading Data:** Save and load student data to/from a JSON file named `students.json`.

## Getting Started

1. Install the necessary dependencies by running:

   ```bash
   npm install inquirer
   npm install fs
   ```

2. Run the application using Node.js:

   ```bash
   tsc studentManagementSystem.ts && node studentManagementSystem.js
   ```

3. Follow the prompts to enroll students, view their information, and exit the program.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): Used for user input and interaction.
- [fs](https://nodejs.org/api/fs.html): Used for file system operations.

## Usage Example

1. Choose "Enroll a student" from the menu.
2. Enter the student's name, initial balance, course name, and course fee.
3. View the student's balance after enrolling.
4. To exit the program, choose "Exit" from the menu.

## Data Persistence

Student data is stored in a JSON file named `students.json`. Upon each enrollment, the student's information is appended to the existing data. On application start, the program loads the existing data to display accurate student information.

## Acknowledgments

The **Student Enrollment and Management System** showcases basic object-oriented programming concepts in TypeScript. It demonstrates the usage of user input, file operations, and data persistence, offering a simplified way to manage student enrollment and tuition fees.

Enjoy using the program to enroll students, track their progress, and manage their balances! 🎓📚

## Athour

Muneeb u Rehman