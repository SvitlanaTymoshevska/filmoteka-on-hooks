import { useState, Suspense } from "react";
import { Outlet, useSearchParams } from "react-router-dom";

import { Navigation } from "components/Navigation/Navigation";
import { Audio } from 'react-loader-spinner';
import { theme } from "constants/theme";
import { Wrapper, Container } from "components/LibraryHeader/LibraryHeader.styled";

export const LibraryHeader = () => {

    return (
        <>
            <Wrapper>
                <Container>
                    <Navigation />
                </Container>      
            </Wrapper>
            <Suspense
                fallback={
                    <Audio
                        height="100"
                        width="100"
                        color={theme.colors.accent}
                        ariaLabel="audio-loading"
                        wrapperStyle={{"justifyContent":"center"}}
                        visible={true}
                    />}>
                <Outlet />
            </Suspense>
        </>
    );
};