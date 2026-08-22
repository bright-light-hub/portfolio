import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroPerson from "../assets/hero-person.png";
import profile from "../data/profile";


function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-layer hero-layer-one"></div>
        <div className="hero-layer hero-layer-two"></div>
        <div className="hero-layer hero-layer-three"></div>

        <div className="hero-dots hero-dots-one"></div>
        <div className="hero-dots hero-dots-two"></div>
      </div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-label">
            <span></span>
            {profile.availability}
          </p>

          <h1>
            Hi, I'm <span>{profile.name}</span>
          </h1>

          <h2>
            {profile.role}
          </h2>

          <p className="hero-description">
            {profile.tagline}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
              <ArrowRight size={18} />
            </a>

            <a
              href={profile.resume}
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <div className="hero-image-container">

            {/* Geometric layers behind person */}
            <div
              className="portrait-layer portrait-layer-one"
              aria-hidden="true"
            ></div>

            <div
              className="portrait-layer portrait-layer-two"
              aria-hidden="true"
            ></div>

            <div
              className="portrait-layer portrait-layer-three"
              aria-hidden="true"
            ></div>

            {/* Ambient glow */}
            <div
              className="portrait-glow"
              aria-hidden="true"
            ></div>

            {/* Person */}
            <img
              src={heroPerson}
              alt="Abhishek - Python and Full-Stack Developer"
              className="hero-person"
            />

            {/* Decorative frame */}
            <div
              className="portrait-frame"
              aria-hidden="true"
            ></div>

            <div
              className="portrait-corner portrait-corner-top"
              aria-hidden="true"
            ></div>

            <div
              className="portrait-corner portrait-corner-bottom"
              aria-hidden="true"
            ></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </motion.a>
    </section>
  );
}

export default Hero;











// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Download,
// } from "lucide-react";

// function Hero() {
//   return (
//     <section id="home" className="hero">
//       <div className="hero-background">
//         <div className="hero-grid"></div>
//         <div className="hero-glow hero-glow-one"></div>
//         <div className="hero-glow hero-glow-two"></div>
//       </div>

//       <div className="hero-container">
//         {/* Left Content */}
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="hero-label">
//             <span></span>
//             Available for opportunities
//           </p>

//           <h1>
//             Hi, I'm <span>Bright</span>
//           </h1>

//           <h2>
//             Python & Full-Stack Developer
//           </h2>

//           <p className="hero-description">
//             I build practical, scalable and user-focused web
//             applications using Python, Django, React and modern
//             web technologies.
//           </p>

//           <div className="hero-buttons">
//             <a href="#projects" className="primary-button">
//               View My Projects
//               <ArrowRight size={18} />
//             </a>

//             <a
//               href="/resume.pdf"
//               className="secondary-button"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Download Resume
//               <Download size={18} />
//             </a>
//           </div>

//           <div className="hero-socials">
//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="GitHub"
//             >
//               GitHub
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//             >
//               LinkedIn
//             </a>
//           </div>
//         </motion.div>

//         {/* Right Content */}
//         <motion.div
//           className="hero-image-wrapper"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="hero-image-container">
//             {/* Temporary placeholder */}
//             <div className="hero-image-placeholder">
//               <span>Your Photo</span>
//             </div>
//           </div>

//           <div className="hero-decoration hero-decoration-one"></div>
//           <div className="hero-decoration hero-decoration-two"></div>
//         </motion.div>
//       </div>

//       <motion.a
//         href="#about"
//         className="scroll-indicator"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//       >
//         <span>Scroll to explore</span>
//         <div className="scroll-line"></div>
//       </motion.a>
//     </section>
//   );
// }

// export default Hero;