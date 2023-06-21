import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="logo192.png" alt="My Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Hiep Nguyen</h1>
      <p>
        Senior Software Engineer with 6 years of experience in building web
        applications. When not coding, I like playing Sports and Running.
      </p>
    </div>
  );
}

function SkillList() {
  const skillData = skills;
  const countSkill = skillData.length;

  return (
    <div className="skill-list">
      {countSkill > 0 ? (
        skillData.map((skillObj) => (
          <Skill
            color={skillObj.color}
            skill={skillObj.skill}
            level={skillObj.level}
          />
        ))
      ) : (
        <p>No Skills to show</p>
      )}
    </div>
  );
}

function Skill({ color, skill, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
