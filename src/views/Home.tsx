import '../App.css';
import React from 'react';
import displayPic from "../assets/images/Aqib_DP.jpeg";
import { Box, Grid, Typography } from '@mui/material';
import { StyledRouterLink } from '../components/StyledRouterLink';

class Home extends React.Component {
    render() {
        return (
          <div>
          <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={8} lg={10}>
                <Typography variant="subtitle1">Howdy! I am Aqib.</Typography>
                <Typography variant="subtitle1">I am a software engineer by passion and profession.</Typography>
                <Typography variant="subtitle1">To know more about me check the <StyledRouterLink to="/about">About</StyledRouterLink> page.</Typography>
                <Typography variant="subtitle1">For professional information, check the <StyledRouterLink to="/resume">Resume</StyledRouterLink> page.</Typography>
                <Typography variant="subtitle1">To get in touch, check the <StyledRouterLink to="/resume">Contact</StyledRouterLink> page.</Typography>   
              </Grid>
              <Grid item sm={12} md={4} lg={2}>
                <img src={displayPic} className="App-logo" alt="Aqib" />
              </Grid>
            </Grid>
          </Box>
          </div>  
        );
    }
}

export default Home;