import digitalComicsImg from '../../assets/img/buy-comics-digital-comics.png';
import merchandiseImg from '../../assets/img/buy-comics-merchandise.png';
import shopLocatorImg from '../../assets/img/buy-comics-shop-locator.png';
import subscriptionsImg from '../../assets/img/buy-comics-subscriptions.png';
import dcPowerVisaImg from '../../assets/img/buy-dc-power-visa.svg';
import styles from './BlueNavBar.module.css';

function BlueNavBar() {
  return (
    <div className="top-footer">
      <div className="container d-flex justify-content-center">
        <a href="#" className={styles.buynavButton}>
          <img className={styles.buynavImg} src={digitalComicsImg} alt="Digital Comics" />
          <span className={styles.buynavSpan} >Digital Comics</span>
        </a>
        <a href="#" className={styles.buynavButton}>
          <img className={styles.buynavImg} src={merchandiseImg} alt="Merchandise" />
          <span className={styles.buynavSpan} >DC Merchandise</span>
        </a>
        <a href="#" className={styles.buynavButton}>
          <img className={styles.buynavImg} src={subscriptionsImg} alt="Subscription" />
          <span className={styles.buynavSpan} >Subscription</span>
        </a>
        <a href="#" className={styles.buynavButton}>
          <img className={styles.buynavImg} src={shopLocatorImg} alt="Shop Locator" />
          <span className={styles.buynavSpan} >Comic Shop Locator</span>
        </a>
        <a href="#" className={styles.buynavButton}>
          <img className={styles.buynavImg} src={dcPowerVisaImg} alt="Power VISA" />
          <span className={styles.buynavSpan} >DC Power Visa</span>
        </a>
      </div>
    </div>
  )
}

export default BlueNavBar