import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextField(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "100%" }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={props.label} variant="outlined" />
    </Box>
  );
}
