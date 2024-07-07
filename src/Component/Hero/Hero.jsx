import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="row">
        <div className="col-12 info ">
          <div className="personal-info">
            <div className="personal-info-wrap">
              <div className="personal-info-wrap-img">
                <img src="./assets/Rahul.png" alt="" />
              </div>
              <h4>
                <a href="#">Rahul Bandgar</a>
              </h4>
              <span className=" bio">Web Developer</span>
              <ul className=" social-media">
                <li>
                  <a href="#" className="facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="insta">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="linkdin">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div className="info-contact">
                <div className="info-contact-item phone">
                  <div className="icon">
                    <i class="fa-solid fa-mobile"></i>
                  </div>
                  <div className="text">
                    <span>Phone</span>
                    <p>+91 9307723033</p>
                  </div>
                </div>
                <div className="info-contact-item email">
                  <div className="icon">
                    <i class="fa-regular fa-envelope"></i>
                  </div>
                  <div className="text">
                    <span>Email</span>
                    <p>rahulbandgar3737@gmail.com</p>
                  </div>
                </div>
                <div className="info-contact-item location">
                  <div className="icon">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="text">
                    <span>Location</span>
                    <p>Jath Sangli India</p>
                  </div>
                </div>
                <div className="info-contact-item calendar">
                  <div className="icon">
                    <i class="fa-solid fa-calendar-days"></i>
                  </div>
                  <div className="text">
                    <span>Birthday</span>
                    <p>Sept 12, 2001</p>
                  </div>
                </div>
              </div>
              <div className="info-btn">
                <a href="#">
                  <span>
                    <i class="fa-solid fa-download"></i>
                  </span>
                  Download Cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
