import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import UseRadioGroup from "../components/RadioGroup";
import BasicTextField from "../components/BasicTextField";
import CurrencyDropdown from "../components/CurrencyDropdown";
import style from '../styling/styles.module.css'

export default function Offers() {
  return (
    <div className={style.listWrap}>
      <div className={style.listWrapFilter}>
        <div className="offer-type">
          <h4>Offers To See</h4>
          <div className="radio-button">
            <UseRadioGroup firstLabel="Buy Offers" secondLabel="Sell Offers"/>
          </div>
        </div>
        <div className="currency">
          <h4>Select Currency</h4>
          <div className="currency-select">
            <CurrencyDropdown placeholder="Select Currency" />
          </div>
        </div>
        <div className="filter-rate">
          <h4>Filter Rate</h4>
          <div className="filter-rate-input">
            <BasicTextField label="550/USD" />
          </div>
        </div>
        <div className="minimum-amount">
          <h4>Minimum Amount</h4>
          <div className="minimum-amount-input">
            <BasicTextField label="5000" />
          </div>
        </div>
      </div>
      <div className={style.listWrapAvailableOffers}>
        <div className={style.listWrapOffer}>
          <ul>
          <li>
             <img alt="Nigerian" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg"/>
            </li>
            <li>
              <h3>Toyin Olaniyi</h3>
              <p>
                <span>
                  <CheckCircleIcon sx={{ fontSize: 16 }} />
                </span>
                verified user
              </p>
            </li>
            <li>
              <h3>
                500/<span className="base-currency">USD</span>
              </h3>
              <p>
                <span></span>exchange rate
              </p>
            </li>
            <li>
              <h3>$500</h3>
              <p>
                <span></span>min amount
              </p>
            </li>
            <li>
              <h3>$5,000</h3>
              <p>
                <span></span>trade volume
              </p>
            </li>
            <li>
              <button className={style.buttonTertiary}>
                Sell
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </button>
            </li>
          </ul>
          <ul>
          <li>
             <img alt="Nigerian" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg"/>
            </li>
            <li>
              <h3>Toyin Olaniyi</h3>
              <p>
                <span>
                  <CheckCircleIcon sx={{ fontSize: 16 }} />
                </span>
                verified user
              </p>
            </li>
            <li>
              <h3>
                500/<span className="base-currency">USD</span>
              </h3>
              <p>
                <span></span>exchange rate
              </p>
            </li>
            <li>
              <h3>$500</h3>
              <p>
                <span></span>min amount
              </p>
            </li>
            <li>
              <h3>$5,000</h3>
              <p>
                <span></span>trade volume
              </p>
            </li>
            <li>
              <button className={style.buttonTertiary}>
                Sell
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
