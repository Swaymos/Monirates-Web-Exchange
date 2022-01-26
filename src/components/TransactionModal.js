import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import "../styling/styles.css";
import BasicTextField from "../components/BasicTextField";
import EmailIcon from "@mui/icons-material/Email";

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

export default function TransactionModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="primary circle" type="button" onClick={handleOpen}>
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
          <div className="confirm-otp less-pad">
            <div className="transaction">
              <div className="status-wrap">
                <span className="status pending">pending</span>
              </div>
              <ul className="transaction-info">
                <li>
                  <h3>Buy Currency</h3>
                  <p>Transaction Type</p>
                </li>
                <li>
                  <h3>$480</h3>
                  <p>Amount</p>
                </li>
                <li>
                  <h3>Dollar Wallet</h3>
                  <p>Wallet</p>
                </li>
                <li>
                  <h3>10/09/2021</h3>
                  <p>Date</p>
                </li>
                <li>
                  <h3>15:30 PM</h3>
                  <p>Time</p>
                </li>
              </ul>
            </div>
            <div className="otp-submit">
              <button className="primary">Download Receipt</button>
              <button className="underline">Back To Transactions</button>
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
