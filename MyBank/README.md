# Customer Enrollment System

This is a simple customer enrollment system implemented in TypeScript using the Inquirer library for CLI interaction and file system (FS) module for data persistence.

## Features

- Enroll a customer with their details including first name, last name, gender, age, and mobile number.
- Set an initial credit amount for the customer's bank account.
- View customer information, including their account balance.
- Data is saved to a JSON file for persistent storage.

## Getting Started

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Install dependencies using `npm install`.

## Usage

Run the program using the command:

```
tsc myBank.ts && node myBank.js
```

Follow the prompts to enroll a customer and provide the necessary information, including their initial credit amount.

## Functionality

- The program defines an `IBankAccount` interface with `debit` and `credit` methods, which the `BankAccount` class implements.
- The `Customer` class represents a customer with properties such as first name, last name, gender, age, mobile number, and a bank account.
- The `enrollCustomer` function guides the user through enrolling a customer and initializing their bank account.
- The `loadCustomerData` function reads customer data from the 'customers.json' file.
- The `saveCustomerData` function saves customer data to the 'customers.json' file.
- The `main` function provides a menu for enrolling customers or exiting the program.

## Data Persistence

Customer data is stored in a 'customers.json' file in the project directory. When a new customer is enrolled, their data is added to the file.

## Error Handling

The program includes basic error handling to catch exceptions and display meaningful error messages to the user.

## Dependencies

inquirer: Used for user input and interaction.

fs: Used for file system operations.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to create a pull request.

## Athour

Muneeb u Rehman