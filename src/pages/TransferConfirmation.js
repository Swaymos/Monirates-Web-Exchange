import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import ErrorIcon from "@mui/icons-material/Error";
  import PasswordInput from "../components/PasswordInput";
  import {
    FormGroup,
    FormControl,
    Checkbox,
    FormControlLabel
  } from "@mui/material";
  import ConfirmOTP from "../components/ConfirmOTP";
  import style from '../styling/styles.module.css';
  
  export default function TransferConfirmation() {
  
    return (
      <div className={style.wrapContainerBorder}>
        <h4>Confirm Transfer Details</h4>
        <div className={style.formSteps}>
          <ul>
            <li>
              <NavLink activeClassName={style.activeLink} to="/make-transfer">
                Transfer Details
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={style.activeLink} to="/transfer-confirmation">
                Confirm Details
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="withdraw-form">
          <div className={style.confirmDetails}>
            <span class={style.confirmDetails}>
              <ErrorIcon className={style.confirmDetailsIcon} sx={{ fontSize: 60 }} />
            </span>
            <p>
              You are about to transfer <span>$200</span> to{" "}
              <span>Oladipo Popoola</span>, <span>Dollar Wallet</span>
            </p>
          </div>
          <div className={style.inputContainerLess}>
              <PasswordInput label="Password"/>
          </div>
          <div className={style.formButton}>
            <ConfirmOTP label="Make Transfer" />
            <button className={style.buttonUnderline}>Cancel Transfer</button>
          </div>
        </form>
      </div>
    );
  }
  