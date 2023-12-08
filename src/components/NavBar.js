import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import TaskIcon from "@mui/icons-material/Task";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import img from "../image/bharatbajar.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import LanguageOption from "./Language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <AppBar position="fixed" color="">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          <img src={img} height="30px" alt="AlmaBetter" />
          {t("BharatBajar")}
        </Typography>
        <Button variant="text" color="primary" startIcon={<TaskIcon />}>
          <NavLink style={{ textDecoration: "none" }} to="/HishobPatti">
            {t("Farmer Bill")}
          </NavLink>
        </Button>
        <Button variant="text" color="primary" startIcon={<DescriptionIcon />}>
          <NavLink style={{ textDecoration: "none" }} to="/SellReport">
            {t("Sell Report")}
          </NavLink>
        </Button>
        <Button
          variant="text"
          color="primary"
          startIcon={<CurrencyRupeeIcon />}
        >
          <NavLink style={{ textDecoration: "none" }} to="/CashReceipt">
            {t("Cash Receipt")}
          </NavLink>
        </Button>
        <Button variant="text" color="primary" startIcon={<DescriptionIcon />}>
          <NavLink style={{ textDecoration: "none" }} to="/UdhariReport">
            {t("Borrow Report")}
          </NavLink>
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
          <NavLink style={{ textDecoration: "none" }} to="/CustomerReport">
            {t("Customer Report")}
          </NavLink>
        </Button>
        <Button variant="text" color="primary" startIcon={<PersonAddIcon />}>
          <NavLink style={{ textDecoration: "none" }} to="/Code_Register">
            {t("Code Register")}
          </NavLink>
        </Button>
        <LanguageOption onChange={(e) => handleClick(e)} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
