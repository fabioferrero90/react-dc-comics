
import BlueNavBar from './partials/BlueNavBar';
const Footer = (props) => {

  const { DCComicsFooterMenu, ShopFooterMenu, DCFooterMenu, SitesFooterMenu } = props.menus;

  return (
    <footer>
      <BlueNavBar />
      <div className="top-footer">
        <div className="container d-flex justify-content-center">
          <div className="menu-footer d-flex flex-wrap flex-column w-50">
            <div className="menu">
              <h4>DC COMICS</h4>
              <ul>
                {DCComicsFooterMenu.map(item => (
                  <li key={`dcc-${item.id}`}><a href={item.url}>{item.name}</a></li>))}
              </ul>
            </div>
            <div className="menu">
              <h4>SHOP</h4>
              <ul>
              {ShopFooterMenu.map(item => (
                  <li key={`sh-${item.id}`}><a href={item.url}>{item.name}</a></li>))}
              </ul>
            </div>
            <div className="menu">
              <h4>DC</h4>
              <ul>
              {DCFooterMenu.map(item => (
                  <li key={`dc-${item.id}`}><a href={item.url}>{item.name}</a></li>))}
              </ul>
            </div>
            <div className="menu">
              <h4>SITES</h4>
              <ul>
              {SitesFooterMenu.map(item => (
                  <li key={`si-${item.id}`}><a href={item.url}>{item.name}</a></li>))}
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