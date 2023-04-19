import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import homefeed from "./images/Homefeed.png";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <Wrapper>
        <Container>
          <Img src={homefeed} alt="Homefeed project" />
          <InfoContainer>
            <Title>Food tracker</Title>
            <Span>
              <p>React</p>
              <p>Auth0</p>
              <p>Google Maps Api</p>
              <p>MongoDb</p>
            </Span>
            <LinkToRepo
              href="https://github.com/thalieskoda/Food-tracker"
              target="_blank"
            >
              <FiGithub />
              Link to GitHub repository
            </LinkToRepo>
          </InfoContainer>
        </Container>
      </Wrapper>
    </>
  );
};
const InfoContainer = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:space-around;
 margin: 0 0 0 30px;
`;
const Img = styled.img`
  height:50vh;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

`;
const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
font-style:italic;
`;

const Container = styled.div`
 display: flex;
  flex-direction: row;
height:50vh;
  `;
const LinkToRepo = styled.a`
  color: black;
  text-decoration: none;
`;
const Title = styled.h1``;
const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
`;
export default Projects;
