import { Link } from "react-router-dom"
import "./header.css"
import logo from "../../assets/coquillage.png"

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        
            <nav className="nav">
                <Link to="/">Accueil</Link>
                <Link to="/journal">Journal</Link>
                <Link to="/projets">Projets</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
}

export default Header