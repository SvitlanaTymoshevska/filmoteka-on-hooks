import { Outlet } from "react-router-dom";
import { Wrapper, Container, Text, Text1, Heart, Button } from "components/Footer/Footer.Styled";

export const Footer = () => {
    return (
        <>
            <Outlet />
            <Wrapper>
                <Container>
                    <Text>
                        &#169; 2022 | All Rights Reserved | 
                    </Text>
                    <Text>
                        <Text1>&#169; 2022 | All Rights Reserved |&#160;</Text1>Developed with 
                    </Text>

                    <Heart />

                    <Text>
                        by&#160;
                    </Text>

                    <Button type="button">
                        Svitlana Tymoshevska
                    </Button>

                    {/* <!--Scroll-btn-->
                    <a class="scroll-btn" href="#header" style="display: none">
                        <svg class="scroll-btn__svg" width="14" height="14">
                            <use href="./images/sprite.svg#icon-up"></use>
                        </svg>
                    </a> */}
                </Container>
            </Wrapper>  
        </>

    );
};