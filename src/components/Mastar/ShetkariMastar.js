import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ShetkariMastar = () => {
  const inputStyle = {
    width: "300px",
    m: 1,
    borderRadius: "10px",
  };
  return (
    <div>
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
            शेतकरी मास्टर
          </Typography>
          <div>
            <TextField
              sx={inputStyle}
              label="शेतकरी कोड"
              type="text"
              varient="outlined"
              required
            />
            <TextField
              sx={inputStyle}
              label="शेतकरीचे नाव"
              type="text"
              varient="outlined"
              required
            /><br/>
            <TextField
              sx={inputStyle}
              label=" गाव / एरिया"
              type="text"
              varient="outlined"
            />
            <TextField
              sx={inputStyle}
              label="दूरध्वनी / मोबाईल नंबर"
              type="number"
              varient="outlined"
            /><br/>
            <TextField
              sx={inputStyle}
              label="बँकेचे नाव"
              type="text"
              varient="outlined"
            />
            <TextField
              sx={inputStyle}
              label="अकाउंट नंबर"
              type="text"
              varient="outlined"
            /><br/>
            <TextField
              sx={inputStyle}
              label="IFSC Number"
              type="text"
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
    </div>
  );
};

export default ShetkariMastar;
