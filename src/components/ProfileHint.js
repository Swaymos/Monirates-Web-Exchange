import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import style from '../styling/styles.module.css';

export default function ProfileHint(){
    return(
        <div className={style.profileHint}>
            <div className={style.profileHintIcon}>
                <span><ErrorIcon sx={{fontSize:"80px"}}/></span>
            </div>
            <div className={style.profileHintContent}>
                <p>Please complete your profile information to get full access to Monirates.</p>
               <div className={style.profileHintLink}><Link to="/my-profile" className="underline"><span>Complete Info</span><span><ArrowForwardIcon /></span></Link></div>
                <button className={style.hideProfileHint}><CloseIcon sx={{fontSize:"26px"}}/></button>
            </div>
        </div>
    );
}