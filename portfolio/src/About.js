import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

import picture1 from "./images/IMG_9482.jpg";
import picture2 from "./images/IMG_3362.jpg";
import picture3 from "./images/IMG_0770.JPG";

const About = () => {
  const { scrollYProgress } = useScroll();
  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });

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
    <Wrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>About me</h1>
      <Container
        ref={ref1}
        initial={{ x: -600, opacity: 0 }}
        animate={inView1 ? "visible" : "hiddenLeft"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <P>
          Hey there! I'm Thalie and I'm thrilled to tell you a little bit about
          myself. I graduated with a Bachelor's degree in Business
          Administration back in 2021, and ever since then, I've been on a
          journey of self-discovery and exploration.
        </P>
        <Img src={picture1} alt="Business picture" />
      </Container>
      <Container
        ref={ref2}
        initial={{ x: 600, opacity: 0 }}
        animate={inView2 ? "visible" : "hiddenRight"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Img src={picture2} alt="At Lake Louise" />
        <P>
          {" "}
          Sports have always been a big part of my life, particularly hockey and
          soccer. I've been lucky enough to serve as captain or assistant for my
          teams on multiple occasions, and these experiences have taught me so
          much about teamwork, communication, and dedication. They've all played
          a crucial role in shaping who I am today.
        </P>
      </Container>
      <Container
        ref={ref3}
        initial={{ x: 600, opacity: 0 }}
        animate={inView3 ? "visible" : "hiddenRight"}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <P>
          {" "}
          As I started working, I realized that my true passion lay in the tech
          industry. I love learning and growing, so I decided to pivot from
          customer service to website design. I find designing websites
          endlessly satisfying, and I'm always up for a good challenge. Even
          though I switched careers, the communication and problem-solving
          skills I developed in customer service have been invaluable to me as a
          designer. I'm always eager to take on new tasks and go above and
          beyond to deliver the best results. Thanks for taking the time to get
          to know me, and I'm excited for the chance to work with you!
        </P>
        <Img src={picture3} alt="with my cat Naïla" />
      </Container>
    </Wrapper>
  );
};

const Img = styled.img`
  height: 30vh;
  border-radius: 10%;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0);
    transition: 1s;
  }
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const P = styled.p`
  border: 1px black solid;
  border-radius: 10px;
  align-items: center;
  width: 50vw;
  padding: 10vh;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
const Wrapper = styled.div`
  overflow-x: hidden;
`;
export default About;
