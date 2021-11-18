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
            // console.log(user);
            // console.log('User not logued');
        }
      });

    const logout = (e) => {
        e.preventDefault()
        auth.signOut()
        setUserLoggued(false)
    }
    


    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="logo-container">
                    <Link to='/' className="navbar__redirects">
                        <img className="logo-img" src="https://images.ctfassets.net/fo9twyrwpveg/1ddASgs7jBw4H7oP2Bk9jm/b0eefb7666c36a4aa1efd6b1b4aefd0b/logo_intive_blue.svg" />
                        <span className="logo-text">Cousine</span>
                    </Link>
                </div>
                <nav className="navbar__links-container">
                    <Link to='/' className="navbar__redirects">
                        <div className="navbar__link">Home</div>

                    </Link>
                    {userLoggued ? (
                        <Link className="navbar__redirects" to='/admin'>
                            <div className="navbar__link">Admin</div>
                        </Link>
                    ): (
                        <>
                        </>
                    )}
                    
                    
                    <div className="navbar__link">About</div>
                    {userLoggued ? (
                        <>
                            <div style={{display: 'flex'}}>

                            <p className="navbar__username">Hello {userEmail}</p>
                            <i class="fas fa-user"></i>
                            <p className="navbar__link" onClick={logout}>Sign Out</p>
                            </div>
                        </>
                    ): (
                        <div className="navbar__sign-in">
                            <Link className="navbar__redirects" to='/login'>
                                <p className="navbar__link">Sign In</p>
                                <i class="fas fa-user"></i>
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
