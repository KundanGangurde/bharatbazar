import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const VyapariMastar = () => {
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
            व्यापारी मास्टर
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
            <br />
            <TextField
              sx={inputStyle}
              label=" गाव / एरिया"
              type="text"
              varient="outlined"
              required
            />
            <TextField
              sx={inputStyle}
              label="दूरध्वनी / मोबाईल नंबर"
              type="number"
              varient="outlined"
            />
            <br />
            <TextField
              sx={inputStyle}
              label="संपूर्ण पत्ता"
              type="text"
              varient="outlined"
              multiline
            />
            <TextField
              sx={inputStyle}
              label="हवाला / ग्यारंटी घेणाऱ्याचे नाव"
              type="text"
              varient="outlined"
            />
            <br />
            <TextField
              sx={inputStyle}
              label="हवाला / ग्यारंटी घेणाऱ्याचा नंबर"
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
    </>
  );
};

export default VyapariMastar;
