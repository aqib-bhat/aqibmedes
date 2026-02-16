import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const StyledAnchor = styled(Link)`
  color: lightgreen;
  font-weight: bold;
  text-decoration: none;

  /* added & */
  &:visited {
    color: lightblue;
  }

  /* added & */
  &:hover {
    color: yellow;
    transition-duration: 0.3s;
  }
`;

interface StyledLinkProps {
  to: string;
  children: ReactNode;
}

const StyledLink = ({ to, children }: StyledLinkProps) => {
  return <StyledAnchor to={to}>{children}</StyledAnchor>;
};

export { StyledLink };
