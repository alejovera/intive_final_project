import React, {useState} from 'react'
import './styles/Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebase'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    
    const login = e => {
        e.preventDefault()
        // parte de la logica login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // Ya se completa la peticion, mandarlo de nuevo al HomePage
                history.push('/');
            })
            .catch((e) => alert(e.message))
    }
    const register = e =>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth => {
                //usuario creado, redireccionar a HomePage
                history.push('/')
            })
            .catch(e => alert(e.message))
    }
    
    return (
    <>
        <div className="login__container">
            <div className="main">  	
                <input className="login__input" type="checkbox" id="chk" aria-hidden="true" />

                <div className="signup">
                    <form>
                        <label className="login__label" for="chk" aria-hidden="true">Sign up</label>
                        <input className="login__input" type="email" onChange={evt => setEmail(evt.target.value)} name="email" placeholder="Email" required="" />
                        <input className="login__input" type="password" onChange={evt => setPassword(evt.target.value)} name="pswd" placeholder="Password" required="" />
                        <button className="login__button" onClick={register}>Sign up</button>
                    </form>
                </div>

                <div className="login">
                    <form>
                        <label className="login__label" for="chk" aria-hidden="true">Login</label>
                        <input className="login__input" onChange={evt => setEmail(evt.target.value)} type="email" name="email" placeholder="Email" required="" />
                        <input className="login__input" onChange={evt => setPassword(evt.target.value)} type="password" name="pswd" placeholder="Password" required="" />
                        <button className="login__button" onClick={login}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export {Login}
