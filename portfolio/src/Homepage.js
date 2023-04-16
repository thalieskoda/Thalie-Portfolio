import styled from "styled-components";
import { motion } from "framer-motion";
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
          <ContainerIcon>
            <Icon>
              <FiGithub />
            </Icon>
            <Icon>
              <FiLinkedin />
            </Icon>
            <Icon>
              <FiInstagram />
            </Icon>
            <Icon>
              <FiMail />
            </Icon>
          </ContainerIcon>
        </Icons>

        <MotionImg
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          src={profilePicture}
          alt="profile picture"
        />
      </Container>
    </Wrapper>
  );
};

const MotionImg = motion.custom(styled.img)`
  border-radius: 10%;
  width: 500px;
  height: 700px;
  object-fit: none;
  object-position: 50% 25%;
  filter: grayscale(100%);
`;

const Icon = styled.span`
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
  height: 90vh;
  align-items: center;
`;

export default Homepage;
