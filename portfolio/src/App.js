import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Homepage from "./Homepage";

const App = () => {
  return (
    <Wrapper>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="" element={<h1>404: Oops!</h1>} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
};

const gradientAnimation = keyframes`
  0% {
    //Set at 0% horizontally and 50% vertically
    background-position: 0% 50%;
  }
  50% {
    //Set at 100% horizontally and 50% vertically
    background-position: 100% 50%;
  }
  100% {
    //Set at 0% horizontally and 50% vertically
    background-position: 0% 50%;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #f9b3c6,
    #ffffff,
    #ffffe0,
    #b0e0e6);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  z-index:-1;
`;

export default App;
