const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("", (R) => {
  const Bi = 3.141592653;
  if (R <= 100 && R >= 1) {
    let Area = Bi * R ** 2;
    console.log(Area.toFixed(9));
  } else console.log("R must be between 1 and 100");
});
