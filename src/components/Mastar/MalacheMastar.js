import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

const MalacheMastar = () => {
  const inputStyle = {
    width: "300px",
    m: 1,
    borderRadius: "10px",
  };
  return (
    <Paper
      elevation={9}
      style={{
        marginLeft: "150px",
        padding: "15px",
        marginTop: "80px",
        marginRight: "150px",
      }}
    >
      <div>
        <Box
          container
          component="form"
          sx={{
            width: "80%",
            height: "auto",
            m: 3,
            p: 3,
            boxShadow: "0 0 400px 1px",
            textAlign: "center",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5" sx={{ mb: "40px", mt: "20px" }}>
            मालाचे मास्टर
          </Typography>
          <div>
            <TextField
              sx={inputStyle}
              label="मालाचा कोड"
              type="text"
              varient="outlined"
              required
            />
            <TextField
              sx={inputStyle}
              label="मालाचे नाव"
              type="text"
              varient="outlined"
              required
            />
            <br />
            <TextField
              sx={inputStyle}
              label=" कमिशन "
              type="number"
              varient="outlined"
              required
            />
            <TextField
              sx={inputStyle}
              label="मार्केट फी"
              type="number"
              varient="outlined"
            />
            <br />
            <TextField
              sx={inputStyle}
              label="हमाली"
              type="number"
              varient="outlined"
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
      </div>
    </Paper>
  );
};

export default MalacheMastar;
