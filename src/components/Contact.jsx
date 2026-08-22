import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import profile from "../data/profile";
import Reveal from "./Reveal";


function Contact() {

  const [state, handleSubmit] = useForm("xdenjbyg");

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <Reveal>
          <div className="contact-heading">
            <p className="section-label">Contact</p>

            <h2>
              Let's build something
              <span> useful.</span>
            </h2>

            <p>
              I'm open to discussing development opportunities,
              projects, internships and interesting ideas.
            </p>
          </div>
        </Reveal>
        <div className="contact-grid">

          <Reveal direction="left">
            {/* Contact Information */}
            <div className="contact-info">

              <a
                href={`mailto:${profile.contact.email}`}
                className="contact-item"
              >
                <div className="contact-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>{profile.contact.email}</strong>
                </div>

                <ArrowUpRight size={18} />
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>{profile.contact.location}</strong>
                </div>
              </div>

            </div>
          </Reveal>


          <Reveal direction="right" delay={0.1}>
            {/* Contact Form */}
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button type="submit" disabled={state.submitting} className="contact-submit">
                {state.submitting
                  ? "Sending..."
                  : "Send Message"}

                <ArrowUpRight size={18} />
              </button>
              {state.succeeded && (
                <div className="contact-success-message">
                  <span>✓</span>
                  <p>
                    Your message has been sent successfully.
                    I'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;