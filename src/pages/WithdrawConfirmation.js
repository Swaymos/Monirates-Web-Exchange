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
import CheckboxMain from "../components/Checkbox";
import style from '../styling/styles.module.css';

export default function ConfirmBankDetails() {

  return (
    <div className={style.wrapContainerBorder}>
      <h4>Your Bank Account Details</h4>
      <div className={style.formSteps}>
        <ul>
          <li>
            <NavLink activeClassName={style.activeLink} to="/make-withdraw">
              Bank Details
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.activeLink} to="/confirm-bank-details">
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
            You are about to withdraw <span>200,000 NGN</span> to{" "}
            <span>Oladipo Popoola</span>, <span>Guaranty Trust Bank</span>
          </p>
        </div>
        <div className={style.inputContainerLess}>
            <PasswordInput label="Password"/>
        </div>
        <CheckboxMain label="Confirm Transaction"/>
        <div className={style.formButton}>
          <ConfirmOTP label="Make Withdrawal" />
          <button className={style.buttonUnderline}>Cancel Withdrawal</button>
        </div>
      </form>
    </div>
  );
}
