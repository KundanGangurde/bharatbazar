import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import TaskIcon from "@mui/icons-material/Task";
import InfoIcon from "@mui/icons-material/Info";
import img from "../image/bharatbajar.png"

const NavBar = () => {
  return (
    <AppBar position="fixed" color="">
      <Toolbar>
        <Typography variant="h6" flexGrow={1}>
          <img
            src={img}
            height="30px"
            alt="AlmaBetter"
          />BharatBajar
        </Typography>
        <Button variant="text" color="primary" startIcon={<DescriptionIcon />}>
        हिशोब पट्टी
        </Button>
        <Button variant="text" color="primary" startIcon={<TaskIcon />}>
        कॅश रिसिप्ट
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
        उधारी रिपोर्ट
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
        विक्री रिपोर्ट
        </Button>
        <Button variant="text" color="primary" startIcon={<InfoIcon />}>
        उतारा(ग्राहकाचा)
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
