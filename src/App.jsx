import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Themes from './components/Themes/Themes';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/home/Home';
import Particles from './components/ParticlesComponent';
import { useState } from 'react';
import { getStorageColor } from './components/Themes/Themes';


function App() {
  const [particleColor, setParticleColor] = useState(getStorageColor());
  const [linksColor, setLinksColor] = useState(getStorageColor());

  const handleColorChange = (color) => {
    setParticleColor(color);
    setLinksColor(color);
  }
  console.log('Particle Color (App):', particleColor);
  console.log('Links Color (App):', linksColor);

  return (
    <BrowserRouter>
      <Navbar />
      <Themes onColorChange={handleColorChange} /> {/* Pass the updated color to Themes */}
      
      <Routes>
        <Route path='/a/' element={<Home />} />
        <Route path='/a/about' element={<About />} /> 
        <Route path='/a/portfolio' element={<Portfolio />} /> 
        <Route path='/a/contact' element={<Contact />} />
      </Routes>
      <Particles particleColor={particleColor} linksColor={linksColor} /> {/* Pass the updated color to ParticlesComponent */}
    </BrowserRouter>
  );
}

export default App;
