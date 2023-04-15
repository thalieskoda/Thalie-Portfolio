import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import Footer
 from "./Footer";
const App = ()=>  {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="" element={<h1>404: Oops!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
