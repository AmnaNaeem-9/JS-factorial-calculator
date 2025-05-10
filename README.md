# 🧮 Factorial Calculator (JavaScript)

This is a simple **JavaScript program** that calculates the factorial of a number entered by the user, using two different methods:

- ✅ Using a `for` loop
- ✅ Using the `reduce()` method with an array

It also includes **input validation** to ensure the user enters a valid non-negative integer.

---

## 🔧 Features

- Accepts user input (number)
- Calculates factorial using:
  - `for` loop
  - `Array.prototype.reduce()`
- Displays both results
- Handles invalid inputs (like negative numbers or letters)

---

## 📦 How to Run

### In the Browser

1. Copy the code into an HTML file inside a `<script>` tag, or open your browser's Developer Console and paste it directly.
2. The program will prompt you to enter a number.
3. It will display the factorial results using `alert()` or `console.log()`.

### In Node.js (Recommended)

Since `prompt()` doesn’t work in Node.js by default, use the version that uses `readline` instead:

1. Save the `factorial.js` file to your computer.
2. Open a terminal and run:

```bash
node factorial.js
