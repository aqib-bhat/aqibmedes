import Link from "next/link";
import { styled } from "@mui/material";

const StyledLink = styled('a')`
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

interface StyledNextLinkProps {
  to: string;
  children: React.ReactNode;
}

const StyledNextLink = ({ to, children }: StyledNextLinkProps) => {
  return (
    <Link href={to} passHref legacyBehavior>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export { StyledNextLink };
