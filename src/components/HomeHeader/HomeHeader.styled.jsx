import styled from "styled-components";
import { theme } from "constants/theme";

import mobileBGI from "components/HomeHeader/images/header-background-home-mobile.jpg";
import mobileBGI2x from "components/HomeHeader/images/header-background-home-mobile@2x.jpg";
import tabletBGI from "components/HomeHeader/images/header-background-home-tablet.jpg";
import tabletBGI2x from "components/HomeHeader/images/header-background-home-tablet@2x.jpg";
import desktopBGI from "components/HomeHeader/images/header-background-home-desktop.jpg";
import desktopBGI2x from "components/HomeHeader/images/header-background-home-desktop@2x.jpg";

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
    height: 22px;
    background-color: transparent;
    color: ${theme.colors.main};

    font-weight: 400;
    font-size: 14px;
    line-height: 1.142;

    border: 0;
    border-bottom: 0.5px solid ${theme.colors.main};
`;

export const CleanButton = styled.button`
    position: absolute;
    top: -8px;
    right: 16px;
    padding: 8px;
    background-color: transparent;
    color: ${theme.colors.hover};

    transition: color ${theme.transition.duration} linear;

    &:hover,
    &:focus {
      color: ${theme.colors.main};
    }
`;

export const SubmitButton = styled.button`
    position: absolute;
    top: -6px;
    right: -8px;
    padding: 8px;
    background-color: transparent;
    color: ${theme.colors.main};

    transition: color ${theme.transition.duration} linear;

    &:hover,
    &:focus {
      color: ${theme.colors.hover};
    }
`;
