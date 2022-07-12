import { Link } from "react-router-dom";
import colors from "./colors";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  padding: 10px 0px;
  color: ${colors.white};
  text-decoration: none;
  font-size: 24px;
  text-align: center;
`;