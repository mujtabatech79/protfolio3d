import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>Get In Touch</h3>
          <p className="contact-subheader">Let's build something amazing together. Reach out for projects or collaborations!</p>
        </div>
        
        <div className="contact-grid">
          {/* Card 1: Contact Details */}
          <div className="contact-card info-card">
            <h4>Connect Details</h4>
            <div className="info-items">
              <a 
                href="mailto:mujtabanawaz79@gmail.com" 
                className="info-item" 
                data-cursor="disable"
              >
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <span>Email Me</span>
                  <p>mujtabanawaz79@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/923009186187?text=Hi%20Mujtaba,%20I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out!" 
                target="_blank"
                rel="noreferrer"
                className="info-item" 
                data-cursor="disable"
              >
                <div className="info-icon">
                  <FaWhatsapp />
                </div>
                <div className="info-text">
                  <span>WhatsApp Me</span>
                  <p>0300-9186187</p>
                </div>
              </a>

              <div className="info-item no-link">
                <div className="info-icon">
                  <FaLocationDot />
                </div>
                <div className="info-text">
                  <span>Location</span>
                  <p>Wah Cantt, Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Education & Journey */}
          <div className="contact-card education-card">
            <h4>Education</h4>
            <div className="education-timeline">
              <div className="edu-item">
                <div className="edu-dot"></div>
                <span className="edu-date">2022 - Present</span>
                <h5>BS Software Engineering</h5>
                <p>COMSATS University Islamabad, Wah Campus</p>
              </div>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <span className="edu-date">2020 - 2022</span>
                <h5>ICS (Computer Science)</h5>
                <p>Scholar Science College, Wah Cantt</p>
              </div>
            </div>
          </div>

          {/* Card 3: Social & Branding */}
          <div className="contact-card social-card">
            <h4>Social Channels</h4>
            <div className="social-links-grid">
              <a
                href="https://github.com/mujtabatech79"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="social-btn github"
              >
                <span className="btn-icon"><FaGithub /></span>
                <span className="btn-label">GitHub</span>
                <MdArrowOutward className="arrow-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/mujtaba-nawaz-1647a331a/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="social-btn linkedin"
              >
                <span className="btn-icon"><FaLinkedinIn /></span>
                <span className="btn-label">LinkedIn</span>
                <MdArrowOutward className="arrow-icon" />
              </a>
            </div>
            
            <div className="contact-branding">
              <h2>
                Designed and Developed <br /> by <span>Mujtaba Nawaz</span>
              </h2>
              <div className="copyright-box">
                <MdCopyright /> <span>2026 Mujtaba Nawaz. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
