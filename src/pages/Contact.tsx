import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Item } from "../components/Item";

export default function Contact() {
  return (
    <div>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
        Contact Me
      </Typography>
      <main>
        <Stack spacing={2} sx={{ margin: 2 }}>
          <Item>
            <Typography variant="h5" gutterBottom>
              <Link
                href="https://www.linkedin.com/in/aqibbhat"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                My LinkedIn profile
              </Link>
            </Typography>
          </Item>
          <Item>
            <Typography variant="h5" gutterBottom>
              <strong>Email and mobile number:</strong> Shared on request
              through LinkedIn.
            </Typography>
          </Item>
          <Item>
            <Typography variant="h5" gutterBottom>
              <Link
                href="https://aqibbhat.wordpress.com/contact/"
                target="_blank"
                rel="noopener"
                underline="hover"
              >
                My blog's Contact page
              </Link>
            </Typography>
          </Item>
        </Stack>
      </main>
    </div>
  );
}
