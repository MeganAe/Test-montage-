import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Generator from './pages/Generator';
import About from './pages/About';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Toaster position="top-right" />
        <div className="flex">
          <Sidebar darkMode={darkMode} />
          <div className="flex-1">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Generator />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />  
              </Routes>
            </main>
            <Footer darkMode={darkMode} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
