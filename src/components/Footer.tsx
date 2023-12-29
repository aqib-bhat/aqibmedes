import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Link, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link href="https://aqib-bhat.github.io/aqibmedes/" underline="hover">
        Aqib Niaz Bhat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6
        }}
        component="footer"
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            This website is hosted on GitHub Pages.<br/>
            It is sourced from <Link href='https://github.com/aqib-bhat/aqibmedes' target="_blank" rel="noopener" underline="hover">my GitHub repository named 'aqibmedes'</Link>.
          </Typography>
          <Copyright />
        </Container>
      </Box>
  );
}