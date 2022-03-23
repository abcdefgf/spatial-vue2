import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";



function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>

    </Routes>
  );
}

export default App;
