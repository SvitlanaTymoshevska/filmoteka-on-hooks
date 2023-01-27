import styled from "styled-components";
import { theme } from "constants/theme";

export const Container = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        margin-bottom: 60px;
    }
`;

export const Item = styled.li`
    min-height: 40px;
    min-width: 40px;

    &:not(:last-child) {
        margin-right: 6px;
        
        @media screen and (min-width: 768px) {
            margin-right: 8px;
        }
    }
`;

export const Arrow = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    min-width: 40px;
    border-radius: 5px;
    background-color: #f7f7f7;
    
    &:hover,
    &:focus {
        cursor: pointer;
        color: ${theme.colors.accent};
    }
`;

export const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 5px;

    text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    background-color: ${({ current }) => current ? theme.colors.accent : "transparent"};
    color: ${({ current }) => current ? theme.colors.main : "inherit"};

    &:hover,
    &:focus {
        cursor: pointer;
        color: ${theme.colors.accent};
    }
`;

export const Dots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 5px;
`;