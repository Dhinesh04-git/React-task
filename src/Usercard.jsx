import './Usercard.css'
const userData = [
  {
    name: "dhinesh",
    city: "cbe",
    isstudent: true,
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    isonline: true,
    profile: <img src="" alt="image1" />,
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
  },
  {
    name: "dhivineesh",
    city: "cbe",
    isstudent: false,
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    isonline: true,
    profile: <img src="" alt="image1" />,
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
  },
  {
    name: "ganesh",
    city: "cbe",
    isstudent: true,
    skills: ["UI/UX", "Front End Development", "CSS", "JavaScript", "React", "Node"],
    isonline: true,
    profile: <img src="" alt="image1" />,
    description: "Expert in UI/UX and Front End Development with a knack for creating intuitive user experiences."
  }
];

function User(props) {
  return (
    <div className="card-container">
      <h3>Name: {props.name}</h3>
      <h3>City: {props.city}</h3>
      <h3>Student: {props.isstudent ? "online" : "offline"}</h3>
      <div className="skill-container">
        <h3>Skills</h3>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <button className='primary'>CONTACT</button>
        <button className='primary OUTLINE'>FOLLOW</button>
      </div>
    </div>
  );
}

export default function Usercard() {
  return (
    <>
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
