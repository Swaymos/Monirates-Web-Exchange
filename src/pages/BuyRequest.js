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
import LocalMallIcon from "@mui/icons-material/LocalMall";
import buyRequestIllustration from "../images/buyRequestIllustration.svg";
import style from "../styling/styles.module.css";

export default function BuyRequest() {
  return (
    <div className={style.wrapContainerBorder}>
      <div className={style.blockIcon}>
        <span><img className={style.illustrationImage} src={buyRequestIllustration}></img></span>
      </div>
      <h4>Buy Currency</h4>
      <p>Select the currency you wish to buy and the currency you wish to pay with.</p>
      <form className="withdraw-form">
        <div >
          <CurrencyDropdown placeholder="Currency To Buy"/>
        </div>
        <div className="input-container last">
          <CurrencyDropdown placeholder="Currency To Pay With"/>
        </div>
        <div className="input-container last">
          <BasicTextField label="Amount To Buy" />
        </div>
        <div className="input-container last">
          <BasicTextField label="Your Exchange Rate" />
        </div>
        <UseRadioGroup firstLabel="Buy in bits" secondLabel="Buy all at once" />
        <div className="form-button">
          <button className={style.buttonPrimary}>Create Buy Request</button>
          <div className={style.seperator}>
            <span className={style.seperatorText}>or</span>
            <span className={style.seperatorDivider}></span>
          </div>
          <button className={style.buttonUnderline}>Buy Manually</button>
        </div>
      </form>
    </div>
  );
}
