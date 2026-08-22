import profile from "../data/profile";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    {
      name: "Certifications",
      href: "#certifications",
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              {profile.name}
              <span>.</span>
            </a>

            <p>
              Python & Full-Stack Developer focused on
              building practical and user-focused
              applications.
            </p>
          </div>

          <nav className="footer-nav">
            <p>Explore</p>

            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="footer-connect">
            <p>Connect</p>

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

            <a
              href={`mailto:${profile.contact.email}`}
            >
              Email
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} {profile.name}.
            All rights reserved.
          </p>

          <p className="footer-built">
            Designed & built with
            <span> React</span>
            <span> · </span>
            <span> CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;