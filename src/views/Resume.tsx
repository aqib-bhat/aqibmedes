import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Link, Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Resume() {  
    return (
      <div>
        <h2>Resume</h2>
        <main>
          <p>
            <Link href="https://drive.google.com/file/d/1RrRZMGCUz-WRt7RiErpvCS845IYPx3fE/view?usp=sharing" target="_blank" rel="noopener" underline="hover">
              Résumé PDF available on GoogleDrive
            </Link><br/>
            Curriculum Vitae (CV) with detailed work history is available on request.
          </p>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Item>Breif intro</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Location and Contact</Item>
              </Grid>
              <Grid item xs={8}>
                <Item>Experience</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Skills</Item>
              </Grid>
              <Grid item xs={12}>
                <Item>Education</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Certifications</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Languages</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>Test Scores</Item>
              </Grid>
            </Grid>
          </Box>
        </main>
      </div>
    );
};
