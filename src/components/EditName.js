import React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import BasicTextField from "./BasicTextField";
import BadgeIcon from '@mui/icons-material/Badge';
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

export default function EditName(props) {
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
              <BadgeIcon sx={{ fontSize: 60 }} />
            </div>
            <div className="otp-message">
              <p>
                Add a name to your profile, it makes your profile look more real. This increases your transaction rate
              </p>
            </div>
            <div className="otp-input">
              <BasicTextField label="First Name" />
            </div>
            <div className="otp-input">
              <BasicTextField label="Last Name" />
            </div>
            <div className="otp-submit">
              <button className="primary">Save Name</button>
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
