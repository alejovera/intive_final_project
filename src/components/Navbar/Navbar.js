import React, { useState } from 'react'
import { firebaseApp, auth } from '../../firebase';
import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {

    const [userLoggued, setUserLoggued] = useState(false)
    const [userEmail, setUserEmail] = useState('')

    firebaseApp.auth().onAuthStateChanged((user) => {
        if (user) {
          setUserLoggued(true)
          setUserEmail(user.email)
          // ...
        } else {
            console.log(user);
            console.log('User not logued');
        }
      });


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
                    {userLoggued ? (
                        <>
                            <p className="navbar__username">Hello {userEmail}</p>
                            <i className="fa-solid fa-user"></i>
                        </>
                    ): (
                        <div className="navbar__sign-in">
                            <Link className="navbar__redirects" to='/login'>
                                <p className="navbar__link">Sign In</p>
                                <i className="fa-solid fa-user"></i>
                            </Link>
                        </div>
                    ) 
                    }
                </nav>
            </div>
        </div>
    )
}

export { Navbar }
