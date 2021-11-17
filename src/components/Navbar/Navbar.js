import React from 'react'
// import {auth} from '../../firebase'

import { Link } from 'react-router-dom';
import './Navbar.css'


function Navbar() {

    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       var uid = user.uid;
    //       console.log('User logued'+ user + uid);
    //       // ...
    //     } else {
    //         console.log('User not logued');
    //     }
    //   });

    const user = false;

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
                    {user ? (
                        <>
                        <p>Hello {user.name}</p>
                        <i class="fa-solid fa-user"></i>
                        </>
                    ): (
                        <>
                        <Link to='/login'>
                            <p>Sign In</p>
                            <i class="fa-solid fa-user"></i>
                        </Link>
                        </>
                    ) 
                    }
                </nav>
            </div>
        </div>
    )
}

export { Navbar }
