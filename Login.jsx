import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png'; // Ensure you have a logo image in your assets folder
import { login, signup } from '../../firebase';

const Login = () => {
  const [isNewUser, setIsNewUser] = useState(false); // State to track if the user is new or existing
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if (isNewUser) {
      await signup(name, email, password);
    } else {
      await login(email, password);
    }
  }

  const handleSwitchForm = () => {
    setIsNewUser(!isNewUser); // Toggle between new and existing user forms
  };

  return (
    <div className="login">
      <div className="login__background">
        <img className="login__logo" src={logo} alt="Netflix Logo" />
        <div className="login__gradient"></div>
      </div>
      <div className="login__body">
        <div className="login__form">
          <h1>{isNewUser ? 'Sign Up' : 'Sign In'}</h1>
          <form>
            {isNewUser && (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button onClick={user_auth} type="submit" className="login__signInButton">
              {isNewUser ? 'Sign Up' : 'Sign In'}
            </button>
          </form>
          {!isNewUser && (
            <div className="login__secondaryActions">
              <div className="login__rememberMe">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <p className="login__needHelp">Need help?</p>
            </div>
          )}
          <div className="login__signup">
            <p>
              {isNewUser ? 'Already a Netflix member?' : 'New to Netflix?'}{' '}
              <span onClick={handleSwitchForm}>
                {isNewUser ? 'Sign in now.' : 'Sign up now.'}
              </span>
            </p>
          </div>
          <div className="login__recaptcha">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
              <span>Learn more.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
