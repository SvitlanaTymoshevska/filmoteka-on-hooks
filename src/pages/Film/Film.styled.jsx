import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  flex-grow: 1;
`;

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 20px 20px 40px;
  line-height: 1.35;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 60px 32px 60px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const NavWrapper = styled.div`
    padding: 20px;  
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%); 
`;

export const Item = styled.li`
    margin-bottom: 8px; 
`;

export const StyledLink = styled(Link)`
    color: black; 

    &:hover {
        font-weight: bold;
    }
`;