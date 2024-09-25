# Find Pairs Project

## About
This is a simple Node.js project that allows users to find pairs of numbers in an array whose sum matches a given target. The program prompts the user to input an array of integers and a target sum, then finds and prints the pairs of numbers that add up to the target.

## Features
- Accepts user input from the terminal.
- Finds all pairs of elements in the array that sum up to a given target.
- Prints the indices and values of these pairs.

## Installation

### Prerequisites
Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- npm (comes with Node.js)

### Steps
1. Clone the repository or download the source files.
2. Open your terminal and navigate to the project folder.
3. Run the following command to initialize the project (this step creates the `node_modules` folder if there are dependencies, though this project doesn’t use any external libraries):

   ```bash
   npm init -y
   ```
4. Navigate to the project directory in your terminal.
5. Run the following command to start the program:
   ```bash
   npm start
   ```
6. The program will prompt you to enter an array of integers (comma-separated) and then a target sum.
    Example:
    ```bash
    Enter the array of integers (comma separated): 1,3,5,7,2,4
    Enter the target sum: 8
    ```
    Expected output:
    ```bash
    Pair found at 0 and 3 (1 + 7)
    Pair found at 1 and 2 (3 + 5)
    ```
    If no pairs are found that sum up to the target, the program will output:
    ```bash
    No pairs found
    ```
    Example:
    ```bash
    $ npm start
    Enter the array of integers (comma separated): 1,3,5,7,2,4
    Enter the target sum: 8
    Pair found at 0 and 3 (1 + 7)
    Pair found at 1 and 2 (3 + 5)
    ```

## License
This project is licensed under the MIT License
