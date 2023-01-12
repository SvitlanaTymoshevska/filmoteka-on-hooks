import styled from "styled-components";
import { theme } from "constans/theme";

import mobileBGI from "components/Header/images/header-background-home-mobile.jpg";
import mobileBGI2x from "components/Header/images/header-background-home-mobile@2x.jpg";
import tabletBGI from "components/Header/images/header-background-home-tablet.jpg";
import tabletBGI2x from "components/Header/images/header-background-home-tablet@2x.jpg";
import desktopBGI from "components/Header/images/header-background-home-desktop.jpg";
import desktopBGI2x from "components/Header/images/header-background-home-desktop@2x.jpg";

export const Wrapper = styled.header`
    background-color: ${theme.colors.backgroundHeader};
    opacity: 0.9;
`;

export const Container = styled.div`
    padding: 40px 20px 0px 20px;
    height: 230px;
    background-position: center;
    background-size: cover;
    color: ${theme.colors.main};

    @media screen and (min-width: 768px) {
        padding: 45px 32px 0px 32px;
        height: 216px;
    }

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

export const Submit = styled.button`
    position: absolute;
    right: -15px;
    padding: 15px;
    background-color: transparent;
    color: ${theme.colors.main};

    transition: color ${theme.transition.duration} linear;

    &:hover,
    &:focus {
      color: #999999;
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