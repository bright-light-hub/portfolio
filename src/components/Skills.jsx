import Reveal from "./Reveal";

function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      description: "Languages I use to solve programming problems and build applications.",
      skills: [
        "Python",
        "JavaScript",
        "C",
        "SQL",
      ],
    },
    {
      title: "Frontend",
      description: "Technologies I use to create responsive and interactive interfaces.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & Database",
      description: "Tools I use to develop APIs and database-driven applications.",
      skills: [
        "Django",
        "Django REST Framework",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      title: "Data & Tools",
      description: "Technologies I use for data analysis, machine learning and development workflows.",
      skills: [
        "Power BI",
        "Excel",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "Git",
        "GitHub",
        "Postman",
      ],
    },
  ];


  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <Reveal>
          <div className="section-heading">
            <p className="section-label">Skills</p>

            <h2>
              Technologies I use to
              <span> build things.</span>
            </h2>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.08}
            >
              <div className="skill-card">
                <div className="skill-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;


