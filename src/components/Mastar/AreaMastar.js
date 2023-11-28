import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import {Box} from "@mui/system";

const AreaMastar = () => {
  const inputStyle = {
    width: "300px",
    m: 1,
    borderRadius: "10px",
  };
  return (
    <div
    >
      <>
        <Box
          container
          component="form"
          sx={{
            width: "80%",
            height: "auto",
            m: 3,
            p: 3,
            boxShadow: "0 0 20px 0.1px",
            textAlign: "center",
            borderRadius: "10px",
            marginTop: "50px",
          }}
        >
          <Typography variant="h5" sx={{ mb: "40px", mt: "20px" }}>
            एरिया मास्टर
          </Typography>
          <div>
            <TextField
              sx={inputStyle}
              label="एरिया कोड"
              type="text"
              varient="outlined"
              required
            />
            <TextField
              sx={inputStyle}
              label="एरियाचे नाव"
              type="text"
              varient="outlined"
              required
            />
          </div>
          <Button
            // onClick={handleSubmit()}
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "grey",
              mt: "10px",
              fontWeight: "bold",
              mr: "10px",
            }}
          >
            जतन करा
          </Button>
          <Button
            // onClick={handleSubmit()}
            variant="contained"
            sx={{ backgroundColor: "grey", mt: "10px", fontWeight: "bold" }}
          >
            रद्द करा
          </Button>
        </Box>
      </>
    </div>
  );
};

export default AreaMastar;
