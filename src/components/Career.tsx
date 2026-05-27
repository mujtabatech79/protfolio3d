import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>COMSATS / Self-Employed</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Developing academic and personal projects using Python, Java, Flutter, and Laravel.
              Built CRUD applications with MySQL and Firebase, integrated REST APIs, and managed
              projects with Git and GitHub.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor in Software Eng.</h4>
                <h5>COMSATS University Islamabad</h5>
              </div>
              <h3>2022–NOW</h3>
            </div>
            <p>
              COMSATS University Islamabad Wah Campus. Focus on Software Engineering,
              Database Systems, OOP, Web and Mobile Application Development, and modern software design methodologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ICS</h4>
                <h5>Scholar Science College</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Scholar Science College Wah Cantt. Completed intermediate studies in Computer Science, Mathematics, and Physics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
