import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import CheckboxMain from "../components/Checkbox";
import BasicTextField from "../components/BasicTextField";
import WalletDropdown from "../components/WalletDropdown";
import style from "../styling/styles.module.css";
import fundWalletIllustration from "../images/fundWalletIllustration.svg";
import "../styling/styles.css";

export default function FundWallet() {

  return (
    <div className={style.wrapContainerBorder}>
      <img className={style.illustrationImage} src={fundWalletIllustration}></img>
      <h4>Fund Your Wallet</h4>
      <p>Input your card details to fund your wallet.</p>
      <form className="withdraw-form">
      <div className="">
            <WalletDropdown placeholder="Wallet To Fund"/>
          </div>
        <div className="input-container">
          <BasicTextField label="Fund Amount" />
        </div>
        <div className="input-container last">
          <BasicTextField label="Name On Card" />
        </div>
        <div className="input-container last">
          <BasicTextField label="Card Number" />
        </div>
        <ul className="security-code">
          <li className="">
            <BasicTextField label="Expiration Date" />
          </li>
          <li className="">
            <BasicTextField label="Security Code (CVC)" />
          </li>
        </ul>
        <CheckboxMain label="Save Card Details"/>
        <div className="form-button">
            <button className={style.buttonPrimary}>Fund Wallet</button>
            <div className={style.seperator}>
              <span className={style.seperatorText}>or</span>
              <span className={style.seperatorDivider}></span>
            </div>
            <button className={style.buttonUnderline}>Cancel</button>
          </div>
      </form>
    </div>
  );
}
