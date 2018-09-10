require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const port = 3009;
const app = express();
const socket = require("socket.io");
const massive = require("massive");
const { getUsers, postUsers } = require("./controllers/userController");

app.use(bodyParser.json());

//--------MESSAGING WITH SOCKET.IO-------------------------------

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));
//-------------------GET USERS-------------------------------------
app.get("/api/users", getUsers);
//------------------POST USERS-------------------------------------
app.post("/api/newUsers", postUsers);
server = app.listen(port, () => {
  console.log(`Listening on port ${3009}`);
});

io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});
