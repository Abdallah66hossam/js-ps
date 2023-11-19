const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("", (numbers) => {
  let arr = numbers.split(" ");
  let num1 = arr[0] * arr[1];
  let num2 = arr[2] * arr[3];

  console.log(num1 - num2);
});
