const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: '50542' // PORT number here,
  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data)

  });
  conn.on("connect", ()=>{
    console.log("Connection established.");
    conn.write("Name: lol");

    // setInterval(()=>{
    //     conn.write("Move: right")
    // }, 1000)
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();


module.exports = {connect}