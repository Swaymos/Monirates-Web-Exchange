import {
    FormGroup,
    FormControl,
    Checkbox,
    FormControlLabel
  } from "@mui/material";

export default function CheckboxMain (props) {
    const gray = "#9DA0B8";
    const pink = "#FF2E63";
    return(
        <div className="form-checkbox">
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
            label={props.label}
          />
        </div>
    );
}