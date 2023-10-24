#!/usr/bin/env node
import inquirer from 'inquirer';
import axios from 'axios';
async function fetchQuestions() {
    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=25&category=18&difficulty=medium&type=multiple');
        const results = response.data.results;
        const questions = results.map(result => {
            const question = {
                question: result.question,
                choices: [...result.incorrect_answers, result.correct_answer],
                correctChoice: result.incorrect_answers.length + 1,
            };
            return question;
        });
        return questions;
    }
    catch (error) {
        throw new Error('Failed to fetch questions from the API.');
    }
}
async function startQuiz(questions) {
    let score = 0;
    for (const [index, questionData] of questions.entries()) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: `${index + 1}. ${questionData.question}`,
                choices: questionData.choices,
            },
        ]);
        if (answer.choice === questionData.choices[questionData.correctChoice - 1]) {
            score++;
        }
    }
    console.log(`Your score: ${score} out of ${questions.length}`);
}
async function main() {
    try {
        const questions = await fetchQuestions();
        await startQuiz(questions);
    }
    catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
}
main();
