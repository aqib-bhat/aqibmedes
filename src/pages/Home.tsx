import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { StyledLink } from "../components/StyledLink";

export default function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={8} lg={10}>
            <Typography variant="subtitle1">Howdy! I am Aqib.</Typography>
            <Typography variant="subtitle1">
              I am a software engineer by passion and profession.
            </Typography>
            <Typography variant="subtitle1">
              To know more about me, check the{" "}
              <StyledLink to="/about">About</StyledLink> page.
            </Typography>
            <Typography variant="subtitle1">
              For professional information, check the{" "}
              <StyledLink to="/resume">Resume</StyledLink> page.
            </Typography>
            <Typography variant="subtitle1">
              To get in touch, check the{" "}
              <StyledLink to="/contact">Contact</StyledLink> page.
            </Typography>
          </Grid>
          <Grid item sm={12} md={4} lg={2}>
            <img src="/aqibmedes/Aqib_DP.jpeg" className="App-logo" alt="Aqib" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
