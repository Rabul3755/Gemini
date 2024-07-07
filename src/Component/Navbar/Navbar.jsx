import { useContext, useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/Context';

const Navbar = () => {
  const [isCross, setIsCross] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div  className="header-area d-xxl-none" id={` component ${theme}`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="row align-items-center">
            <div className="col-6 logo">
              <span>RAHUL</span>
            </div>
            <div className="col-6">
              <div className="menu text-right">
                <div className="dark-mode"  onClick={toggleTheme}>
                  <i className="fa-regular fa-moon"></i>
                  <i className="fa-regular fa-sunb d-none"></i>
                </div>
                <div className="menubars" onClick={() => setIsCross(!isCross)}>
                  {isCross ? (
                    <>
                      <span className="crossbars"></span>
                      <span className="crossbars"></span>
                    </>
                  ) : (
                    <>
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isCross ? (
          <div className="mobile-menu-wrap ">
            <div className="mobile-menu active">
              <div className="menu-bar">
                <div className="menu-nav">
                  <ul>
                    <li>
                      <Link to="/about">
                        <span>
                          <i className="fa-regular fa-address-card"></i>
                        </span>{' '}
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/resume">
                        {' '}
                        <span>
                          <i className="fa-regular fa-file"></i>
                        </span>{' '}
                        Resume
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio">
                        <span>
                          <i className="fa-solid fa-briefcase"></i>
                        </span>{' '}
                        Works
                      </Link>
                    </li>

                    <li>
                      <Link to="/contact">
                        <span>
                          <i className="fa-regular fa-address-book"></i>
                        </span>{' '}
                        Conatct
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
