import { Box } from "@mui/system";
import { TextField, Button } from "@mui/material";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { React, useState } from "react";
import "./Reports.css";

const SellReport = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
          <FormControl>
            <FormLabel id="label" sx={{ mb: "40px", mt: "20px" }}>
              विक्री अहवाल
            </FormLabel>
            <RadioGroup
              name="options"
              value={selectedOption}
              onChange={handleChange}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                value="option1"
                control={<Radio />}
                label="मालाप्रमाणे"
              />
              <FormControlLabel
                value="option2"
                control={<Radio />}
                label="शेतकऱ्याप्रमाणे"
              />
              <FormControlLabel
                value="option3"
                control={<Radio />}
                label="एकूण अहवाल"
              />
            </RadioGroup>
          </FormControl>
          <div className="boxContainer">
            {selectedOption === "option1" && (
              <Box className="box">
                <TextField
                  sx={{ width: "150px", m: "10px" }}
                  label="पासून "
                  type="date"
                  varient="outlined"
                  required
                />
                <TextField
                  sx={{ width: "150px", m: "10px" }}
                  label="पर्यंत "
                  type="date"
                  varient="outlined"
                  required
                />
              </Box>
            )}
            {selectedOption === "option2" && (
              <Box className="box">
                <TextField
                  sx={inputStyle}
                  label="शेतकरी कोड"
                  type="text"
                  varient="outlined"
                  size="small"
                  required
                />
                <TextField
                  sx={inputStyle}
                  label="शेतकरीचे नाव"
                  type="text"
                  varient="outlined"
                  InputProps={{ readOnly: true }}
                  required
                />
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
              </Box>
            )}
            {selectedOption === "option3" && (
              <Box className="box">
                <TextField
                  sx={{ width: "150px", m: "10px" }}
                  label="पासून "
                  type="date"
                  varient="outlined"
                  required
                />
                <TextField
                  sx={{ width: "150px", m: "10px" }}
                  label="पर्यंत "
                  type="date"
                  varient="outlined"
                  required
                />
              </Box>
            )}
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

export default SellReport;
