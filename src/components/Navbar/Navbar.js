import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="logo-container">
                    <img className="logo-img" src="https://images.ctfassets.net/fo9twyrwpveg/1ddASgs7jBw4H7oP2Bk9jm/b0eefb7666c36a4aa1efd6b1b4aefd0b/logo_intive_blue.svg" />
                    <span className="logo-text">Cousine</span>
                </div>
                <nav className="navbar__links-container">
                    <div className="navbar__link">Home</div>
                    <div className="navbar__link">Latest</div>
                    <div className="navbar__link">About</div>
                </nav>
            </div>
        </div>
    )
}

export { Navbar }
