import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  import style from '../styling/styles.css';
  
  export default function DollarWallet() {
    return (
      <div className="singlewallet-wrap">
          <h4>Your Naira Wallet</h4>
        <div className="wallets">
          <div className="wallet gradient-two">
          <div className="currency">
                <p>
                    <span><img alt="US Dollar" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/></span>Dollar Wallet
                </p>
            </div>
            <div className="currency-amount">$ 1,000</div>
            <div className="wallet-id">Wallet ID: #MO3421</div>
            <NavLink className="view-wallet" to="/fund-wallet">
              Fund Wallet
              <span>
                <ArrowCircleRightIcon />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
  