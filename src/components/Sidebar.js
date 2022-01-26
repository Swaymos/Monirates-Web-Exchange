import style from '../styling/styles.module.css';
import '../styling/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
// Menu Icons
import HomeIcon from "@mui/icons-material/Home";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PaidIcon from "@mui/icons-material/Paid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import SendIcon from "@mui/icons-material/Send";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            <span className="nav-icon">
              <HomeIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/buy-request">
            <span className="nav-icon">
              <LocalMallIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">Buy</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/sell-request">
            <span className="nav-icon">
              <PaidIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">Sell</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/offers">
            <span className="nav-icon">
              <VisibilityIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">View Offers</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/my-request">
            <span className="nav-icon">
            <NotificationsIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">My Request</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/my-transaction">
            <span className="nav-icon">
              <ReceiptLongIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">My Transaction</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/my-wallet">
            <span className="nav-icon">
              <AccountBalanceWalletIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">My Wallet</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/fund-wallet">
            <span className="nav-icon">
              <AddCircleIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">Fund Wallet</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/make-withdraw">
            <span className="nav-icon">
              <AssignmentReturnedIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">Withdraw Fund</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/make-transfer">
            <span className="nav-icon">
              <SendIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">Make Transfer</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/my-profile">
            <span className="nav-icon">
              <PersonIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">My Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/signin">
            <span className="nav-icon">
              <ExitToAppIcon sx={{fontSize:20}}/>
            </span>
            <span className="item">Log Out</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
