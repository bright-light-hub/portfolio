import profile from "../data/profile";
import Reveal from "./Reveal";

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">

        <Reveal>
          <div className="section-heading">
            <p className="section-label">Education</p>

            <h2>
              My academic
              <span> foundation.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          {profile.education.map((edu, index) => (
            <div className="education-card" key={edu.id || index}>

              <div className="education-year">
                {edu.year}
              </div>

              <div className="education-content">
                <p className="education-degree">
                  {edu.shortDegree}
                </p>

                <h3>
                  {edu.degree}
                </h3>

                <p className="education-description">
                  {edu.description}
                </p>


                {edu.subjects && edu.subjects.length > 0 && (
                  <div className="education-subjects">
                    {edu.subjects.map((subject, subIndex) => (
                      <span key={subIndex}>{subject}</span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}

        </Reveal>



      </div>
    </section>
  );
}

export default Education;