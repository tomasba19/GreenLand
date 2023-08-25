import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./SignUp.module.css";
import axios from 'axios';

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [agreeToDataProcessing, setAgreeToDataProcessing] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };

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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
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

    //creo una instancia que contruye datos en formato de formulario para enviar por una solicitud http datos al servidor.
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);

   //envio un post al back con los datos del formulario
   axios.post('/users', formData)
   .then(response => {
     if (response.status === 200) {
       // registro exitoso, navega a la pag de inicio
       navigate('/login');
     } else {
       // error en el registro, muestra mensaje de error
       throw new Error('Registration failed.');
     }
   })
   .catch(error => {
     console.log(error);
     alert('Registration failed. Please try again later.');
   });
};
    
    const handleLoginOnClick = () => {
    navigate("/login");
  };
  
  return (
    <div className={`${style.signup} ${style.greenText}`}>
      <div className={style.backButton}>
        <a href="#" className={`${style.navLink} ${style.chevron}`}>Back</a>
      </div>
      <h1 className={`${style.centeredText} ${style.getStarted}`}>Get started</h1>
      <form onSubmit={handleSignUp}>
      <label className={style.name}>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChangeName}
          className={`${style.enterName} ${style.rectangle}`}
        />
        <label className={style.emailAddress}>Email Address:</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={handleChangeEmail}
          className={`${style.enterEmail} ${style.rectangle}`}
        />
        {emailError && (
          <p className={`${style.errorText} ${style.enterEmail}`}>Please enter a valid email address.</p>
        )}
  
        <label className={style.passwordContent}>Password:</label>
        <div className={`${style.passwordInput} ${style.rectangle}`}>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        {passwordError && (
          <p className={`${style.errorText} ${style.passwordContent}`}>
            Password must be between 6 and 10 characters and contain at least one lowercase letter, one uppercase letter, one number, and one special character.
          </p>
        )}
  
        <label className={style.confirmPassword}>Confirm Password:</label>
        <div className={`${style.passwordInput} ${style.rectangle}`}>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
        </div>
        {confirmPasswordError && (
          <p className={`${style.errorText} ${style.confirmPassword}`}>Passwords do not match.</p>
        )}
  
        <div className={style.checkbox}>
          <input
            type="checkbox"
            checked={agreeToDataProcessing}
            onChange={handleChangeDataProcessing}
            className={`${style.agreeData} ${style.checkIcon}`}
          />
          <label className={style.personalData}>
            I agree to the processing of <a href="#">Personal data</a>.
          </label>
        </div>

        <label htmlFor="imageUpload">Upload Image:</label>
      <input
        type="file"
        id="imageUpload"
        onChange={handleImageUpload}
      />
  
        <button
          type="submit"
          className={`${style.button} ${style.greenButton} ${style.loginButton}`}
        >
          Sign Up
        </button>
      </form>
  
      <div className={style.login}>
        <p className={style.haveAccount}>Do you have an account? →</p>
        <a href="#" className={style.navLink} onClick={handleLoginOnClick}>
        <hr></hr>
        <span className={style.loginLink}>Login</span>
        </a>
        </div>
      </div>
  );
}

