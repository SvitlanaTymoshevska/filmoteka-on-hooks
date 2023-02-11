import styled from "styled-components";
import { theme } from "constants/theme";

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

export const Message = styled.p`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translate(-50%,-50%);
  display: block; 
  text-align: center;
  
  color: ${theme.colors.warning};
  font-weight: 400;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    top: -48px;
  }
`;

export const GalleryTitle = styled.h2`
  display: none;
`;

export const Gallery = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 16px;
  }
`;
