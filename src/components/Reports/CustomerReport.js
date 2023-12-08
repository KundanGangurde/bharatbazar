import { Box } from "@mui/system";
import { Typography, TextField, Button } from "@mui/material";
import React from "react";

const CustomerReport = () => {
  const inputStyle = {
    width: "300px",
    m: 1,
    borderRadius: "10px",
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
            ग्राहकाचा उतारा
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
            उतारा छापा
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

export default CustomerReport;
