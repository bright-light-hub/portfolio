import profile from "../data/profile";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="about-section">
  <div className="about-container">

    <Reveal>
      <div className="section-heading">
        <p className="section-label">About Me</p>

        <h2>
          Building useful solutions with
          <span> technology.</span>
        </h2>
      </div>
    </Reveal>

    <div className="about-content">

      <Reveal direction="left">
        <div className="about-text">
          <p>
            {profile.about}
          </p>

          {profile.aboutDetails.map((detail) => (
            <p key={detail}>
              {detail}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.1}>
        <div className="about-details">

          <div className="about-detail">
            <span>01</span>
            <div>
              <h3>Backend Development</h3>
              <p>
                Python, Django, REST APIs and
                database-driven applications.
              </p>
            </div>
          </div>

          <div className="about-detail">
            <span>02</span>
            <div>
              <h3>Frontend Development</h3>
              <p>
                React, JavaScript, HTML, CSS and
                responsive interfaces.
              </p>
            </div>
          </div>

          <div className="about-detail">
            <span>03</span>
            <div>
              <h3>Data & Machine Learning</h3>
              <p>
                Data analysis, visualization and
                introductory machine learning workflows.
              </p>
            </div>
          </div>

        </div>
      </Reveal>

    </div>
  </div>
</section>
    // <section id="about" className="about-section">
    //   <div className="about-container">

    //     {/* Section Heading */}
    //     <div className="section-heading">
    //       <p className="section-label">About Me</p>

    //       <h2>
    //         Building useful solutions with
    //         <span> technology.</span>
    //       </h2>
    //     </div>

    //     <div className="about-content">

    //       {/* Main Description */}
    //       <div className="about-text">
    //         <p>
    //           {profile.about}
    //         </p>

            
    //           {profile.aboutDetails.map((detail) => (
    //             <p key={detail}>
    //               {detail}
    //             </p>
    //           ))}
    //       </div>

    //       {/* Quick Information */}
    //       <div className="about-details">

    //         <div className="about-detail">
    //           <span>01</span>
    //           <div>
    //             <h3>Backend Development</h3>
    //             <p>
    //               Python, Django, REST APIs and database-driven
    //               applications.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="about-detail">
    //           <span>02</span>
    //           <div>
    //             <h3>Frontend Development</h3>
    //             <p>
    //               React, JavaScript, HTML, CSS and responsive
    //               interfaces.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="about-detail">
    //           <span>03</span>
    //           <div>
    //             <h3>Data & Machine Learning</h3>
    //             <p>
    //               Data analysis, visualization and introductory
    //               machine learning workflows.
    //             </p>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default About;