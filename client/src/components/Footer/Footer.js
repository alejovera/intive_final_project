import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer__color">

        <div className="footer__container">
            <div className="footer__top-section">
                <div className="footer__brand">
                    <p>IntiveCousine</p>
                </div>
                <p className="footer__cpr">
                    @intive GmbH 2021
                </p>
            </div>
            <div className="footer__bottom-section">
                <div className="footer__categories">
                    <h6>Categories</h6>
                    <div className="footer__categories-container">
                        <span className="footer__categories-item">Seafood</span>
                        <span className="footer__categories-item">Seafood</span>
                        <span className="footer__categories-item">Seafood</span>
                        <span className="footer__categories-item">Seafood</span>
                        <span className="footer__categories-item">Seafood</span>
                        <span className="footer__categories-item">Seafood</span>
                        <span className="footer__categories-item">Seafood</span>
                        <span className="footer__categories-item">Seafood</span>
                    </div>
                </div>
                <div className="footer__newsletter">
                    <h6 className="footer__newsletter-title">Suscribe to Newsletter</h6>
                    <form className="footer__newsletter-form">
                        <input placeholder="Email adress" type="email" className="footer__input" />
                        <button type="submit" className="footer__button">send</button>
                    </form>
                </div>
            </div>
            
        </div>
        </div>

    )
}

export {Footer}
