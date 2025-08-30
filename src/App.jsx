// App.jsx
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import CustomCursor from "./Components/CustomCursor";
import Skills from './Layout/Skills';
import ContactUs from './Layout/ContactUs';

export default function App() {
  return (
    <ParallaxProvider>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}
