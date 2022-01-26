import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SelectBank from "../components/SelectBank";
import BasicTextField from "../components/BasicTextField";
import WalletDropdown from "../components/WalletDropdown";
import makeWithdrawIllustration from "../images/makeWithdrawIllustration.svg";
import style from '../styling/styles.module.css';

export default function Withdraw() {
  return (
    <div className={style.wrapContainerBorder}>
      <img className={style.illustrationImage} src={makeWithdrawIllustration}></img>
      <h4>Your Bank Account Details</h4>
      <p>Super quick transfers to your local bank account.</p>
      <div className={style.formSteps}>
        <ul>
          <li>
            <NavLink activeClassName={style.activeLink} exact to="/make-withdraw">
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
      <div>
          <WalletDropdown placeholder="Wallet To Withdraw From" />
        </div>
        <div className={style.inputContainer}>
          <BasicTextField label="Name" />
        </div>
        <div className={style.inputContainerLess}>
          <SelectBank />
        </div>
        <div className={style.inputContainer}>
          <BasicTextField label="Account Number" />
        </div>
        <div className={style.inputContainerLast}>
          <BasicTextField label="Account Name" />
        </div>
        <div className="form-button">
            <button className={style.buttonPrimary}>Confirm Details</button>
            <div className={style.seperator}>
              <span className={style.seperatorText}>or</span>
              <span className={style.seperatorDivider}></span>
            </div>
            <button className={style.buttonUnderline}>Cancel Withdraw</button>
          </div>
      </form>
    </div>
  );
}
