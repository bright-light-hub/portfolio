import { ArrowUpRight } from "lucide-react";
import projects from "../data/projects";
import Reveal from "./Reveal";
import { useEffect, useState } from "react";

function GithubIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.89c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.48A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

    useEffect(() => {
    document.body.style.overflow = selectedProject
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <Reveal>
          <div className="section-heading">
            <p className="section-label">Selected Work</p>

            <h2>
              Projects I've
              <span> built.</span>
            </h2>
          </div>
        </Reveal>

        <p className="projects-intro">
          A selection of applications and data projects that
          demonstrate my experience across full-stack development,
          Python, AI and data science.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.08}
            >
              <article
                className={`project-card ${project.featured ? "featured-project" : ""
                  }`}
              //   key={project.id}
              >

                {/* Project Visual */}
                <div
  className={`project-visual ${
    project.images?.length
      ? "project-visual-real"
      : project.visualClass
  }`}
  onClick={() => {
    setSelectedProject(project);
    setActiveImage(0);
  }}
  role="button"
  tabIndex={0}
  onKeyDown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      setSelectedProject(project);
      setActiveImage(0);
    }
  }}
  aria-label={`View ${project.title} project`}
>
                  {project.images?.length ? (
                    <div className="project-browser">

                      <div className="browser-header">
                        <div className="browser-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="browser-address">
                          {project.title}
                        </div>
                      </div>

                      <div className="browser-screen">
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].alt}
                        />
                      </div>

                    </div>
                  ) : (
                    <>
                      <div className="project-visual-grid"></div>

                      <div className="project-visual-glow"></div>

                      <span className="project-type">
                        {project.type}
                      </span>

                      <span className="project-number">
                        {String(project.id).padStart(2, "0")}
                      </span>

                      <div className="project-visual-window">
                        <div className="visual-window-header">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                        <div className="visual-window-content">
                          <div className="visual-line large"></div>
                          <div className="visual-line"></div>
                          <div className="visual-line short"></div>

                          <div className="visual-blocks">
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Project Content */}
                <div className="project-content">

                  <div className="project-title-row">
                    <div>
                      <span className="project-category">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>
                    </div>

                    <div className="project-actions">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                        title="GitHub"
                      >
                        <GithubIcon />
                      </a>

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          title="Live Demo"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}

                    </div>
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <span key={highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>

      {selectedProject && (
  <div
    className="project-modal"
    onClick={(event) => {
      if (event.target === event.currentTarget) {
        setSelectedProject(null);
      }
    }}
  >
    <div className="project-modal-content">

      <button
        className="project-modal-close"
        onClick={() => setSelectedProject(null)}
        aria-label="Close project preview"
      >
        ×
      </button>

      <div className="project-modal-header">
        <div>
          <span className="project-category">
            {selectedProject.category}
          </span>

          <h3>{selectedProject.title}</h3>
        </div>
      </div>

      {/* <div className="project-modal-image">
        <img
          src={
            selectedProject.images[activeImage].src
          }
          alt={
            selectedProject.images[activeImage].alt
          }
        />
      </div> */}
      
      {/* {selectedProject.images.length > 1 && (
        <div className="project-modal-thumbnails">
          {selectedProject.images.map(
            (image, index) => (
              <button
                key={image.src}
                className={
                  activeImage === index
                    ? "active"
                    : ""
                }
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                />
              </button>
            )
          )}
        </div>
      )} */}

      {selectedProject.images?.length ? (
  <>
    <div className="project-modal-image">
      <img
        src={
          selectedProject.images[activeImage].src
        }
        alt={
          selectedProject.images[activeImage].alt
        }
      />
    </div>

    {selectedProject.images.length > 1 && (
      <div className="project-modal-thumbnails">
        {selectedProject.images.map(
          (image, index) => (
            <button
              key={image.src}
              className={
                activeImage === index
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveImage(index)
              }
            >
              <img
                src={image.src}
                alt={image.alt}
              />
            </button>
          )
        )}
      </div>
    )}
  </>
) : (
  <div className="project-modal-no-image">
    <div className="project-modal-placeholder">
      <span>
        {selectedProject.type}
      </span>

      <strong>
        {selectedProject.title}
      </strong>

      <small>
        Project preview coming soon
      </small>
    </div>
  </div>
)}

      <div className="project-modal-info">

        <p>
          {selectedProject.description}
        </p>

        <div className="project-modal-highlights">
          {selectedProject.highlights.map(
            (highlight) => (
              <span key={highlight}>
                {highlight}
              </span>
            )
          )}
        </div>

        <div className="project-technologies">
          {selectedProject.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>

        <div className="project-modal-links">

          {selectedProject.github !== "#" && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
          )}

          {selectedProject.liveDemo &&
            selectedProject.liveDemo !== "#" && (
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}

        </div>

      </div>

    </div>
  </div>
)}
    </section>
  );
}

export default Projects;




// Fix external links globally
// like this one
{/* <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a> */}