import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const bankName = [
  {
    value: "GTB",
    label: "Guaranty Trust Bank"
  },
  {
    value: "Access Bank Plc",
    label: "Access Bank Plc"
  },
  {
    value: "Fidelity Bank Plc",
    label: "Fidelity Bank Plc"
  },
  {
    value: "First City Monument Bank Limited",
    label: "First City Monument Bank Limited"
  },
  {
    value: "First Bank of Nigeria Limited",
    label: "First Bank of Nigeria Limited"
  },
  {
    value: "First Bank of Nigeria Limited",
    label: "First Bank of Nigeria Limited"
  },
  {
    value: "First Bank of Nigeria Limited",
    label: "First Bank of Nigeria Limited"
  },
  {
    value: "First Bank of Nigeria Limited",
    label: "First Bank of Nigeria Limited"
  },
  {
    value: "First Bank of Nigeria Limited",
    label: "First Bank of Nigeria Limited"
  }
];

export default function SelectBank() {
  const [bankname, setBankName] = React.useState("");

  const handleChange = (event) => {
    setBankName(event.target.value);
  };
  const primary = "red";
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%", top: "12px" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Bank Name"
          value={bankname}
          onChange={handleChange}
          sx={{ currentColor: primary }}
        >
          {bankName.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
