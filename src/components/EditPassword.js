import React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import PasswordInput from "./PasswordInput";
import LockIcon from '@mui/icons-material/Lock';
import "../styling/styles.css";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#fff",
  borderRadius: "4px",
  p: 2,
  px: 4,
  pb: 3
};

export default function EditPassword(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="tertiary" type="button" onClick={handleOpen}>
        {props.label}
      </button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <div className="confirm-otp">
            <div className="otp-icon">
              <LockIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="otp-message">
              <p>
                Add a strong password, we make sure your account is fully secured.
              </p>
            </div>
            <div className="otp-input">
              <PasswordInput label="Current Password" />
            </div>
            <div className="otp-input">
              <PasswordInput label="New Password" />
            </div>
            <div className="otp-input">
              <PasswordInput label="Confirm Password" />
            </div>
            <div className="otp-submit">
              <button className="primary">Save Password</button>
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
