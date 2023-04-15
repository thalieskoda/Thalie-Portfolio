import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import profilePicture from "./images/IMG_1506.jpg";

const Homepage = () => {
  return (
    <Wrapper>
      <Container>
        <Icons>

        <Info>
          <h1>Thalie Skoda</h1>
          <p>Junior full stack web developer</p>
        </Info>
        <Icon>
          <Span>{FiGithub}FiGithub</Span>
          <Span>{FiLinkedin}FiLinkedin</Span>
          <Span>{FiInstagram}FiInstagram</Span>
          <Span>{FiMail}FiMail</Span>
          </Icon>
        </Icons>

        <Img src={profilePicture} alt="profile picture" />
      </Container>
    </Wrapper>
  );
};

const Span = styled.span`
padding:30px;
`

const Icon = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
`
const Icons = styled.div`
display:flex;
flex-direction:column;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100vh;
`;
const Img = styled.img`
  border-radius: 10%;
  width: 500px;
  height: 500px;
  object-fit: none;
  object-position: 50% 30%;
  filter: grayscale(100%);
`;
export default Homepage;
