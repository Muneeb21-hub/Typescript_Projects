
# Quiz App

A command-line quiz app built with TypeScript, axios, and inquirer that fetches and presents multiple-choice questions from an API.

## Description

Welcome to the Quiz App! This program provides an interactive quiz experience where you can test your knowledge on various topics. The app fetches a set of multiple-choice questions from an external API, presents them one by one, and calculates your score based on your answers.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the Quiz App files are located.

3. Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   npm install
   ```

5. Start the Quiz App by running the following command:

   ```sh
   tsc quizApp.ts && node quizApp.js
   ```

6. Follow the prompts to answer the multiple-choice questions. Choose the correct answer from the given choices.

7. At the end of the quiz, the program will display your score.

## Code Overview

The Quiz App is implemented using TypeScript, axios, and the `inquirer` library for fetching questions and user input. Here's a brief overview of how the code works:

- The `fetchQuestions` function fetches multiple-choice questions from an [external API](https://opentdb.com/api.php?amount=25&category=18&difficulty=medium&type=multiple) using the axios library.
- Questions and their choices are presented to the user one by one using the `inquirer` library.
- The user's score is calculated based on correct answers.

Feel free to explore the code and customize it as you see fit. You can enhance the app by adding more features like different quiz categories, difficulty levels, and more advanced scoring mechanisms.

## Dependencies

- [Node.js](https://nodejs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

[Muneeb u Rehman]