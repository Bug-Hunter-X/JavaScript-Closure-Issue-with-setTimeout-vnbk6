function myFunc() {
  for (let i = 0; i < 10; i++) {
    // Use let to create a new variable scope for each iteration
    ((i) => {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
  }
}

myFunc();