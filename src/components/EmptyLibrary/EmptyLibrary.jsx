import TravoltaGif from "components/EmptyLibrary/images/JohnTravolta.gif";
import { Wrapper, GalleryTitle, Container, Text} from "components/EmptyLibrary/EmptyLibrary.styled";

export const EmptyLibrary = () => {
  return (
    <Wrapper>
      <GalleryTitle>Library</GalleryTitle>
      <Text>Oops... There is no movies in your library yet...</Text>
      <Container>
        <img src={TravoltaGif} alt="Gif with a confused Travolta" />  
      </Container>

    </Wrapper>
  );
};
