import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const StyledRouterLink = styled(Link)`
  color: lightgreen;
  font-weight: bold;

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

export { StyledRouterLink };
