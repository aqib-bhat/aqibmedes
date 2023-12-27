import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

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

export default function StickyFooter() {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'grey'
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 1,
            mt: 'auto',
          }}
        >
          <Container sx={{
            width: {
                xs: 500, // 0
                sm: 850, // 600
                md: 920, // 900
                lg: 935, // 1200
                xl: 950, // 1536
            },
            bgcolor: 'background.paper'
          }}>
            <Typography variant="body1">
              This website is hosted on GitHub pages, and<br/>
              sourced from <Link href='https://github.com/aqib-bhat/aqibmedes' target="_blank" rel="noopener" underline="hover">my GitHub repository named 'aqibmedes'</Link>.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
  );
}