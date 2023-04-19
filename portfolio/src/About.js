import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import picture1 from "./images/IMG_9482.jpg";
import picture2 from "./images/IMG_3362.jpg";
import picture3 from "./images/IMG_0770.JPG";

const About = () => {
    const { scrollYProgress } = useScroll();
    const [ref1, inView1] = useInView({ threshold: 0.5 });
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });
  
    const variants = {
      hiddenLeft: { x: -300 },
      hiddenRight: { x: 300 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.3
        }
    }}
  return (
    <Wrapper  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}>
      <h1>About me</h1>
      <Container  ref={ref1}
        initial={inView1 ? "visible" : "hiddenLeft"}
        animate={inView1 ? "visible" : "hiddenLeft"}
        variants={variants}>
        <P>
          Hello! My name is Thalie and I am excited to share a bit about myself
          with you. I earned my Bachelor's degree in Administration of Business
          in 2021 and have since been on a journey of self-discovery and
          exploration.
        </P>
        <Img src={picture1} alt="Business picture" />
      </Container>
      <Container ref={ref2}
        initial={inView2 ? "visible" : "hiddenRight"}
        animate={inView2 ? "visible" : "hiddenRight"}
        variants={variants}>
        <Img src={picture2} alt="At Lake Louise" />
        <P>
          {" "}
          From a young age, I have been involved in sports, specifically hockey
          and soccer, and have been fortunate enough to lead my teams as captain
          or assistant on multiple occasions. This experience has taught me the
          importance of teamwork, communication, and dedication, all of which
          have been essential in shaping who I am today. As I entered the
          workforce, I quickly realized that my true passion lay elsewhere,
          specifically in the tech industry.
        </P>
      </Container>
      <Container ref={ref3}
        initial={inView3 ? "visible" : "hiddenRight"}
        animate={inView3 ? "visible" : "hiddenRight"}
        variants={variants}>
        <P>
          {" "}
          With an insatiable desire to learn and grow, I decided to pivot from
          my previous role in customer service to pursue a more fulfilling
          career in website design. The endless design possibilities and thrill
          of overcoming obstacles bring me immense satisfaction, and I am eager
          to continue developing my skills in this field. Despite my career
          shift, the skills I developed in customer service have been invaluable
          to my growth as a designer. Exceptional problem-solving and
          communication skills are essential to any successful team, and I am
          grateful for the experience I have gained in this area. I approach
          every task with enthusiasm and am always willing to go the extra mile
          to ensure the best possible results. Thank you for taking the time to
          learn a bit about me, and I look forward to the opportunity to
          collaborate with you!
        </P>
        <Img src={picture3} alt="with my cat Naïla" />
      </Container>
    </Wrapper>
  );
};

const Img = styled.img`
  height: 30vh;
  border-radius:10%;
`;
const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:center;
 margin:10px;
`;
const P = styled.p`
  border: 1px black solid;
  border-radius: 10px;
  align-items: center;
  width:50vw;
  padding:10vh;
  font-family: 'Poppins', sans-serif;
`;
const Wrapper = styled.div`
  height: 100vh;
`;
export default About;
