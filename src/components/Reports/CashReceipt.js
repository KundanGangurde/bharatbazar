import React from 'react';
import { TextField, Typography } from "@mui/material";


const CashReceipt = () => {
  return (
    <div style={{marginTop:"10%", marginLeft:"20%"}}>
      <Typography variant="h6" sx={{ mr: "5px" }}>
          हिशोब पट्टी क्रमांक :{" "}
          <input style={{ width: "100px" }} type="number" />
          <TextField
            sx={{ ml: "310px" }}
            label="दिनांक"
            type="date"
            varient="outlined"
            required
          />
        </Typography>
        <TextField
          sx={{ width: "150px", m: "10px" }}
          label="व्यापारी कोड"
          type="text"
          varient="outlined"
          required
        />
        <TextField
          sx={{ width: "230px", m: "10px" }}
          label="व्यापारीचे नाव"
          type="text"
          varient="outlined"
          required
        />
      <br/>
      
    </div>
  )
}

export default CashReceipt
