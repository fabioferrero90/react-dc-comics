
import BlueNavBar from './partials/BlueNavBar';
const Footer = () => {
  return (
    <footer>
      <BlueNavBar />
      <div className="top-footer">
        <div className="container d-flex justify-content-center">
          <div className="menu-footer d-flex flex-wrap flex-column w-50">
            <div className="menu">
              <h4>DC COMICS</h4>
              <ul>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <div className="menu">
              <h4>SHOP</h4>
              <ul>
                <li><a href="#">Shop DC</a></li>
                <li><a href="#">Shop DC Collectibles</a></li>
              </ul>
            </div>
            <div className="menu">
              <h4>DC</h4>
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy (New)</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">Talent Workshops</a></li>
                <li><a href="#">CPSC Certificates</a></li>
                <li><a href="#">Ratings</a></li>
                <li><a href="#">Shop Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="menu">
              <h4>SITES</h4>
              <ul>
                <li><a href="#">DC</a></li>
                <li><a href="#">MAD Magazine</a></li>
                <li><a href="#">DC Kids</a></li>
                <li><a href="#">DC Universe</a></li>
                <li><a href="#">DC Power Visa</a></li>
              </ul>
            </div>
          </div>
          <div className="dc-logo w-50">
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container d-flex justify-content-between">
          <div className="signup-button">
            <button>SIGN-UP NOW!</button>
          </div>
          <div className="social-bar d-flex align-items-center justify-content-center">
            <span>FOLLOW US</span>
            <ul className="d-flex justify-content-between align-items-center">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
              <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
              <li><a href="#"><i className="fab fa-periscope"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer