const Header = () => {
  return (
    <header className="container d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between align-content-center w-100">
        <a className="navbar-brand w-100" href="#">
            <img src="dc-logo.png" width="80" height="80" alt="DC Logo" />
        </a>
        <div className="collapse navbar-collapse w-100" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">CHARACTERS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">COMICS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">MOVIES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">TV</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">GAMES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">COLLECTIBLES</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">VIDEOS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">FANS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">NEWS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">SHOP</a>
                </li>
            </ul>
        </div>
    </nav>
    </header>
  )
}

export default Header