import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link href="https://aqib-bhat.github.io/aqibmedes/" target="_blank" rel="noopener">
        Aqib's personal website
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
          minHeight: '65vh',
        }}
      >
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
                This website is hosted on GitHub pages,<br/>and sourced from <Link href='https://github.com/aqib-bhat/aqibmedes' target="_blank" rel="noopener">my GitHub repository named 'aqibmedes'</Link>.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
  );
}