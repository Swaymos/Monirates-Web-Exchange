import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import BasicTextField from "../components/BasicTextField";
import PasswordInput from "../components/PasswordInput";
import logo from '../../src/logo.svg';
import background from '../../src/background-image.jpg';
import style from '../styling/styles.module.css'
import '../styling/styles.css'

export default function PasswordCreated() {
  return (
    <div className={style.userWrap}>
      <div className={style.userWrapFiftyLeft}>
        <div className="logo"><img src={logo}></img></div>
        <form className={style.formField}>
          <h3>You created a new password</h3>
          <p>
          You just created a new password, please make sure you write it down to make it easier to remember
          </p>
          <button className="primary">Sign In</button>
          <span className={style.formLink}>
            Don't have an account?<NavLink to=""> Sign Up</NavLink>
          </span>
        </form>
        <div className={style.socialLogin}>
          <h4>Social Login</h4>
          <ul>
            <li>
              <button className="facebook">
                <FacebookIcon sx={{ fontSize: 30 }} />
              </button>
            </li>
            <li>
              <button className="google">
                <GoogleIcon sx={{ fontSize: 30 }} />
              </button>
            </li>
            <li>
              <button className="apple">
                <AppleIcon sx={{ fontSize: 30 }} />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class={style.userWrapFiftyRight}><img src={background}></img></div>
    </div>
  );
}
