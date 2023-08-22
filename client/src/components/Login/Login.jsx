import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);

    if (!regExEmail.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);

    if (!regexPassword.test(value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleChangeRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!regExEmail.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!regexPassword.test(password)) {
      alert(
        "Password must be between 6 and 10 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character."
      );
      return;
    }

    // envío y navegación
    if (email && password) {
      navigate("/home");
    }
  };

  const handleSignUpOnClick = () => {
    navigate("/signup");
  };

  return (
    <div className={`${style.login} ${style.greenText}`}>
      <div className={style.backButton}>
        <a href="#" className={style.navLink}>Back</a>
      </div>
      <h1 className={style.centeredText}>Welcome back!</h1>
      <form onSubmit={handleSubmit}>
      <label className={style.emailAddress}>Email Address:</label>
<input
  type="text"
  className={style.enterEmail}
  placeholder="Enter your email"
  value={email}
  onChange={handleChangeEmail}
/>
{emailError && (
  <p className={style.errorText}>Please enter a valid email address in the format name@example.com.</p>
)}

<label className={style.passwordContent}>Password:</label>
<div className={`${style.rectangle} ${style.passwordInput}`}>
  <input
    type="password"
    className={style.enterPassword}
    value={password}
    onChange={handleChangePassword}
  />
</div>
{passwordError && (
  <p className={style.errorText}>
    Password must be between 6 and 10 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.
  </p>
)}

        <div className={style.checkbox}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={handleChangeRememberMe}
            className={style.checkIcon}
          />
          <label className={style.rememberMe}>Remember me</label>
        </div>
        
        <div className={style.forgotPassword}>
          <a href="#" className={style.navLink}>Forgot password?</a>
        </div>

         <button
          type="submit"
          className={`${style.loginButton} ${style.greenButton}`}
        >
          <span className={style.loginText}>Login</span>
        </button>
      </form>

      <div className={style.signUp}>
        <p className={style.dontHaveAccount}>Don't have an account?→</p>
        <a href="#" className={style.navLink} onClick={handleSignUpOnClick}>
        <hr></hr>
          <span className={style.signUpLink}>Sign up</span>
        </a>
        </div>
      </div>
  );
}

