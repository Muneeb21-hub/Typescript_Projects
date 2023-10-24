# Text Analyzer

A simple command-line text analyzer built with TypeScript and inquirer that provides character and word count for an English paragraph.

## Description

Welcome to the Text Analyzer! This program helps you analyze an English paragraph by providing the character count and word count. You can input any paragraph, and the program will calculate the number of characters and words present in it.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the Text Analyzer files are located.

3. Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   tsc wordCounter.ts && node wordCounter.js
   ```

5. Start the Text Analyzer by running the following command:

   ```sh
   npm start
   ```

6. Follow the prompts to enter an English paragraph for analysis.

7. The program will display the character count and word count for the provided paragraph.

## Code Overview

The Text Analyzer is implemented using TypeScript and the `inquirer` library for user input. Here's a brief overview of how the code works:

- Users input an English paragraph through the command-line interface provided by the `inquirer` library.
- The `analyzeText` function calculates the character count by removing whitespace and the word count by splitting the paragraph into words.
- The main function handles user interactions and error handling.

Feel free to explore the code and customize it as you see fit. You can extend the functionality by adding more text analysis features, such as counting sentences or identifying common words.

## Dependencies

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

[Muneeb u Rehman]
