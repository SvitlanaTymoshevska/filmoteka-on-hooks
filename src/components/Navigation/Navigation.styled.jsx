import styled from "styled-components";
import { theme } from "constants/theme";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    
    color: ${theme.colors.main};
    text-decoration: none;
    transition: color 0.25 linear;

    &:hover,
    &:focus {
        color: ${theme.colors.hover};
    }
`;

export const StyledNavLink = styled(NavLink)`
    position: relative;
    display: flex;
    align-items: center;

        
    color: ${theme.colors.main};
    text-decoration: none;
    transition: color 0.25 linear;

    &.active::after {
        position: absolute;
        top: 14px;
        width: 100%;
        height: 3px;
        background: ${theme.colors.warning};
        content: "";
    }

    &:hover,
    &:focus {
        color: ${theme.colors.hover};
    }
`;

export const SiteName = styled.h1`
    display: none;
    font-weight: 500;

    @media screen and (min-width: 768px) {
      display: block;
      margin-left: 8px;
      font-size: 30px;
    }

    @media screen and (min-width: 1280px) {
      margin-left: 10px;
    }
`;

export const NavList = styled.ul`
    display: flex;
    text-transform: uppercase;
`;

export const NavItem = styled.li`
    position: relative;
    font-size: 12px;
    line-height: 1.166;

    &:not(:last-child) {
      margin-right: 40px;
    }
`;