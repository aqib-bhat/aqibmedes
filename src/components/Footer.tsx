import Box from "@mui/material/Box";
import { Container, Link, Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2">
      {"Copyright ©"}
      <Link href="https://aqib-bhat.github.io/aqibmedes/" underline="hover">
        Aqib Niaz Bhat
      </Link>
      {"2023 - "}
      {new Date().getFullYear()}
      {"."}
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
        p: 6,
        color: "text.secondary",
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Copyright />
        <Typography variant="body2">
          Hosted on:{" "}
          <Link
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            GitHub Pages
          </Link>
          <br />
          💾 Source code:
          <Link
            href="https://github.com/aqib-bhat/aqibmedes"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            my GitHub repository named 'aqibmedes'
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
