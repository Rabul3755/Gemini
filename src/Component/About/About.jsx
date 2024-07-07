import '../About/About.css';

const About = () => {
  return (
    <div className=" col-xl-9 col-xxl-8  about">
      <div className="content-wrap">
        <div className="section-wrapper">
          <div className="page-title-wrap">
            <h2 className="page-title">About Me</h2>
            <p>
              Hello! I'm Rahul, a passionate and dedicated web developer eager
              to embark on my journey in the tech industry. With a solid
              foundation in HTML, CSS, JavaScript, ReactJs, ExpreesJs, NodeJs,
              MySQL, Bootstarp and Tailwind Css, I am enthusiastic about
              creating user-centric and visually appealing websites.
            </p>
            <p>
              During personal projects, I've honed my skills in building
              responsive and interactive web applications, and I'm always eager
              to learn and adapt to new technologies and best practices. I'm
              excited to bring my passion, creativity, and dedication to a
              dynamic team where I can contribute to building meaningful and
              impactful web solutions.
            </p>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="section-title">
            <h3 class="section-title">What I do!</h3>
          </div>
          <div className="what-i-do">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="what-do-item bg-pirnk">
                  <div className="icon">
                    <i class="fa-solid fa-swatchbook"></i>
                  </div>
                  <div className="text">
                    <h4>Ui/Ux Design</h4>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="what-do-item bg-caer">
                  <div className="icon"></div>
                  <div className="text">
                    <h4>App Development</h4>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="what-do-item  bg-pirnk">
                  <div className="icon"></div>
                  <div className="text">
                    <h4>Photography</h4>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="what-do-item bg-caer ">
                  <div className="icon"></div>
                  <div className="text">
                    <h4>Web Development</h4>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod tincidunt volutpat.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
