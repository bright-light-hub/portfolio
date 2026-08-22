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
        <div className="education-card">

          <div className="education-year">
            {profile.education.year}
          </div>

          <div className="education-content">
            <p className="education-degree">
              {profile.education.shortDegree}
            </p>

            <h3>
              {profile.education.degree}
            </h3>

            <p className="education-description">
              {profile.education.description}
            </p>

            <div className="education-subjects">
              <span>Programming</span>
              <span>Database Systems</span>
              <span>Web Development</span>
              <span>Data Science</span>
              <span>Artificial Intelligence</span>
              <span>Software Engineering</span>
            </div>
          </div>

        </div>
        </Reveal>

        

      </div>
    </section>
  );
}

export default Education;