import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import style from '../styling/styles.module.css';

export default function ProfileToolTip(){
    return(
        <div className={style.profileToolTip}>
            <div className={style.virtualCard}>
                <div className="toolTip">
                    <p>Process your virtual card to give you access to a lot of Perks from Monirates.</p>
                    <div className={style.profileHintLink}><Link to="/my-profile" className="underline"><span>Complete Info</span><span><ArrowForwardIcon /></span></Link></div>
                </div>
            </div>
            <div className={style.becomeMerchant}>
                <div className="toolTip">
                    <p>Start accepting payments from your customers using monirates.</p>
                    <div className={style.profileHintLink}><Link to="/my-profile" className="underline"><span>Become A Merchant</span><span><ArrowForwardIcon /></span></Link></div>
                </div>
            </div>
        </div>
    );
}