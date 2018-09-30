import React from "react";
import "./task.css";

const TaskOfTheDay = () => {
  return (
    <div className="tod">
      <h1>Task of the day</h1>
      <h4>Day 1</h4>
      <h2>
        Choose the order that best fits your schedule: <br />
        <br />
        Mediate: minimum 5 min. <br />
        <br /> Make your bed – as soon as you start your day. <br /> <br />
        Identify 2 things you are thankful for today. <br />
        <br /> Exercise: record your results (minimum 30 min).
        <br />
        <br /> Hydrate: throughout the day.
        <br />
        <br />
        Take a walk outside. Get some sunlight.
        <br />
        <br /> Be flexible: the enemy has a vote. Bend to avoid breaking,
        anticipate that everything may not go according to plan. Leave room to
        adjust.
        <br /> <br />
        Write down three good things that happened today.
        <br />
        <br /> Score your day (scale from 1 to 10) – After Action Report – what
        was suppose to happen, what did happen, what to sustain how to improve
        Plan for tomorrow
      </h2>
    </div>
  );
};

export default TaskOfTheDay;
