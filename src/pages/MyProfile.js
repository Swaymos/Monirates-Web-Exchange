import EditName from "../components/EditName";
import EditPassword from "../components/EditPassword";
import EditEmail from "../components/EditEmail";
import EditPhoneNumber from "../components/EditPhoneNumber";
import CheckboxMain from "../components/Checkbox";
import style from "../styling/styles.module.css";
import "../styling/styles.css";

export default function MyProfile() {
  return (
    <div className={style.wrapContainerLarger}>
        <div className={style.profileSetting}>
            <h3>My Profile</h3>
        </div>
      <div className={style.profileSetting}>
        <ul>
          <li>
            <p>Your Full Name</p>
          </li>
          <li>
            <h4>Albert Muller Schweinsteiger</h4>
          </li>
          <li>
            <EditName label="Edit Name" />
          </li>
        </ul>
      </div>
      <div className={style.profileSetting}>
        <ul>
          <li>
            <p>Your Password</p>
          </li>
          <li>
            <h4>*******************</h4>
          </li>
          <li>
            <EditPassword label="Edit Password" />
          </li>
        </ul>
      </div>
      <div className={style.profileSetting}>
        <ul>
          <li>
            <p>Your Email Address</p>
          </li>
          <li>
            <h4>emailname@site.com</h4>
          </li>
          <li>
            <EditEmail label="Edit Email Address" />
          </li>
        </ul>
      </div>
      <div className={style.profileSetting}>
        <ul>
          <li>
            <p>Your Phone Number</p>
          </li>
          <li>
            <h4>+2349466254728</h4>
          </li>
          <li>
            <EditPhoneNumber label="Edit Phone Number" />
          </li>
        </ul>
      </div>
      <div className={style.profileSetting}>
        <h3>Account Setting</h3>
        <div className="profile-check">
        <CheckboxMain label="Enable Two Factor Authentication" />
          <CheckboxMain label="Receive Notification On Mobile Number" />
          <CheckboxMain label="Receive Notification On Email Address" />
          <CheckboxMain label="Receive Newsletter" />
        </div>
      </div>
    </div>
  );
}
