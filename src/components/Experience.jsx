import profile from "../data/profile";
import Reveal from "./Reveal";

function Experience() {

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">

        <Reveal>
          <div className="section-heading">
            <p className="section-label">Experience</p>

            <h2>
              My professional
              <span> journey.</span>
            </h2>
          </div>
        </Reveal>
        <div className="experience-timeline">
          {profile.experience.map((experience, index) => (
            <Reveal
              key={index}
              delay={index * 0.1}
            >
              <div className="experience-item">

                <div className="experience-marker">
                  <span></span>
                </div>

                <div className="experience-content">
                  <p className="experience-period">
                    {experience.period}
                  </p>

                  <h3>{experience.title}</h3>

                  <h4>{experience.organization}</h4>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <div className="experience-technologies">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;

