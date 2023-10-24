# Countdown Timer

A simple command-line countdown timer built with TypeScript and inquirer that allows you to set a target date and time for a countdown.

## Description

Welcome to the Countdown Timer! This program lets you set a target date and time, and it will display a countdown in seconds until that time is reached. The app will continuously update the countdown in real-time.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the Countdown Timer files are located.

3. Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   npm install
   ```

5. Start the Countdown Timer by running the following command:

   ```sh
   tsc countDownTimer.ts && countDownTimer.js
   ```

6. Follow the prompts to enter the target date and time in the format `YYYY-MM-DD HH:MM:SS`.

7. The program will display the remaining time in seconds until the target date and time are reached.

8. The countdown will stop and the program will indicate when the target time has passed.

## Code Overview

The Countdown Timer is implemented using TypeScript and the `inquirer` library for user input. Here's a brief overview of how the code works:

- Users input the target date and time through the command-line interface provided by the `inquirer` library.
- The `countdownTimer` function calculates the remaining time in seconds between the current date and time and the target date and time.
- The countdown is displayed and updated in real-time using a setInterval loop.

Feel free to explore the code and customize it as you see fit. You can enhance the app by adding more features like visual indicators or different time units for display.

## Dependencies

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

[Muneeb u Rehman]
