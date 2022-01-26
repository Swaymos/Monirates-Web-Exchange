import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import {
    FormGroup,
    FormControl,
    Checkbox,
    FormControlLabel
  } from "@mui/material";
  import PasswordInput from "../components/PasswordInput";
  import UseRadioGroup from "../components/RadioGroup";
  import BasicTextField from "../components/BasicTextField";
  import CurrencyDropdown from "../components/CurrencyDropdown";
  import PaidIcon from "@mui/icons-material/Paid";
  import sellRequestIllustration from "../images/sellRequestIllustration.svg";
  import style from "../styling/styles.module.css";
  
  export default function SellRequest() {
    return (
      <div className={style.wrapContainerBorder}>
         <div className={style.blockIcon}>
         <span><img className={style.illustrationImage} src={sellRequestIllustration}></img></span>
      </div>
      <h4>Sell Currency</h4>
      <p>Select the currency you wish to sell and the currency you wish to receive as payment.</p>
        <form className="withdraw-form">
          <div className="">
            <CurrencyDropdown placeholder="Currency To Sell"/>
          </div>
          <div className="input-container last">
            <CurrencyDropdown placeholder="Currency To Receive"/>
          </div>
          <div className="input-container last">
            <BasicTextField label="Amount To Sell" />
          </div>
          <div className="input-container last">
            <BasicTextField label="Your Exchange Rate" />
          </div>
          <div className="input-container last">
            <BasicTextField label="Minimum Amount To Sell" />
          </div>
          <UseRadioGroup firstLabel="Sell in bits" secondLabel="Sell all at once" />
          <div className="form-button">
            <button className={style.buttonPrimary}>Create Sell Request</button>
            <div className={style.seperator}>
              <span className={style.seperatorText}>or</span>
              <span className={style.seperatorDivider}></span>
            </div>
            <button className={style.buttonUnderline}>Sell Manually</button>
          </div>
        </form>
      </div>
    );
  }
  