let input = prompt("Enter a number:");
let number = parseInt(input);

if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative number.");
} else {
    // Factorial using for loop
    let factFor = 1;
    for (let i = 1; i <= number; i++) {
        factFor *= i;
    }

    // Factorial using reduce method
    let numbersArray = [];
    for (let i = 1; i <= number; i++) {
        numbersArray.push(i);
    }

    let factReduce = numbersArray.reduce((acc, val) => acc * val, 1);


    console.log(`Factorial of ${number} using for loop: ${factFor}`);
    console.log(`Factorial of ${number} using reduce: ${factReduce}`);
}
