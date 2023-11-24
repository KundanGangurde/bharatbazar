import React, { useState } from "react";
import { TextField, Typography } from "@mui/material";

const AddDetails = () => {
  const [info, setInfo] = useState();
  const inputStyle = {
    width: "254px",
    m: "10px",
  };
  const [details, setDetails] = useState([]);
  const [malacheNav, setMalacheNav] = useState("");
  const [vyapari, setVyapari] = useState("");
  const [dag, setDag] = useState("");
  const [vajan, setVajan] = useState("");
  const [bhav, setBhav] = useState("");
  const [total, setTotal] = useState("");

  const handleMalChange = (event) => {
    setMalacheNav(event.target.value);
  };

  const handleVyapariChange = (event) => {
    setVyapari(event.target.value);
  };

  const handleDagChange = (event) => {
    setDag(event.target.value);
  };

  const handleVajanChange = (event) => {
    setVajan(event.target.value);
  };

  const handleBhavChange = (event) => {
    setBhav(event.target.value); 
  };

  const handleTotalChange = (event) => {
    setTotal(event.target.value);
  };

  const handleAddDetails = () => {
    if (
      malacheNav.trim() !== "" &&
      vyapari.trim() !== "" &&
      dag.trim() !== "" &&
      vajan.trim() !== "" &&
      bhav.trim() !== "" &&
      total.trim() !== ""
    ) {
      const newDetails = [
        ...details,
        { malacheNav, vyapari, dag, vajan, bhav, total },
      ];
      setDetails(newDetails);
      setMalacheNav("");
      setVyapari("");
      setDag("");
      setVajan("");
      setBhav("");
      setTotal("");
    }
  };

  const handleDelete = (index) => {
    const updatedDetails = details.filter((_, i) => i !== index);
    setDetails(updatedDetails);
  };

  return (
    <div>
      <div style={{ marginTop: "100px" }}></div>
      <div style={{ marginTop: "5%", marginLeft: "250px" }}>
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
          label="शेतकरी कोड"
          type="text"
          varient="outlined"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          size="small"
          helperText={!info ? "शेतकरी मास्टर मध्ये कोड तयार करा" : ""}
          required
        />
        <TextField
          sx={{ width: "300px", m: "10px" }}
          label="शेतकरीचे नाव"
          type="text"
          varient="outlined"
          InputProps={{ readOnly: true }}
          required
        />
        <TextField
          sx={inputStyle}
          label=" गाव / एरिया"
          type="text"
          varient="outlined"
        />
        <br />
        <table
          style={{
            width: "700px",
            border: "1px solid grey",
            borderCollapse: "collapse",
            marginLeft: "40px",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid grey", padding: "8px" }}>
                माल घेणार
              </th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>माल</th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>डाग</th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>
                वजन / नग
              </th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>भाव</th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>एकूण</th>
              <th style={{ border: "1px solid grey", padding: "8px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid grey", padding: "8px" }}>
                  {detail.vyapari}
                </td>
                <td style={{ border: "1px solid grey", padding: "8px" }}>
                  {detail.malacheNav}
                </td>
                <td style={{ border: "1px solid grey", padding: "8px" }}>
                  {detail.dag}
                </td>
                <td style={{ border: "1px solid grey", padding: "8px" }}>
                  {detail.vajan}
                </td>
                <td style={{ border: "1px solid grey", padding: "8px" }}>
                  {detail.bhav}
                </td>
                <td style={{ border: "1px solid grey", padding: "8px" }}>
                  {detail.total}
                </td>
                <td style={{ border: "1px solid grey", padding: "8px" }}>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TextField
          sx={{ width: "150px", m: "10px" }}
          label="मालाचा कोड"
          type="text"
          varient="outlined"
          required
        />
        <TextField
          sx={{ width: "150px", m: "10px" }}
          label="मालाचे नाव"
          type="text"
          varient="outlined"
          value={malacheNav}
          onChange={handleMalChange}
          required
        />
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
          value={vyapari}
          onChange={handleVyapariChange}
          required
        />
        <br />
        <TextField
          sx={{ width: "150px", m: "10px" }}
          label="डाग"
          type="number"
          varient="outlined"
          value={dag}
          onChange={handleDagChange}
        />
        <TextField
          sx={{ width: "150px", m: "10px" }}
          label="वजन / नग"
          type="number"
          varient="outlined"
          value={vajan}
          onChange={handleVajanChange}
          required
        />
        <TextField
          sx={{ width: "150px", m: "10px" }}
          label="भाव"
          type="number"
          varient="outlined"
          value={bhav}
          onChange={handleBhavChange}
          required
        />
        <TextField
          sx={{ width: "150px", m: "10px" }}
          label="एकूण"
          type="number"
          varient="outlined"
          value={total}
          onChange={handleTotalChange}
        />
        <button
          style={{
            border: "2px solid grey",
            padding: "15px",
            margin: "8.5px",
            borderRadius: "10px",
            fontWeight: "900",
          }}
          onClick={handleAddDetails}
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
    </div>
  );
};

export default AddDetails;
