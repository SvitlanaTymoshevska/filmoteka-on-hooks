import TravoltaGif from "components/EmptyLibrary/images/JohnTravolta.gif";
import { Wrapper, GalleryTitle, Container } from "components/EmptyLibrary/EmptyLibrary.styled";

export const EmptyLibrary = () => {
  return (
    <Wrapper>
      <GalleryTitle>Library</GalleryTitle>
            <Container>
                <img src={TravoltaGif} alt="Gif with a confused Travolta" />    
            </Container>
    </Wrapper>
  );
};
