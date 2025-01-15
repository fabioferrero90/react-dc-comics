

const Header = (props) => {
    const { HeaderMenu } = props.menus;
    return (
        <header className="container d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg d-flex justify-content-between align-content-center w-100 h-100">
                <a className="navbar-brand w-100" href="#">
                    <img src="dc-logo.png" width="80" height="80" alt="DC Logo" />
                </a>
                <div className="collapse navbar-collapse w-100" id="navbarNav">
                    <ul className="navbar-nav">
                        {HeaderMenu.map(item => (
                            <li key={`hd-${item.id}`} className="nav-item">
                                <a className={`nav-link ${item.isActive ? "active" : ""}`} href="#">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header