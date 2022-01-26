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
  
  export default function MyWallet() {
    return (
      <div className="wallets-wrap">
        <div className="wallets">
          <div className="wallet gradient-five">
          <div className="currency">
                <p>
                    <span><img alt="US Dollar" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/></span>Dollar Wallet
                </p>
            </div>
            <div className="currency-amount">$ 1,000</div>
            <div className="wallet-id">Wallet ID: #MO3421</div>
            <NavLink className="view-wallet" to="/dollar-wallet">
                    View Wallet
                    <span>
                      <ArrowCircleRightIcon />
                    </span>
            </NavLink>
          </div>
          <div className="wallet gradient-two" to="/view-wallet">
          <div className="currency">
                <p>
                    <span><img alt="Nigerian Naira" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg"/></span>Naira Wallet
                </p>
            </div>
            <div className="currency-amount">₦ 10,000</div>
            <div className="wallet-id">Wallet ID: #MO3421</div>
            <NavLink className="view-wallet" to="/naira-wallet">
                    View Wallet
                    <span>
                      <ArrowCircleRightIcon />
                    </span>
            </NavLink>
          </div>
          <div className="wallet gradient-three" to="/view-wallet">
            <div className="currency">
              <p>
              <span><img alt="Euros" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/EU.svg"/></span>Euro Wallet
              </p>
            </div>
            <div className="currency-amount">€ 1,000</div>
            <div className="wallet-id">Wallet ID: #MO3421</div>
            <NavLink className="view-wallet" to="/euro-wallet">
                    View Wallet
                    <span>
                      <ArrowCircleRightIcon />
                    </span>
            </NavLink>
          </div>
          <div className="wallet gradient-one" to="/view-wallet">
            <div className="currency">
              <p>
              <span><img alt="Pound Sterling" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg"/></span>Pound Wallet
              </p>
            </div>
            <div className="currency-amount">£ 1,000</div>
            <div className="wallet-id">Wallet ID: #MO3421</div>
            <NavLink className="view-wallet" to="/pound-wallet">
                    View Wallet
                    <span>
                      <ArrowCircleRightIcon />
                    </span>
            </NavLink>
          </div>
          <NavLink className="wallet create-wallet" to="/add-wallet">
            <div className="currency">
              <button className="add-wallet">
                <span>
                  <AddCircleIcon sx={{ fontSize: 60 }} />
                </span>
                <h4>Add Wallet</h4>
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
  