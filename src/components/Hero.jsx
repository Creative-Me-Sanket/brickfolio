import { Box, Button, Container, Divider, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import backgroundImage from '../assets/hero.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

  const heroSectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    height: '100vh',
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
  };

  const navbarStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  };

  return (
    <Box style={heroSectionStyle}>
      <Container>
        <Box style={navbarStyle}>
          <Navbar />
        </Box>
      </Container>

      <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <Typography
            variant="h1"
            component="div"
            color="#fff" 
          >
            BRICKFOLIO - A        
            <Typography
            variant="h1"
            component="span"
            color="#ff5821"  
          > LOCAL</Typography>

            <Typography
            variant="h1"
            component="span"
            color="#fff"  
          >&nbsp;EXPERT</Typography>
          </Typography>
          <Divider sx={{ width: '100%', marginY: '10px', backgroundColor:"#fff", height:"0.25em"}} />
          <Button color='secondary'  endIcon={<ArrowForwardIcon />} onClick={()=>navigate("/assignment")}>View Assignment</Button>
        </Box>
    </Box>
  );
};

export default Hero;
