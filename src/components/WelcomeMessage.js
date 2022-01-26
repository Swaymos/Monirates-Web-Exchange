import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import style from '../styling/styles.module.css'

export default function WelcomeMessage() {
  return (
    <div className={style.wrapContainer}>
      <div className={style.welcomeIcon}>
        <EmojiPeopleIcon sx={{ fontSize: 50 }} />
      </div>
      <h2>Welcome to monirates</h2>
      <p>
        Thanks for signing up with monirates, create any currency wallet of your
        choice to start carrying out transactions.
      </p>
    </div>
  );
}
