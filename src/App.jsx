// App.jsx
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import CustomCursor from "./Components/CustomCursor";

export default function App() {
  return (
    <ParallaxProvider>
      <CustomCursor />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}
