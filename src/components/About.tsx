import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./styles/About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me">
        <div className={`about-profile ${isVisible ? "visible" : ""}`}>
          <img 
            src="/images/Mujtaba.png" 
            alt="Mujtaba Nawaz" 
            className="about-profile-img" 
            onClick={() => setIsModalOpen(true)}
            data-cursor="disable"
          />
        </div>
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Software Engineer dedicated to bridging the gap between clean engineering and intuitive user experience. Specializing in full-stack web and mobile systems, I build responsive, database-driven applications with modern frameworks like Laravel, Flutter, and React. With a keen eye for design, I leverage Figma to sketch high-fidelity interfaces and turn them into robust, performant code. I strive to create digital solutions that are clean, fast, and simple to use.
        </p>
      </div>

      {isModalOpen && createPortal(
        <div className="about-lightbox-overlay" onClick={() => setIsModalOpen(false)}>
          <button className="about-lightbox-close" onClick={() => setIsModalOpen(false)} aria-label="Close fullscreen view">
            &times;
          </button>
          <div className="about-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src="/images/Mujtaba.png" alt="Mujtaba Nawaz" className="about-lightbox-img" />
            <p className="about-lightbox-bio">
              Mujtaba Nawaz is a dedicated Software Engineer bridging clean engineering and intuitive design. 
              Specializing in full-stack web & mobile systems, he transforms complex concepts into robust, performant digital solutions.
            </p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default About;
