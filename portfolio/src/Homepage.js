import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import profilePicture from "./images/IMG_1506.jpg";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Homepage = () => {
  return (
    <>
    <Wrapper>
      <Container>
        <Icons>
          <Info>
            <h1>Thalie Skoda</h1>
            <p>Junior full stack web developer</p>
          </Info>
          <ContainerIcon>
            <Icon>
              <A href="https://github.com/thalieskoda" target="_blank">
                <FiGithub />
              </A>
            </Icon>
            <Icon>
              <A href="https://www.linkedin.com/in/thalie-skoda-440451207/" target="_blank">
                <FiLinkedin />
              </A>
            </Icon>
            <Icon>
              <A href="https://www.instagram.com/thalieskoda/" target="_blank">
                <FiInstagram />
              </A>
            </Icon>
            <Icon>
              <A href="mailto:thalieskoda@hotmail.com">
                <FiMail />
              </A>
            </Icon>
          </ContainerIcon>
        </Icons>

        <Img
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          src={profilePicture}
          alt="profile picture"
        />
      </Container>
    </Wrapper>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
};

const A = styled.a`
color:black;
text-decoration: none;
`

const Img = styled(motion.img)`
  border-radius: 10%;
  width: 500px;
  height: 700px;
  object-fit: none;
  object-position: 50% 25%;
  filter: grayscale(100%);
`;

const Icon = styled.div`
  color: black;
  margin: 30px;
  padding: 10px;
  font-size: 25px;
  transition: transform 0.2s;
  background-color: rgb(221, 238, 237);
  border-radius: 10%;
  box-shadow: 5px 5px 0px 0px rgb(232, 222, 219, 0.7);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);

    box-shadow: 6px 6px 0px 0px rgb(232, 222, 219, 0.7);
  }
`;
const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;

export default Homepage;
