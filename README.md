# JavaScript Closure Issue with setTimeout

This example demonstrates a common error in JavaScript involving closures and the `setTimeout` function.

The problem stems from how variables are captured within closures.  In this case, each `setTimeout` callback function closes over the variable `i`, but it doesn't capture its value at the time the callback is created. Instead, it captures a reference to the variable `i`. By the time the `setTimeout` callbacks finally execute, the loop has already completed, and `i` is equal to its final value (10).

The solution involves using `let` to create a new variable scope within the loop, ensuring each callback captures a unique value of `i`. 

## How to Run
1. Save the code in `bug.js` and `bugSolution.js`
2. Open your browser's developer console.
3. Run `bug.js` and `bugSolution.js` by pasting the code into the console.