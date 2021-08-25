const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "r") {
    setInterval(() => {
      connection.write(`Move: ${inputDirection}`);
    }, 70);
  }
  if (key === "w" || key === "W" || key === "8") {
    inputDirection = "up";
  }
  if (key === "a" || key === "A" || key === "4") {
    inputDirection = "left";
  }
  if (key === "s" || key === "S" || key === "5") {
    inputDirection = "down";
  }
  if (key === "d" || key === "D" || key === "6") {
    inputDirection = "right";
  }
};

module.exports = {
  setupInput,
}