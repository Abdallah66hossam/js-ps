const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (dataTypes) => {
  console.log(
    dataTypes.split(" ").reduce((el1, el2) => {
      let num1 = Number(el1);
      let num2 = Number(el2);
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
    })
  );

  readline.close();
});
