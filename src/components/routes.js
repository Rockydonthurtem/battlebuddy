import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "./chat/Chat";
import TextMessages from "./TextMessages";
import Checkout from "./stripe/Checkout";
import Nodemailer from "./Nodemailer";
import GetUsers from "./GetUsers";
import NewUsers from "./NewUsers";
import Resources from "./Resources";
import Firstpage from "./Firstpage";
import Journal from "./Journal";
import Challenge from "./Challenge";
import Bulletinboard from "./Bulletinboard";
import Donate from "./Donate";
import Home from "./Home";
import About from "./About";
import Task from "./Task";
import Cod from "./Cod";
import Mission from "./Mission";
export default (
  <Switch>
    <div className="routes">
      <Route exact path="/" component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/resources" component={Resources} />
      <Route path="/text" component={TextMessages} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/nodemailer" component={Nodemailer} />
      <Route path="/getusers" component={GetUsers} />
      <Route path="/newusers" component={NewUsers} />
      <Route path="/firstpage" component={Firstpage} />
      <Route path="/journal" component={Journal} />
      <Route path="/challenge" component={Challenge} />
      <Route path="/bulletin" component={Bulletinboard} />
      <Route path="/donate" component={Donate} />
      <Route path="/about" component={About} />
      <Route path="/task" component={Task} />
      <Route path="/cod" component={Cod} />
      <Route path="/mission" component={Mission} />
    </div>
  </Switch>
);
