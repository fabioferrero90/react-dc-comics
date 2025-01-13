import digitalComicsImg from '../assets/img/buy-comics-digital-comics.png';
import merchandiseImg from '../assets/img/buy-comics-merchandise.png';
import shopLocatorImg from '../assets/img/buy-comics-shop-locator.png';
import subscriptionsImg from '../assets/img/buy-comics-subscriptions.png';
import dcPowerVisaImg from '../assets/img/buy-dc-power-visa.svg';

function BlueNavBar() {
  return (
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
  )
}

export default BlueNavBar