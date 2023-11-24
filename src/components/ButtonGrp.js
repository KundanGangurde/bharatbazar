import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const buttons = [
  <Button startIcon={<AgricultureIcon />} key="one">
    शेतकरी मास्टर{" "}
  </Button>,
  <Button startIcon={<BusinessCenterIcon />} key="two">
    व्यापारी मास्टर{" "}
  </Button>,
  <Button startIcon={<PinDropIcon />} key="three">
    एरिया मास्टर{" "}
  </Button>,
  <Button startIcon={<ShoppingCartCheckoutIcon />} key="four">
    मालाचे मास्टर{" "}
  </Button>,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        width: "30%",
        mt: 15,
        "& > *": { m: 1 },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
