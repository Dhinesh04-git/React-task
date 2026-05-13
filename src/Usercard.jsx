import './Usercard.css';
import React, { useState } from 'react';
import OIP from './OIP.webp'


function Text() {
  const [info, setMessage] = useState(
    "HI I AM DHINESH CLICK HERE TO SEND MESSAGE I WILL CONTACT YOU"
  );

  return (
    <div className="conTACT-Card">
      <h1>
        {info}
      </h1>
      <button  onClick={() => setMessage("Message sent! We’ll reach out in a few minutes.just check your mail id we will sent zoom link")}>click me</button>
    </div>
  );
}

const userData = [
  {
    name: "dhinesh",
    city: "cbe",
    isstudent: true,
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    isonline: true,
    profile: "", // image URL can go here
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
  },
  {
    name: "dhivineesh",
    city: "cbe",
    isstudent: false,
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    isonline: true,
    profile: "",
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
  },
  {
    name: "ganesh",
    city: "cbe",
    isstudent: true,
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    isonline: true,
    profile: "",
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
  }
];

function User(props) {
  return (
    <div className="card-container">
      <h3>Name: {props.name}</h3>
      <h3>City: {props.city}</h3>
      <img src={OIP} className="img" alt="user" />
      <h3>Status: {props.isstudent ? "Student" : "Professional"}</h3>
      <div className="skill-container">
        <h3>Skills</h3>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <button className="primary">CONTACT</button>
        <button className="primary outline">FOLLOW</button>
      </div>
    </div>
  );
}

export default function Usercard() {
  return (
    <>
      <Text />
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          isstudent={user.isstudent}
          isonline={user.isonline}
          profile={user.profile}
          skills={user.skills}
        />
      ))}
    </>
  );
}
