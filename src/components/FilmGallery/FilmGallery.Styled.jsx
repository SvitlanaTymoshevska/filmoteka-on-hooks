import styled from "styled-components";
import { theme } from "constants/theme";

// Gallery
export const Wrapper = styled.section`
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

// Card
export const Card = styled.li`
  transition: box-shadow ${theme.transition.durationFunction};
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 32px) / 3);
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12),
      0px 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 398px;
  border-radius: 5px;
  margin-bottom: 10px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 455px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
    height: 574px;
  }
`;

export const Plug = styled.div`
  height: 398px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.backgroundHeader};

  @media screen and (min-width: 768px) {
    height: 455px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 12px;
    height: 574px;
  }
`;

export const Info = styled.div`
  padding: 0px 5px 5px;
`;

export const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  line-height: 1.35;
  font-size: 12px;
  font-weight: 500;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Genres = styled.p`
color: ${theme.colors.filmsDescription};
`;