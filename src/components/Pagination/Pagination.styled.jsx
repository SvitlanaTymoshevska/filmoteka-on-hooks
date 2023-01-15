import styled from "styled-components";
import { theme } from "constants/theme";

export const Container = styled.div`
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        margin-bottom: 60px;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;

    width: 100%;
`;

export const Item = styled.li`
    display: flex;

    justify-content: center;
    align-content: center;

    height: 40px;
    width: 40px;

    &:not(:last-child) {
        margin-right: 6px;
        
        @media screen and (min-width: 768px) {
            margin-right: 8px;
        }
    }
`;

export const Button = styled.a`
    display: block;

    cursor: pointer;
    text-align: center;
    padding: 13px;

    border-radius: 5px;

    font-weight: 500;
    line-height: 1.33;

    background-color: transparent;

    &:hover,
    &:focus {
        color: ${theme.colors.accent};
    }
`;

export const CurrentPage = styled.p`
    display: flex;

    justify-content: center;
    align-items: center;

    min-height: 40px;
    min-width: 40px;

    border-radius: 5px;

    background-color: ${theme.colors.accent};
    color: ${theme.colors.main};
`;

export const Dots = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    min-height: 40px;
    min-width: 40px;

    border-radius: 5px;
`;