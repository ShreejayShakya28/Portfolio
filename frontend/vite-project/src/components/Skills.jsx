import React from 'react';
import '../styles/Skills.css'

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Modern ES6+ features, async programming, and DOM manipulation"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Component-based architecture, hooks, and state management"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "Server-side JavaScript, API development, and backend services"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "Data analysis, machine learning, and backend development"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "NoSQL database design, aggregation, and data modeling"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description: "Version control, branching strategies, and collaborative development"
    },
    {
    name: "Matplotlib",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
    description: "Data visualization and plotting in Python"
    },
    {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    description: "Deep learning framework for building and training neural networks"
    },
    {
    name: "MLBB",
    icon: "images/icon/ml.png",
    description: "Decent fill player having reached glory once Season 38"
    }
];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1>My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;