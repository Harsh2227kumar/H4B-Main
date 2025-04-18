import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManinNav from './Components/MainNav';
import AnimatedCursor from 'react-animated-cursor';
import ClickEffect from './Components/ClickEffect';



import Hero from './Pages/Hero';
import Gallery from "./Pages/Gallery";
// import Prize from "./Pages/Prize"; 
import  Partners from "./Pages/Partners";
import Humans from './Pages/Humans';
import Faqs from './Pages/Faqs';
import Tracks from './Pages/Tracks';
// import Prizes from './pages/Prizes';
// import Schedule from './pages/Schedule';
// import Humans from './pages/Humans';
// import FAQs from './pages/FAQs';
// import Contact from './pages/Contact';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // This function will be passed to Sidebar to notify App of expansion state
  const handleSidebarExpand = (expanded) => {
    setSidebarExpanded(expanded);
  };

  return (
    <Router>
<AnimatedCursor
        innerSize={0}
        outerSize={0}
        showSystemCursor={true}
        customCursorSvg={
          <svg
            height="30"
            width="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="12,0 24,24 0,24"
              fill="transparent"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        }
      />

      {/* Click ripple effect */}
      <ClickEffect />

      <div className="flex bg-black min-h-screen">
        <ManinNav onExpandChange={handleSidebarExpand} />
        <main 
          className={`
            transition-all duration-300 
            ${sidebarExpanded ? 'ml-46' : 'ml-0'} 
            w-full relative overflow-x-hidden
          `}
        >
          {/* Transparent dot pattern background with improved opacity */}
          <div className="absolute inset-0 bg-black" style={{ 
          
      
        
          }}></div>
          
          {/* Semi-transparent overlay for depth */}
          <div className="absolute "></div>
          
          {/* Content wrapper */}
          <div className="relative z-10 w-full min-h-screen">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/partners" element={<Partners />} />
              {/* <Route path="/prize" element={<Prize />} /> */}
              <Route path="/humans" element={<Humans />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/tracks" element={<Tracks />} />


              {/* <Route path="/gallery" element={<Gallery />} />
              
              
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/humans" element={<Humans />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;