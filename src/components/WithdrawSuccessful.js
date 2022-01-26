import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { NavLink } from 'react-router-dom';
import style from '../styling/styles.module.css'

export default function WelcomeSuccessful() {
  return (
    <div className={style.wrapContainerBorder}>
      <div className={style.welcomeIcon}>
        <ThumbUpIcon sx={{ fontSize: 50 }} />
      </div>
      <h2>Withdraw Successful</h2>
      <p>
      You just made a withdrawal of 200,000 NGN to Oladipo Popoola, Guaranty Trust Bank
      </p>
      <NavLink className={style.buttonPrimary} to="/my-transaction">View Transaction</NavLink>
      <NavLink className={style.buttonUnderline} exact to="/">Dashboard Home</NavLink>
    </div>
  );
}
