import {
    FormGroup,
    FormControl,
    Checkbox,
    FormControlLabel,Typography
  } from "@mui/material";

  import style from '../styling/styles.module.css'
  
  export default function SelectCurrency() {
    const gray = "#9DA0B8";
    const pink = "#FF2E63";
  
    return (
      <div className={style.wrapContainerSmaller}>
        <FormGroup className={style.borderForm}>
          <h4>Select Wallet Currency</h4>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: gray,
                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  "&.Mui-checked": {
                    color: pink
                  }
                }}
              />
            }
            label={<Typography variant="h6" color="textSecondary">United States Dollar (USD)</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: gray,
                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  "&.Mui-checked": {
                    color: pink
                  }
                }}
              />
            }
            label={<Typography variant="h6" color="textSecondary">Australian Dollar (AUD)</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: gray,
                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  "&.Mui-checked": {
                    color: pink
                  }
                }}
              />
            }
            label={<Typography variant="h6" color="textSecondary">Nigerian Naira (NGN)</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: gray,
                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  "&.Mui-checked": {
                    color: pink
                  }
                }}
              />
            }
            label={<Typography variant="h6" color="textSecondary">South African Rand (ZAR)</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: gray,
                  "& .MuiSvgIcon-root": { fontSize: 32 },
                  "&.Mui-checked": {
                    color: pink
                  }
                }}
              />
            }
            label={<Typography variant="h6" color="textSecondary">Japanese Yen (JPY)</Typography>}
          />
          <button className={style.buttonPrimary}>Create Wallet</button>
        </FormGroup>
      </div>
    );
  }
  