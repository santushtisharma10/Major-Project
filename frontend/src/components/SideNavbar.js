import React from "react";
import { styled, Box, Typography } from "@mui/material";
import { Dashboard } from "@mui/icons-material/";

const SideNav = styled(Box)({
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  boxShadow: "0 0 15px rgba(0,0,0,0.75)",
  clipPath: "inset(0px -15px 0px 0px)",
  padding: "36px 0",
  borderRadius: "0px 10px",
  display: "flex",
  flexDirection: "column",
  gap: '10px',
  color: "#27374D",
  fontSize: "20px",
  fontWeight: 500,
  background: '#fff',
  "& .MuiBox-root.main": {
    backgroundColor: "#DDE6ED",
    color: "#526D82",
  },
});
const Items = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "10px 48px",
  cursor: 'pointer',
  ':hover' : {
    backgroundColor: "#9DB2BF",
  }
});
const Title = styled(Typography)({
  fontSize: "24px",
  fontWeight: "600",
});

function SideNavbar() {
  return (
    <SideNav>
      <Items className="main">
        <Dashboard fontSize="medium" />
        <Title>Dashboard</Title>
      </Items>

      <Items>Bitcoin</Items>
      <Items>Ethereum</Items>
      <Items>DodgeCoin</Items>
    </SideNav>
  );
}

export default SideNavbar;
