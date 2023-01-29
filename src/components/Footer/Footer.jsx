import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Wrapper, Container, Text, Text1, Heart, Button, ScrollButton, ScrollIcon } from "components/Footer/Footer.Styled";

export const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };
    
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            <Outlet />
            <Wrapper>
                <Container>
                    <Text>
                        &#169; 2023 | All Rights Reserved | 
                    </Text>
                    <Text>
                        <Text1>&#169; 2023 | All Rights Reserved |&#160;</Text1>Developed with 
                    </Text>

                    <Heart />

                    <Text>
                        by&#160;
                    </Text>

                    <Button type="button">
                        Svitlana Tymoshevska
                    </Button>

                    {isVisible &&
                        <ScrollButton onClick={scrollToTop}>
                            <ScrollIcon />
                        </ScrollButton>}
                </Container>
            </Wrapper>  
        </>

    );
};