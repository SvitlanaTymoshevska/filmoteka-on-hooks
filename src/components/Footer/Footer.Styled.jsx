import styled from "styled-components";
import { ImHeart } from "react-icons/im";
import { theme } from "constants/theme";

export const Wrapper = styled.footer`
    width: 100%;
    height: 100px;

    background-color: ${theme.colors.footerBackground};
    font-weight: 400;
    font-size: 14px;
    color: ${theme.colors.footerText};

    @media screen and (min-width: 768px) {
        font-size: 16px;
        height: 79px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 236px;
    padding: 30px 0px;

    @media screen and (min-width: 768px) {
        max-width: 100%;
    }
`;

export const Text = styled.p`
    &:first-child {
        display: block;
        margin-bottom: 10px;

        @media screen and (min-width: 768px) {
            display: none;
        }
    }
`;

export const Text1 = styled.span`
    display: none;

    @media screen and (min-width: 768px) {
        display: inline;
    }
`;

export const Heart = styled(ImHeart)`
    width: 14px;
    height: 14px;
    margin: 0 10px;
    color: ${theme.colors.activeButton};
`;

export const Button = styled.button`
    display: inline;
    font-family: inherit;
    font-size: 14px;
    line-height: 1.15;
    text-decoration-line: underline;  
`;