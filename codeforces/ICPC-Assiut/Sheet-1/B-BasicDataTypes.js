const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (dataTypes) => {
  dataTypes.split(" ").map((el) => console.log(el));

  readline.close();
});
