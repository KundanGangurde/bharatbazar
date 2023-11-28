import React from "react";
import { TextField, Typography, Paper } from "@mui/material";

const CashReceipt = () => {
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
      <div style={{ marginLeft: "50px" }}>
        <Typography variant="h6" sx={{ mr: "5px" }}>
          रिसिप्ट क्रमांक : <input style={{ width: "100px" }} type="number" />
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
          InputProps={{ readOnly: true }}
          required
        />
        <br />
        <table>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid grey",
                  padding: "8px",
                }}
              >
                कलम ता.{" "}
              </th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>
                कलम Amount
              </th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>
                जमा कलम
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid grey", padding: "8px" }}>
                12/12/2012
              </td>
              <td style={{ border: "1px solid grey", padding: "8px" }}>5000</td>
              <td style={{ border: "1px solid grey", padding: "8px" }}>0</td>
            </tr>
          </tbody>
        </table>
        <br />

        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            margin: "8.5px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          जोडा
        </button>
        <br />
        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            width: "100px",
            margin: "13px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          पुढील
        </button>
        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            width: "100px",
            margin: "13px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          मागील
        </button>
        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            width: "100px",
            margin: "13px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          नविन
        </button>
        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            width: "100px",
            margin: "13px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          बदल
        </button>
        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            width: "100px",
            margin: "13px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          खोडणे
        </button>
        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            width: "100px",
            margin: "13px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
        >
          बाहेर
        </button>
      </div>
    </Paper>
  );
};

export default CashReceipt;
