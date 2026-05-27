import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              MUJTABA
              <br />
              <span>NAWAZ</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Web Developer</div>
              <div className="landing-h2-2">App Developer</div>
              <div className="landing-h2-3">UI/UX Designer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">UI/UX Designer</div>
              <div className="landing-h2-info-1">Web Developer</div>
              <div className="landing-h2-info-2">App Developer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
