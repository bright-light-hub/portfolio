import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import certifications from "../data/certifications";
import Reveal from "./Reveal";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCertificate
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCertificate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        <Reveal>
          <div className="section-heading">
            <p className="section-label">
              Certifications
            </p>

            <h2>
              Continuous
              <span> learning.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="certifications-intro">
            Certifications and courses that complement my
            practical development experience and help me
            continuously expand my technical skills.
          </p>
        </Reveal>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <Reveal
              key={certificate.id}
              delay={index * 0.08}
            >
              <article className="certificate-card">

                <div className="certificate-glass"></div>

                <div className="certificate-top">
                  <span className="certificate-label">
                    CERTIFICATION
                  </span>

                  <span className="certificate-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="certificate-icon">
                  in
                </div>

                <div className="certificate-content">

                  <p className="certificate-issuer">
                    {certificate.issuer}
                  </p>

                  <h3>
                    {certificate.title}
                  </h3>

                  <p className="certificate-date">
                    Completed {certificate.date}
                  </p>

                  <div className="certificate-skills">
                    {certificate.skills.map(
                      (skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      )
                    )}
                  </div>

                </div>

                <div className="certificate-footer">

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCertificate(
                        certificate
                      )
                    }
                  >
                    View Certificate
                    <ArrowUpRight size={15} />
                  </button>

                  {certificate.verificationUrl && (
                    <a
                      href={
                        certificate.verificationUrl
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify
                      <ExternalLink size={14} />
                    </a>
                  )}

                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Certificate Preview */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setSelectedCertificate(null);
            }
          }}
        >
          <div className="certificate-modal-content">

            <button
              className="certificate-modal-close"
              onClick={() =>
                setSelectedCertificate(null)
              }
              aria-label="Close certificate preview"
            >
              ×
            </button>

            <div className="certificate-modal-header">
              <div>
                <span>
                  {selectedCertificate.issuer}
                </span>

                <h3>
                  {selectedCertificate.title}
                </h3>
              </div>
            </div>

            <div className="certificate-preview">
              <iframe
                src={
                  selectedCertificate.certificateFile
                }
                title={
                  selectedCertificate.title
                }
              />
            </div>

            <div className="certificate-modal-footer">

              <p>
                Certificate ID:{" "}
                <span>
                  {selectedCertificate.certificateId}
                </span>
              </p>

              {selectedCertificate.verificationUrl && (
                <a
                  href={
                    selectedCertificate.verificationUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify Certificate
                  <ExternalLink size={15} />
                </a>
              )}

            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;