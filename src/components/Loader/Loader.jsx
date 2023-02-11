import { Audio } from 'react-loader-spinner';
import { theme } from "constants/theme";
import { Wrapper } from "components/Loader/Loader.Styled";

export const Loader = () => { 
    return (
        <Wrapper>
            <Audio
                height="100"
                width="100"
                color={theme.colors.accent}
                ariaLabel="audio-loading"
                wrapperStyle={{"justifyContent":"center"}}
                visible={true}
            />
        </Wrapper>
    );
};