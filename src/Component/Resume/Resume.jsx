import "../Resume/Resume.css";

const Resume = () => {
  return (
    <div className="container">
      <div className="row">
      <div className=" col-xl-9 col-xxl-8">
        <div className="content-resume-wrap">
          <div className="section-wrapper  ">
            <div className="page-title-wrap space">
              <h2 className="page-title">Resume</h2>
            </div>

            <div className="education-title">
              <h4 className>
                <i className="fa-solid fa-school"></i>
                Education
              </h4>
            </div>
            <div className="card-wrap">
              <div className="card-item">
                <span>2018-2019</span>
                <h6> XII from SRVM Collage, Jath </h6>
                <p>Grade - 65.23%</p>
              </div>
            </div>
            <div className="card-wrap  ">
              <div className="card-item bg">
                <span>2019-2023</span>
                <h6>Degree from Kit,s Collage Of Engineering, Kolhapur </h6>
                <h6>Mechanical Engineer</h6>
                <p>CGPA - 7.28</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrap skills">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="skills-title ">
                <h4>Working Skills</h4>
              </div>
              <div className="skill-bar-wrap">
                <div className="skillbar-item">
                  <div className="title-bar">
                    <h5>HTML</h5>
                    <span>95%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-line bg1"></div>
                  </div>
                </div>
                <div className="skillbar-item">
                  <div className="title-bar">
                    <h5>CSS</h5>
                    <span>90%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-line bg2"></div>
                  </div>
                </div>
                <div className="skillbar-item">
                  <div className="title-bar">
                    <h5>JavaScript</h5>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-line bg3"></div>
                  </div>
                </div>
                <div className="skillbar-item">
                  <div className="title-bar">
                    <h5>ReactJs, ExpreesJs, NodeJs, MySQL</h5>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-line bg4 "></div>
                  </div>
                </div>
                <div className="skillbar-item">
                  <div className="title-bar">
                    <h5>Bootstrap, Tailwind, Material UI</h5>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-line bg5"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="skills-title ">
                <h4>Knowledges</h4>
              </div>
              <div className="knowledges-item">
                <span className="gk">Websit Design</span>
                <span className="gk">App Design</span>
                <span className="gk">Communication</span>
                <span className="gk">Time Management</span>
                <span className="gk">Flexibility</span>
                <span className="gk">Social Media</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Resume;
