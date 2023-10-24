#!/usr/bin/env node
import inquirer from 'inquirer';
import fs from 'fs';
// Define the BankAccount class
class BankAccount {
    accountBalance;
    constructor() {
        this.accountBalance = 100;
    }
    debit(amount) {
        let statement = "Sorry, you have insufficient balance!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.accountBalance >= amount) {
                this.accountBalance -= amount;
                statement = `Transaction successful! New account balance is ${this.accountBalance}`;
            }
            else {
                statement = "You don't have enough money to do this transaction";
            }
        }
        return statement;
    }
    credit(amount) {
        let statement = "Transaction failed!";
        if (amount > 0) {
            this.accountBalance += amount;
            if (amount > 100) {
                this.accountBalance -= 1;
            }
            statement = "Your account balance has been credited successfully!";
        }
        return statement;
    }
}
// Define the Customer class
class Customer {
    firstName = '';
    lastName = '';
    gender = '';
    age;
    mobileNumber = '';
    bankAccount;
    constructor() {
        this.bankAccount = new BankAccount();
    }
    customerInfo() {
        return `Name: ${this.firstName} ${this.lastName}
Age: ${this.age}
Gender: ${this.gender}
Mobile: ${this.mobileNumber}
Account Balance: ${this.bankAccount.accountBalance}`;
    }
    getCustomerData() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            age: this.age,
            mobileNumber: this.mobileNumber,
            accountBalance: this.bankAccount.accountBalance,
        };
    }
}
async function enrollCustomer() {
    const customerDetails = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter first name:',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter last name:',
        },
        {
            type: 'input',
            name: 'gender',
            message: 'Enter gender:',
        },
        {
            type: 'input',
            name: 'age',
            message: 'Enter age:',
        },
        {
            type: 'input',
            name: 'mobileNumber',
            message: 'Enter mobile number:',
        },
        {
            type: 'input',
            name: 'initialCredit',
            message: 'Enter initial credit amount:',
        },
    ]);
    const customer = new Customer();
    customer.firstName = customerDetails.firstName;
    customer.lastName = customerDetails.lastName;
    customer.gender = customerDetails.gender;
    customer.age = parseInt(customerDetails.age);
    customer.mobileNumber = customerDetails.mobileNumber;
    const initialCredit = parseFloat(customerDetails.initialCredit);
    customer.bankAccount.credit(initialCredit);
    console.log(customer.customerInfo());
    saveCustomerData(customer.getCustomerData());
}
function loadCustomerData() {
    try {
        const data = fs.readFileSync('customers.json', 'utf-8');
        return JSON.parse(data);
    }
    catch (error) {
        return [];
    }
}
function saveCustomerData(customerData) {
    try {
        const existingData = loadCustomerData();
        existingData.push(customerData);
        const data = JSON.stringify(existingData, null, 2);
        fs.writeFileSync('customers.json', data);
        console.log('Customer data saved to customers.json');
    }
    catch (error) {
        let errorMessage = 'Failed to save customer data:';
        if (error instanceof Error) {
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
                choices: ['Enroll a customer', 'Exit'],
            },
        ];
        while (true) {
            const selectedOption = await inquirer.prompt(options);
            switch (selectedOption.choice) {
                case 'Enroll a customer':
                    await enrollCustomer();
                    break;
                case 'Exit':
                    console.log('Exiting the program.');
                    return;
                default:
                    console.log('Invalid choice.');
            }
        }
    }
    catch (error) {
        let errorMessage = 'Failed to do something exceptional';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
}
main();
