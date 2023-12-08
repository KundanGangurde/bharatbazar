import React from "react";
import { Box, Stack, Container } from "@mui/material";
import "./Mastar.css";
import { Routes, Route, NavLink } from "react-router-dom";
import VyapariMastar from "./Mastar/VyapariMastar";
import ShetkariMastar from "./Mastar/ShetkariMastar";
import MalacheMastar from "./Mastar/MalacheMastar";
import AreaMastar from "./Mastar/AreaMastar";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const CodeRegister = () => {
  return (
    <div>
      <Container sx={{ display: { md: "flex" }, mt: "70px" }}>
        <Box
          sx={{
            width: "300px",
            height: "auto",
            mr: { md: "5%" },
            ml: { md: "0px" },
          }}
        >
          <Stack
            sx={{
              width: "300px",
              height: "220px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 0px 20px 2px",
              p: "20px",
              marginTop: "50px",
            }}
          >
            <ul className="ul-list">
              <li className="list">
                <NavLink
                  to={"/Code_Register/Vyapari_Mastar"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BusinessCenterIcon sx={{ mr: "10px" }} />
                  व्यापारी मास्टर
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/Code_Register/Shetkari_Mastar"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AgricultureIcon sx={{ mr: "10px" }} />
                  शेतकरी मास्टर
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/Code_Register/Malache_Mastar"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ShoppingCartCheckoutIcon sx={{ mr: "10px" }} />
                  मालाचे मास्टर
                </NavLink>
              </li>
              <li className="list">
                <NavLink
                  to={"/Code_Register/Area_Mastar"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PinDropIcon sx={{ mr: "10px" }} />
                  एरिया मास्टर
                </NavLink>
              </li>
            </ul>
          </Stack>
        </Box>

        {/* Routes Path To particular form Sections ******************************* */}

        <Routes>
          <Route exact path="/Vyapari_Mastar" element={<VyapariMastar />} />
          <Route exact path="/Shetkari_Mastar" element={<ShetkariMastar />} />
          <Route exact path="/Malache_Mastar" element={<MalacheMastar />} />
          <Route exact path="/Area_Mastar" element={<AreaMastar />} />
        </Routes>
      </Container>
    </div>
  );
};

export default CodeRegister;
