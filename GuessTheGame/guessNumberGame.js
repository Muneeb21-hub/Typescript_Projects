#!/usr/bin/env node
import inquirer from "inquirer";
async function GuessTheNumberGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    console.log('Welcome to the The Guess the Number game!');
    console.log('I\'m thinking of a number between 1 and 100');
    async function makeGuess() {
        const { guess } = await inquirer.prompt([
            {
                type: 'input',
                name: 'guess',
                message: 'Enter Your guess'
            }
        ]);
        const parsedGuess = parseInt(guess, 10);
        if (isNaN(parsedGuess)) {
            console.log('Please enter a vald number.');
            makeGuess();
            return;
        }
        attempts++;
        if (parsedGuess === targetNumber) {
            console.log(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        }
        else if (parsedGuess < targetNumber) {
            console.log('Try a Higher Number...');
        }
        else {
            console.log('Try a lower Number');
            makeGuess();
        }
    }
    makeGuess();
}
GuessTheNumberGame();
