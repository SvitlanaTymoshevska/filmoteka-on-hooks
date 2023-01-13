import styled from "styled-components";
import { theme } from "constans/theme";

import mobileBGI from "components/Header/images/header-background-home-mobile.jpg";
import mobileBGI2x from "components/Header/images/header-background-home-mobile@2x.jpg";
import tabletBGI from "components/Header/images/header-background-home-tablet.jpg";
import tabletBGI2x from "components/Header/images/header-background-home-tablet@2x.jpg";
import desktopBGI from "components/Header/images/header-background-home-desktop.jpg";
import desktopBGI2x from "components/Header/images/header-background-home-desktop@2x.jpg";

// Header
export const Wrapper = styled.header`
    background-color: ${theme.colors.backgroundHeader};
    opacity: 0.9;
    background-position: center;
    background-size: cover;
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
        url(${mobileBGI});

    @media (min-device-pixel-ratio: 2),
    (min-resolution: 2dppx),
    (min-resolution: 192dpi) {
        background-image: 
            linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
            url(${mobileBGI2x});
    }

    @media screen and (min-width: 768px) {
        background-image:
            linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
            url(${tabletBGI});

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 2dppx),
        (min-resolution: 192dpi) {
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
                url(${tabletBGI2x});
        }
    }

    @media screen and (min-width: 1280px) {
        background-image: 
            linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
            url(${desktopBGI});

        @media (min-device-pixel-ratio: 2),
        (min-resolution: 2dppx),
        (min-resolution: 192dpi) {
            background-image: 
                linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
                url(${desktopBGI2x});
        }
    }
`;

export const Container = styled.div`
    max-width: 320px;
    height: 230px;
    margin: 0 auto;
    padding: 40px 20px 0px 20px;
    color: ${theme.colors.main};

    @media screen and (min-width: 768px) {
        max-width: 768px;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1280px;
    }

    @media screen and (min-width: 768px) {
        padding: 45px 32px 0px 32px;
        height: 216px;
    }
`;

export const Form = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 54px auto 0px;

    @media screen and (min-width: 768px) {
      max-width: 336px;
      margin-top: 40px;
    }

    @media screen and (min-width: 768px) {
      max-width: 394px;
    }
`;

export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    color: ${theme.colors.main};

    font-weight: 400;
    font-size: 14px;
    line-height: 1.142;

    border: 0;
    border-bottom: 0.5px solid ${theme.colors.main};
`;

export const Clean = styled.button`
    position: absolute;
    right: 16px;
    padding: 8px;
    background-color: transparent;
    color: ${theme.colors.Hover};

    transition: color ${theme.transition.duration} linear;

    &:hover,
    &:focus {
      color: ${theme.colors.main};
    }
`;

export const Submit = styled.button`
    position: absolute;
    right: -8px;
    padding: 8px;
    background-color: transparent;
    color: ${theme.colors.main};

    transition: color ${theme.transition.duration} linear;

    &:hover,
    &:focus {
      color: ${theme.colors.Hover};
    }
`;

export const Message = styled.p`
    display: none; 
    text-align: center;
    margin-top: 16px;
    color: ${theme.colors.warning};
    font-weight: 400;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      margin-top: 20px;
    }
`;

// Navigation
export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;.

        
    color: ${theme.colors.main};
    text-decoration: none;
    transition: color 0.25 linear;

    &:hover,
    &:focus {
        color: ${theme.colors.Hover};
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