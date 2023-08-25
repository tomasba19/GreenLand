import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import axios from "axios";
import { LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login";
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons'
import { useDispatch } from "react-redux";
import { authData } from "../../redux/action";
const { VITE_SERVER_URL, VITE_FB_APP_ID, VITE_GG_APP_ID } = import.meta.env;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

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

    //enviar credenciales al servidor para autenticación
    if (email && password) {
      // enviar solicitud al servidor para autenticación
      axios.post(`${VITE_SERVER_URL}/users/login`, {
        email: email,
        password: password,
      })
        .then((res) => {
          if (res.data.error === 'Email registered, Login with Facebook') {
            alert('Email already registered. Please login with your Facebook account.');
          } else {
          // Manejo la respuesta del servidor, como almacenar los datos del usuario en el estado o redirigir a otra página
          console.log(res.data);
          dispatch(authData(res.data))
          navigate("/home");
          }
        })
        .catch((error) => {
          // Manejo los errores de la solicitud al servidor
          console.error(error);
        });
    }
  };

  const handleSignUpOnClick = () => {
    navigate("/signup");
  };

  const handleThirdAuth = async ({ provider, data }) => {
    let picture = ''

    if (provider === "facebook") { //Facebook
      picture = data.picture?.data?.url;
    } else if (provider === "google") { //Google
      picture = data.picture;
    }

    const user = {
      name: data.name,
      email: data.email,
      picture: picture,
      origin: provider
    };
    try {
      const response = await axios.post(`${VITE_SERVER_URL}/users/loginThird`, user);
      if (response.data) {
        dispatch(authData(response.data))
        navigate('/home')
      }
      else alert('Couldn\'t login')
    } catch (error) {
      console.error(error?.message);
    }
  };

  return (
    <div className={`${style.login} ${style.greenText}`}>
      <div className={style.backButton}>
        <a href="#" className={style.navLink}>
          Back
        </a>
      </div>
      <h1 className={style.centeredText}>Welcome back!</h1>
      <form onSubmit={handleSubmit}>

        <div>
        <label className={style.formLabel}>Email Address:</label>
        <input
          type="email"
          className={style.enterEmail}
          placeholder="Enter your email"
          value={email}
          onChange={handleChangeEmail}
        />
        {emailError && (
          <span className={style.errorText}>
            Please enter a valid email address in the format name@example.com.
          </span>
        )}
        </div>

        <div>
        <label className={style.formLabel}>Password:</label>
        <div className={`${style.rectangle} ${style.passwordInput}`}>
          <input
            type="password"
            className={style.enterPassword}
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        {passwordError && (
          <span className={style.errorText}>
            Password must be between 6 and 10 characters and contain at least
            one lowercase letter, one uppercase letter, one number, and one
            special character.
          </span>
        )}
        </div>

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
          <a href="#" className={style.navLink}>
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className={`${style.loginButton} ${style.greenButton}`}
        >
          <span className={style.loginText}>Login</span>
        </button>
      </form>

      <div className={style.thirdParty}>
      <LoginSocialFacebook
            isOnlyGetCode={true}
            appId={VITE_FB_APP_ID}
            onLoginStart={()=> console.log('started login')}
            onResolve={handleThirdAuth}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
          <LoginSocialGoogle
            isOnlyGetCode={true}
            client_id={VITE_GG_APP_ID}
            onLoginStart={()=> console.log('started login')}
            onResolve={handleThirdAuth}
            onReject={(err) => {
              console.log(err)
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>
      </div>

      <div className={style.signUp}>
        <p className={style.dontHaveAccount}>Don't have an account?→</p>
        <a href="#" className={style.navLink} onClick={handleSignUpOnClick}>
          <hr></hr>
          <span className={style.signUpLink}>Sign up</span>
        </a>
      </div>
    </div>
  );
};
