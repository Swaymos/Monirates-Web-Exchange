import logo from '../../src/logo.svg';
import style from '../styling/styles.module.css'
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function Header(props) {
  return (
    <ul className={style.headerBlock}>
      <li className={style.headerLogo}>
        <NavLink to="/">
        <img src={logo}></img>
        </NavLink>  
      </li>
      <li className={style.headerNotificationBlock}>
        <button className={style.notificationButton}>
          <NotificationsIcon sx={{ fontSize: 25 }} />
        </button>
      </li>
    </ul>
  );
}
