import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import TaskIcon from "@mui/icons-material/Task";
import InfoIcon from "@mui/icons-material/Info";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import img from "../image/bharatbajar.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="fixed" color="">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          <img src={img} height="30px" alt="AlmaBetter" />
          BharatBajar
        </Typography>
        <Button variant="text" color="primary" startIcon={<DescriptionIcon />}>
          <Link to="/HishobPatti">हिशोब पट्टी</Link>
        </Button>
        <Button variant="text" color="primary" startIcon={<TaskIcon />}>
          <Link to="/CashReceipt">कॅश रिसिप्ट</Link>
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
          <Link to="/UdhariReport">उधारी रिपोर्ट</Link>
        </Button>
        <Button variant="text" color="primary" startIcon={<PersonAddIcon />}>
          <Link to="/Code_Register">कोड रजिस्टर</Link>
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
          <Link to="/SellReport">विक्री रिपोर्ट</Link>
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
          <Link to="/CustomerReport">उतारा(ग्राहकाचा)</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
