import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SignUp.module.css";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [agreeToDataProcessing, setAgreeToDataProcessing] = useState(false);
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

  const handleChangeConfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const handleChangeDataProcessing = () => {
    setAgreeToDataProcessing(!agreeToDataProcessing);
  };

  const handleSignUp = (event) => {
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

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agreeToDataProcessing) {
      alert("Please agree to the processing of personal data.");
      return;
    }

    // Registro exitoso, realizar acciones necesarias
    navigate("/login");
  };

  return (
    <div className={`${style.signup} ${style.greenText}`}>
      <div className={style.backButton}>
        <a href="#" className={style.navLink}>Back</a>
      </div>
      <h1 className={style.centeredText}>Get started</h1>
      <form onSubmit={handleSignUp}>
        <label>Email Address:</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleChangeEmail}
        />
        {emailError && (
          <p className={style.errorText}>Please enter a valid email address.</p>
        )}

        <label>Password:</label>
        <div className={style.passwordInput}>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        {passwordError && (
          <p className={style.errorText}>
            Password must be between 6 and 10 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.
          </p>
        )}

        <label>Confirm Password:</label>
        <div className={style.passwordInput}>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
        </div>
        {confirmPasswordError && (
          <p className={style.errorText}>Passwords do not match.</p>
        )}

        <div className={style.checkbox}>
          <input
            type="checkbox"
            checked={agreeToDataProcessing}
            onChange={handleChangeDataProcessing}
          />
          <label>
            I agree to the processing of{" "}
            <a href="#">Personal data</a>.
          </label>
        </div>

        <button
          type="submit"
          className={`${style.button} ${style.greenButton}`}
        >
          Sign Up
        </button>
      </form>

      <div className={style.login}>
        <p>Do you have an account?</p>
        <a href="#">Login</a>
      </div>
    </div>
  );
}