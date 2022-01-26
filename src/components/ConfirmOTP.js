import React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import BasicTextField from "./BasicTextField";
import EmailIcon from "@mui/icons-material/Email";
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

export default function ConfirmOTP(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="primary" type="button" onClick={handleOpen}>
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
              <EmailIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="otp-message">
              <p>
                A confirmation code has been sent to <span>+23498162635</span>.
                Input the code.
              </p>
            </div>
            <div className="otp-resend">
              <button className="underline">Resend OTP Code</button>
            </div>
            <div className="otp-input">
              <BasicTextField label="OTP Code" />
            </div>
            <div className="otp-submit">
              <button className="primary">Confirm Code</button>
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
