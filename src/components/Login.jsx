import React, { useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';



function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/' style={{textDecoration:'none'}}>
                <h3 className='login__name' >Webshop</h3>
            {/* <img className='login__logo' src='https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png' ></img> */}
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>By signin-in you agree to our Conditions of Use and Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.</p>

                <button type='submit' onClick={register} login__registerButton>Create your Account</button>
           
            </div>
        </div>
    )
}

export default Login
