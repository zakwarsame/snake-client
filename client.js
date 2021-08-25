const { IP, PORT } = require("./constants");
const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data)

  });
  conn.on("connect", (data)=>{
    console.log("Connection established.");
    conn.write("Name: lol");
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect