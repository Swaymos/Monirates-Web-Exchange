import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import BasicTextField from "../components/BasicTextField";
  import makeTransferIllustration from "../images/makeTransferIllustration.svg";
  import WalletDropdown from "../components/WalletDropdown";
  import style from '../styling/styles.module.css';
  
  export default function MakeTransfer() {
    return (
      <div className={style.wrapContainerBorder}>
        <span><img className={style.illustrationImage} src={makeTransferIllustration}></img></span>
        <div className={style.formSteps}>
          <ul>
            <li>
              <NavLink activeClassName={style.activeLink} exact to="/make-transfer">
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
        <h4>Make Transfer</h4>
        <p>Make transfer using the Wallet ID of the user you wish to make transfer to.</p>
        <form className="withdraw-form">
        <div>
            <WalletDropdown placeholder="Wallet To Fund Transfer" />
          </div>
          <div className={style.inputContainer}>
            <BasicTextField label="Amount To Transfer" />
          </div>
          <div className={style.inputContainerLast}>
            <BasicTextField label="Wallet ID" />
          </div>
          <div className="form-button">
            <button className={style.buttonPrimary}>Confirm Details</button>
            <div className={style.seperator}>
              <span className={style.seperatorText}>or</span>
              <span className={style.seperatorDivider}></span>
            </div>
            <button className={style.buttonUnderline}>Cancel Transfer</button>
          </div>
        </form>
      </div>
    );
  }
  