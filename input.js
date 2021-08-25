// Stores the active TCP connection object.

let connection;
let givenDirection;

const setupInput = function (conn) {
  connection = conn;
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

  setInterval(() => {
    connection.write(`Move: ${givenDirection}`);
  }, 70);
  if (key === "w" || key === "W" || key === "8") {
    givenDirection = "up";
  }
  if (key === "a" || key === "A" || key === "4") {
    givenDirection = "left";
  }
  if (key === "s" || key === "S" || key === "5") {
    givenDirection = "down";
  }
  if (key === "d" || key === "D" || key === "6") {
    givenDirection = "right";
  }
  if (key === 'z'){
    connection.write("Say: Safe")
  }
};

module.exports = setupInput;
