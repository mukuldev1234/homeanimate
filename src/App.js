import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedHomePage from './AnimatedHomePage';


const App = () => {
  return (
    
        <Router> 
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<AnimatedHomePage />} />
            

            {/* Fallback for unknown routes */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      
    
  );
};

export default App;

