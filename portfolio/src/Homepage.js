import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
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
              <Icon
                initial={{ x: -400, rotate: -180 }}
                animate={{ x: 0, rotate: 0 }}
                drag
                dragConstraints={{ top: 100, left: 100, right: 100, bottom: 100 }}
                whileDrag={{
                  scale: 1.2,
                  zIndex: 999,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <A href="https://github.com/thalieskoda" target="_blank">
                  <FiGithub />
                </A>
              </Icon>
              <Icon
                initial={{ x: -400, rotate: -180 }}
                animate={{ x: 0, rotate: 0 }}
                drag
                dragConstraints={{ top: 10, left: 10, right: 100, bottom: 100 }}
                whileDrag={{
                  scale: 1.2,
                  zIndex: 999,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <A
                  href="https://www.linkedin.com/in/thalie-skoda-440451207/"
                  target="_blank"
                >
                  <FiLinkedin />
                </A>
              </Icon>
              <Icon
                initial={{ x: -400, rotate: -180 }}
                animate={{ x: 0, rotate: 0 }}
                drag
                dragConstraints={{ top: 10, left: 10, right: 100, bottom: 100 }}
                whileDrag={{
                  scale: 1.2,
                  zIndex: 999,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <A
                  href="https://www.instagram.com/thalieskoda/"
                  target="_blank"
                >
                  <FiInstagram />
                </A>
              </Icon>
              <Icon
                initial={{ x: -400, rotate: -180 }}
                animate={{ x: 0, rotate: 0 }}
                drag
                dragConstraints={{ top: 10, left: 10, right: 100, bottom: 100 }}
                whileDrag={{
                  scale: 1.2,
                  zIndex: 999,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <A href="mailto:thalieskoda@hotmail.com">
                  <FiMail />
                </A>
              </Icon>
            </ContainerIcon>
          </Icons>

          <Img
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            src={profilePicture}
            alt="profile picture"
          />
        </Container>
      </Wrapper>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

const A = styled.a`
  color: black;
  text-decoration: none;
`;

const Img = styled(motion.img)`
  border-radius: 10%;
  width: 500px;
  height: 700px;
  object-fit: none;
  object-position: 50% 25%;
  filter: grayscale(100%);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    filter: grayscale(0);
    transition: 1s;
  }
`;

const Icon = styled(motion.div)`
  color: black;
  margin: 30px;
  padding: 10px;
  font-size: 25px;
  transition: transform 0.2s;
  background-color: rgb(221, 238, 237);
  border-radius: 10%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
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
  font-family: "Poppins", sans-serif;
`;

export default Homepage;
