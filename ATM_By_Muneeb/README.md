# ATM Console Application

A simple ATM console application that allows users to check their balance and withdraw money.

## Description

Welcome to the ATM Console Application! This program simulates an ATM where users can log in using their user ID and PIN. Once logged in, users can check their account balance or withdraw money from their account. The application provides a user-friendly interface using the `inquirer` library for interaction.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the ATM application files are located.

3. Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   npm install
   ```

5. Start the ATM application by running the following command:

   ```sh
    tsc AtmMachine.ts node AtmMachine.js
   ```

6. Follow the prompts to enter your user ID and PIN.

7. Once logged in, choose from the available actions: "Check Balance," "Withdraw," or "Exit."

8. Follow the prompts for the chosen action.

## Code Overview

The ATM application is implemented using JavaScript and the `inquirer` library for user input. Here's a brief overview of how the code works:

- Users are prompted to enter their user ID and PIN for authentication.
- If the provided user ID and PIN are valid, users can choose from available actions.
- Users can check their balance or withdraw money based on their account balance and the withdrawal amount.

Feel free to explore the code and customize it as you see fit. You can extend this application by adding features like depositing funds, handling multiple users, and improving error handling.

## Dependencies

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

[Muneeb u Rehman]

