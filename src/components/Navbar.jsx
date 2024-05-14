import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png";
import { AppBar, Toolbar, Container, Box } from "@mui/material";
import "./CSS/Navbar.css";

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
  return (
    <AppBar position="fixed" style={{backgroundColor: isHome ? "transparent" : "gray"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:"flex", justifyContent:"space-between"}}>
          <Box maxHeight="100px" maxWidth="200px">
            <img src={logo} height="100%" width="100%" alt="Logo" />
          </Box>

          <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"2em", cursor:"pointer"}}>
            <NavLink className="navbar-item" exact to='/' style={{background:"#f16745"}}>HOME</NavLink>
            <NavLink className="navbar-item" to='https://www.brickfolio.in/residential-properties'>RESIDENTIAL</NavLink>
            <NavLink className="navbar-item" to="https://www.brickfolio.in/commercial-properties">COMMERCIAL</NavLink>
            <NavLink className="navbar-item" to="https://www.brickfolio.in/investment-properties">INVESTMENTS</NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
