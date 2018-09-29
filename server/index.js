require("dotenv").config();
// const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const port = 3001;
const app = express();
const socket = require("socket.io");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const paymentApi = require("./routes/payment");
const twilio = require("twilio");
//---------------------Stripe-------------------------
const SERVER_CONFIGS = require("./constants/server");
const configureServer = require("./server");
const configureRoutes = require("./routes");
const checkForSessions = require("./middlewares/checkForSessions");
// const cors = require("cors");

configureServer(app);
configureRoutes(app);
//---------------------Twilo--------------------------
const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const client = new twilio(accountSid, authToken);
//-------------------Users Controllers----------------------
const {
  getAdmin,
  getUsers,
  postUsers,
  deleteUsers,
  getOneUser,
  logOut
} = require("./controllers/userController");
//-------------------Location Controller--------------------------
const { postLatLng, getLatLng } = require("./controllers/location_controller");
const {
  getStory,
  postStory,
  deletePost
  //------------------------Bulletin Controller------------------
} = require("./controllers/story_controller");
const {
  getBulletin,
  postActivity,
  postServices,
  deleteActivityPost,
  updateActivityPost
} = require("./controllers/bulletin_controller");
//-----------------------------------------------------------
app.use(bodyParser.json());
// app.use(cors());
//-----------------------Auth0-Session---------------------------------------
app.use(
  session({
    secret: "battleBuddy", //put in .env
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 7 * 24 * 60 * 60 * 1000
    }
  })
);
app.use(checkForSessions);
//--------------------------MASSIVE-------------------------------
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/login",
      scope: "openid email profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  )
);
//--------------------------PassPort------------------------------
//-----------------not getting console.log----------------------
//----------is what I see using google or github the same for every user is they included it (i.g picture)
passport.serializeUser((user, done) => {
  // console.log(user);
  const db = app.get("db");
  db.get_usersByAuthid([user.id]).then(response => {
    // console.log(response);
    if (!response[0]) {
      db.add_usersByAuthid([user.displayName, user.id, user.picture])
        .then(res => done(null, res[0]))
        .catch(err => console.log(err));
    } else return done(null, response[0]);
  });
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

//-------------------Auth0 login-----------------------------------
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: process.env.REACT_APP_SUCCESS,
    failureRedirect: "/ "
  })
);
//------------------Admin----------------------------------------
app.get("/api/admin", getAdmin);
app.get("/logout", logOut);
//-------------------Get One User---------------------------------
app.get("/api/getOne", getOneUser);
// app.get("/api/login", authGet);
//-------------------GET USERS------------------------------------
app.get("/api/users", getUsers);
//------------------POST USERS------------------------------------
app.post("/api/newUsers", postUsers);
//-------------------DELETE USERS---------------------------------
app.delete("/api/delete/:id", deleteUsers);
//-------------------Post Lat/lng---------------------------------
app.post("/api/map", postLatLng);
//-------------------Get Lat/Lng----------------------------------
app.get("/api/loc", getLatLng);
//-------------------Story----------------------------------------
app.get("/api/story", getStory);
app.post("/api/story", postStory);
//-------------------Delete Post----------------------------------
app.delete("/api/deletePost/:id", deletePost);
//-------------------BulletinBoard--------------------------------
app.get("/api/bulletinboard", getBulletin);
// //-------------------Activity-------------------------------------
app.post("/api/activity", postActivity);
app.delete("/api/deleteActivity/:id", deleteActivityPost);
app.put(`/api/updateActivity/:id`, updateActivityPost);
// //-------------------Services-------------------------------------
app.post("/api/services", postServices);
//-------------------Twilio endpoints-----------------------------

app.get("/api/text", (req, res) => {
  res.send("Welcome to the express Server");
  const { recipient, textmessage } = req.query;
  client.messages
    .create({
      body: textmessage,
      to: recipient,
      from: "+16822040763"
    })
    .then(message => console.log(message.body));
});
//-------------------Nodemailer-----------------------------------
const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var transporter = nodemailer.createTransport(
  smtpTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  })
);
// let poolConfig = {
//   pool: true,
//   host: "smtp.hotmail.com",
//   port: 465,
//   secure: true, // use TLS
//   auth: {
//     user: "username",
//     pass: "password"
//   }
// };
app.post("/api/send", (req, res, next) => {
  console.log(req.body.message);

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} email: ${email} message: ${message} `;

  var mail = {
    from: name,
    to: email,
    subject: "New Message from Contact Form",
    html: content
  };

  transporter.sendMail(mail, (err, data) => {
    console.log("THIS IS MAIL", mail);
    console.log("THIS IS ERR", err);
    console.log("THIS IS DATA", data);
    if (err) {
      console.log("THIS IS TRANSPORTER CONSOLE.LOG ", err);
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });
//-------------------Server---------------------------------------
server = app.listen(port, () => {
  console.log(`Listening on port ${3001}`);
});

//--------MESSAGING WITH SOCKET.IO-------------------------------
io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});
//--is .userInfo.getUserByAuthid one table?? where did user.id come from??
//was it from auht0, if so, where is the the id???
