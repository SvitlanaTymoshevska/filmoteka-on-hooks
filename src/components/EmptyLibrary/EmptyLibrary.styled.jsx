import styled from "styled-components";

export const Wrapper = styled.section`
    flex-grow: 1;
`;

export const Container = styled.div`
    max-width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) {
        max-width: 768px;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1280px;
    }
`;

export const GalleryTitle = styled.h2`
    display: none;    
`;
