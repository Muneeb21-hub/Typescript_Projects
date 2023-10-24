#!/usr/bin/env node
import inquirer from 'inquirer';

async function countdownTimer(targetDate: Date) {
  const interval = setInterval(() => {
    const currentDate = new Date();
    const timeRemaining = targetDate.getTime() - currentDate.getTime();

    if (timeRemaining <= 0) {
      clearInterval(interval);
      console.log('Countdown timer has ended.');
    } else {
      const seconds = Math.floor(timeRemaining / 1000);
      console.log(`Time remaining: ${seconds} seconds`);
    }
  }, 1000);
}

async function main() {
  try {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'dateTime',
        message: 'Enter the target date and time (YYYY-MM-DD HH:MM:SS):',
      },
    ]);

    const targetDate = new Date(answer.dateTime);
    
    if (isNaN(targetDate.getTime())) {
      throw new Error('Invalid date and time format.');
    }

    countdownTimer(targetDate);
  } catch (error) {
  let errorMessage = "Failed to do something exceptional";
  if (error instanceof Error) {
    errorMessage = error.message;
  }
  console.log(errorMessage);
}
}

main();
