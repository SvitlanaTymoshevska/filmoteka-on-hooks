import styled from "styled-components";

export const Wrapper = styled.section`
    flex-grow: 1;
`;

export const GalleryTitle = styled.h2`
    display: none;    
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

export const Text = styled.p`
    text-align: center; 
    margin-top: 20px;  
    line-height: 1.35;
    font-size: 18px;
    font-weight: 500;

    @media screen and (min-width: 1280px) {
        font-size: 20px;
        line-height: 1.2;
    } 
`;