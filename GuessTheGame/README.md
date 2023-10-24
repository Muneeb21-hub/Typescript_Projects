# CLI_GuessTheNumber_Game_By_Muneeb

# Guess the Number Game

A simple command-line game where you try to guess a random number between 1 and 100.

## Description

Welcome to the Guess the Number game! In this game, the program will randomly select a number between 1 and 100, and your task is to guess the correct number. The program will provide feedback after each guess, helping you narrow down your choices until you guess the correct number.

## How to Play

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the game files are located.

3. Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   npm install
   ```

5. Start the game by running the following command:

   ```sh
   tsc guessNumberGame.ts  node guessNumberGame.js
   ```

6. The program will greet you and provide instructions.

7. Enter your guess when prompted. The program will inform you if your guess is too high or too low.

8. Keep making guesses until you correctly guess the target number. The program will display the number of attempts it took you to guess correctly.

## Code Overview

The game is implemented using JavaScript and the `inquirer` library for user input. Here's a brief overview of how the code works:

- The program generates a random target number between 1 and 100.
- It prompts the user to enter their guess.
- The user's input is validated, and feedback is provided based on their guess.
- The user continues guessing until they correctly guess the target number.

Feel free to explore the code and customize it as you see fit. Have fun playing and learning from this simple game implementation!

## Dependencies

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

[Muneeb u Rehman]