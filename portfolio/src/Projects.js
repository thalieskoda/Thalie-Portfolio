import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import homefeed from "./images/Homefeed.png";
import future from "./images/future-fit.png"
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
const Projects = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });

  const variants = {
    hiddenLeft: { x: -600 },
    hiddenRight: { x: 600 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <>
      <h1>Projects</h1>
      <AnimatePresence>
      <Wrapper key={1}>
        <Container
          ref={ref1}
          initial={{ x: 0, opacity: 0 }}
          animate={inView1 ? "visible" : "hiddenLeft"}
          variants={variants}
          transition={{ duration: 0.5 }}
          exit="exit"
          
        >
          <Img src={homefeed} alt="Homefeed project" />
          <InfoContainer>
            <Title>Food tracker</Title>
            <Description>
              allows you to search for restaurants in any area by inputting the
              address, city or country. You can save your favorite restaurants
              in your profile and leave reviews for the places you've visited to
              remember your experience for future reference.
            </Description>
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
              <p>Link to GitHub repository</p>
            </LinkToRepo>
          </InfoContainer>
        </Container>
      </Wrapper>
      <Wrapper key={2}>
        <Container
          ref={ref2}
          initial={{ x: 0, opacity: 0 }}
          animate={inView2 ? "visible" : "hiddenLeft"}
          variants={variants}
          transition={{ duration: 0.5 }}
          exit="exit"

        >
          <Img src={future} alt="Futur-Fit" />
          <InfoContainer>
            <Title>Future-fit</Title>
            <Description>
             Simple E-commerce website
            </Description>
            <Span>
              <p>React</p>
              <p>MongoDb</p>
            </Span>
            <LinkToRepo
              href="https://github.com/thalieskoda/Food-tracker"
              target="_blank"
            >
              <FiGithub />
              <p>Link to GitHub repository</p>
            </LinkToRepo>
          </InfoContainer>
        </Container>
      </Wrapper>
      </AnimatePresence>
    </>
  );
};

const Description =styled.p`
font-weight:100;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 0 0 30px;
`;
const Img = styled.img`
  height: 50vh;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`;
const Span = styled.span`
  display: grid;
  justify-content:space-around;
  grid-template-columns: auto auto;
  font-style: italic;
  margin: 40px 0 0 0;

`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  height: 70vh;
  border: 1px solid black;
  padding: 30px;
  background: linear-gradient(-100deg, rgba(154, 154, 154, 0.5), rgba(192, 193, 191, 0.5), rgba(240, 240, 240, 0.5), rgba(255, 255, 255, 0.5));
  color: white;
  width:80vw;
  align-items:center;
  border-radius:10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

`;
const LinkToRepo = styled.a`
  color: white;
  text-decoration: none;
  margin: 40px 0 0 0;
  text-align:center;
  font-weight:600;
  display:flex;
  justify-content:space-around;
`;
const Title = styled.h1``;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
export default Projects;
