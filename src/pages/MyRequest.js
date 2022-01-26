import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import UseRadioGroup from "../components/RadioGroup";
import BasicTextField from "../components/BasicTextField";
import CurrencyDropdown from "../components/CurrencyDropdown";
import style from '../styling/styles.module.css'
import '../styling/styles.css'

export default function MyRequest() {
  return (
    <div className={style.listWrap}>
      <div className={style.listWrapFilter}>
        <div className="currency">
          <h4>Request Currency</h4>
          <div className="currency-select">
            <CurrencyDropdown placeholder="Select Currency" />
          </div>
        </div>
        <div className="offer-type">
          <h4>Transaction To See</h4>
          <div className="radio-button">
            <UseRadioGroup firstLabel="Buy Request" secondLabel="Sell Request"/>
          </div>
        </div>
        <div className="minimum-amount">
          <h4>Transaction Amount</h4>
          <div className="minimum-amount-input">
            <BasicTextField label="5000" />
          </div>
        </div>
      </div>
      <div className={style.listWrapAvailableOffers}>
        <div className={style.listWrapOffer}>
          <ul>
            <li>
              <h3>Buy Currency</h3>
              <p>Request Type</p>
            </li>
            <li>
              <h3>$1000</h3>
              <p>Amount</p>
            </li>
            <li>
              <h3>US Dollar</h3>
              <p>Currency</p>
            </li>
            <li>
              <h3>10/09/2021</h3>
              <p>Date</p>
            </li>
            <li>
              <h3>3:40 PM</h3>
              <p>Time</p>
            </li>
            <li>
              <span className="status pending">pending</span>
            </li>
            <li>
                <button className={style.buttonTertiary}>Cancel Request</button>
            </li>
          </ul>
          <ul>
            <li>
              <h3>Sell Currency</h3>
              <p>Request Type</p>
            </li>
            <li>
              <h3>$1000</h3>
              <p>Amount</p>
            </li>
            <li>
              <h3>US Dollar</h3>
              <p>Currency</p>
            </li>
            <li>
              <h3>10/09/2021</h3>
              <p>Date</p>
            </li>
            <li>
              <h3>3:40 PM</h3>
              <p>Time</p>
            </li>
            <li>
              <span className="status pending">pending</span>
            </li>
            <li>
                <button className={style.buttonTertiary}>Cancel Request</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
