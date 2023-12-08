import React from "react";
import { Box } from "@mui/system";
import { Typography, TextField, Button } from "@mui/material";

const UdhariReport = () => {
  const inputStyle = {
    width: "254px",
    m: "10px",
  };
  return (
    <>
      <div>
        <Box
          container
          component="form"
          sx={{
            width: "60%",
            height: "auto",
            m: 3,
            p: 3,
            boxShadow: "0 0 15px 0.1px",
            textAlign: "center",
            borderRadius: "10px",
            marginLeft: "18%",
            marginTop: "8%",
          }}
        >
          <Typography variant="h5" sx={{ mb: "40px", mt: "20px" }}>
            उधारी अहवाल
          </Typography>
          <div>
            <TextField
              sx={inputStyle}
              label="व्यापारी कोड"
              type="text"
              varient="outlined"
              required
            />
            <TextField
              sx={inputStyle}
              label="व्यापारीचे नाव"
              type="text"
              varient="outlined"
              required
            />{" "}
            <br />
            <TextField
              sx={{ width: "150px", m: "10px" }}
              label="पासून "
              type="date"
              varient="outlined"
              required
            />
            <TextField
              sx={{ width: "150px", m: "10px", ml: "0" }}
              label="पर्यंत "
              type="date"
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
            अहवाल छापा
          </Button>
          <Button
            // onClick={handleSubmit()}
            variant="contained"
            sx={{ backgroundColor: "grey", mt: "10px", fontWeight: "bold" }}
          >
            रद्द करा
          </Button>
        </Box>
      </div>
    </>
  );
};

export default UdhariReport;
