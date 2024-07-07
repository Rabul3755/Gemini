import '../Portfolio/Portfolio.css';
// import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import Appdesign from '../../Projectpages/Appdesign.jsx';

const Portfolio = () => {
  // const match = useRouteMatch();
  return (
    <div className="container">
      <div className=" col-xl-9 col-xxl-8">
        <div className="content-wrap">
          <div className="section-wrapper">
            <div className="page-title-wrap">
              <h2 className="page-title">Portfolio</h2>
            </div>
          </div>
          <div className="section">
            <div className="row">
              <div className="col-12">
                {/* <Switch>
                  <Route path={`${match.path}/app`} component={Appdesign} />
                </Switch> */}
                <ul className="filter-btn-wrap">
                  <li className="is-checked">All</li>
                  <li>Wesite Design</li>
                  <li>
                    {' '}
                    {/* <Link
                      style={{ textDecoration: 'none' }}
                      to="/portfolio/app"
                    >
                      App Design
                    </Link> */}
                  </li>
                  <li>Bootstarp</li>
                </ul>
              </div>
              <div className="col-12">
                <div className="all-projects">
                  <div className="gridss"></div>
                  <div className="projects logo1">
                    <div className="fillter-item bg-pirnk">
                      <a href="" className="img">
                        <img
                          src="src/assets/Gemini.png"
                          className="img-fluid"
                          alt="png"
                        />
                      </a>
                      <h6 className="item-title">Gemini Clone</h6>
                    </div>
                  </div>
                  <div className="projects logo2">
                    <div className="fillter-item bg-caer">
                      <a href="" className="img">
                        <img
                          src="src/assets/Gemini.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>

                      <h6 className="item-title">E-commerce Shopping app</h6>
                    </div>
                  </div>
                  <div className="projects logo3">
                    <div className="fillter-item bg-caer">
                      <a href="" className="img">
                        <img
                          src="src/assets/QRcode.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>

                      <h6 className="item-title">QR-code</h6>
                    </div>
                  </div>
                  <div className="projects logo4">
                    <div className="fillter-item bg-pirnk">
                      <a href="" className="img">
                        <img
                          src="src/assets/Claculator.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>

                      <h6 className="item-title">Calculator app </h6>
                    </div>
                  </div>
                  <div className="projects logo5">
                    <div className="fillter-item bg-caer">
                      <a href="" className="img">
                        <img
                          src="src/assets/Simongame.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>

                      <h6 className="item-title">Simon game</h6>
                    </div>
                  </div>
                  <div className="projects logo6">
                    <div className="fillter-item bg-pirnk">
                      <a href="" className="img">
                        <img
                          src="src/assets/Bootstrapmade.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>

                      <h6 className="item-title">Bootstraomade website</h6>
                    </div>
                  </div>
                  <div className="projects logo7">
                    <div className="fillter-item bg-caer">
                      <a href="" className="img">
                        <img
                          src="src/assets/Amazoneclone.png"
                          alt=""
                          className="img-fluid"
                        />
                      </a>

                      <h6 className="item-title">Amazone clone</h6>
                    </div>
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
export default Portfolio;
