import styled from "styled-components"
import { FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {

    return(
        <Wrapper>
            <h1>Contact</h1>
            <Container>
            <FiPhone/>
            <p>438-403-4904</p>
            </Container>
            <Container href="mailto:thalieskoda@hotmail.com">
            <FiMail/>
            <p>thalieskoda@hotmail.com</p>
            </Container>
        </Wrapper>
    )
}

const Container = styled.a`
display:flex;
justify-content:space-evenly;
align-items:center;
width:20vw;
text-decoration:none;
color:black;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;  
justify-content:space-evenly;
height:60vh;
align-items:center;
`
export default Contact