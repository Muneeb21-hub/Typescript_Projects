#!/usr/bin/env node
import inquirer from 'inquirer';
import fs from 'fs';

class Student {
  private static studentIdCounter: number = 10000;

  constructor(
    private name: string,
    private courses: string[] = [],
    private balance: number = 0,
    private studentId: number = Student.generateUniqueStudentId()
  ) {}

  enroll(course: string, fee: number): void {
    this.courses.push(course);
    this.balance += fee;
  }

  viewBalance(): void {
    console.log(`Balance: $${this.balance}`);
  }

  payTuition(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Payment of $${amount} received. Remaining balance: $${this.balance}`);
    } else {
      console.log(`Insufficient balance. Balance: $${this.balance}`);
    }
  }

  showStatus(): void {
    console.log(`Student Name: ${this.name}`);
    console.log(`Student ID: ${this.studentId}`);
    console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
    this.viewBalance();
  }

  getStudentData(): any {
    return {
      name: this.name,
      courses: this.courses,
      balance: this.balance,
      studentId: this.studentId,
    };
  }

  private static generateUniqueStudentId(): number {
    return Student.studentIdCounter++;
  }
}

async function enrollStudent() {
  const studentDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter student name:',
    },
    {
      type: 'input',
      name: 'balance',
      message: 'Enter initial balance:',
    },
    {
      type: 'input',
      name: 'course',
      message: 'Enter course name to enroll:',
    },
    {
      type: 'input',
      name: 'fee',
      message: 'Enter course fee:',
    },
  ]);

  const student = new Student(studentDetails.name);
  student.enroll(studentDetails.course, parseFloat(studentDetails.fee));
  student.viewBalance();

  saveStudentData(student.getStudentData());
}

function loadStudentData(): any[] {
  try {
    const data = fs.readFileSync('students.json', 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveStudentData(studentData: any) {
  try {
    const existingData = loadStudentData();
    existingData.push(studentData);

    const data = JSON.stringify(existingData, null, 2);
    fs.writeFileSync('students.json', data);
    console.log('Student data saved to students.json');
  } catch (error) {
    let errorMessage = "Failed to save student data:"
    if(error instanceof Error){
      console.error(errorMessage);
    }
  }
}

async function main() {
  try {
    const options = [
      {
        type: 'list',
        name: 'choice',
        message: 'Choose an action:',
        choices: ['Enroll a student', 'Exit'],
      },
    ];

    while (true) {
      const selectedOption = await inquirer.prompt(options);

      switch (selectedOption.choice) {
        case 'Enroll a student':
          await enrollStudent();
          break;
        case 'Exit':
          console.log('Exiting the program.');
          return;
        default:
          console.log('Invalid choice.');
      }
    }
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }
}

main();
