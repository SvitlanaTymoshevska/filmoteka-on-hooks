import { Link } from "react-router-dom";
import { theme } from "constants/theme";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-block;
  margin: 20px 0 0 20px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${theme.colors.main};
  background-color: ${theme.colors.blurAccent};
  font-weight: 500;

  :hover {
     background-color: ${theme.colors.accent};
    
  }
`;