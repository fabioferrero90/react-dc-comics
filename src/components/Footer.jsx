import digitalComicsImg from '../assets/img/buy-comics-digital-comics.png';
import merchandiseImg from '../assets/img/buy-comics-merchandise.png';
import shopLocatorImg from '../assets/img/buy-comics-shop-locator.png';
import subscriptionsImg from '../assets/img/buy-comics-subscriptions.png';
import dcPowerVisaImg from '../assets/img/buy-dc-power-visa.svg';

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="container d-flex justify-content-center">
          <a href="#" className="buynav-button">
            <img src={digitalComicsImg} alt="Digital Comics" />
            <span>Digital Comics</span>
          </a>
          <a href="#" className="buynav-button">
            <img src={merchandiseImg} alt="Merchandise" />
            <span>DC Merchandise</span>
          </a>
          <a href="#" className="buynav-button">
            <img src={subscriptionsImg} alt="Subscription" />
            <span>Subscription</span>
          </a>
          <a href="#" className="buynav-button">
            <img src={shopLocatorImg} alt="Shop Locator" />
            <span>Comic Shop Locator</span>
          </a>
          <a href="#" className="buynav-button">
            <img src={dcPowerVisaImg} alt="Power VISA" />
            <span>DC Power Visa</span>
          </a>
        </div>
      </div>
      <div className="mid-footer">
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
        <div className="container">
          Footer Bar
        </div>
      </div>
    </footer>
  )
}

export default Footer