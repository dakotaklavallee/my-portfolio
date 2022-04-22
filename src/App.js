import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './Components/Landings/HomePage';
import ProjectPage from './Components/Landings/ProjectPage';
import NavBar from './Components/Constants/NavBar';
import Footer from './Components/Constants/Footer';
import AboutMe from './Components/Landings/AboutMe';
import DklLogo from './Components/Landings/DklLogo';

function App() {

  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();

  const dakotaHandler = (e) => {
    e.preventDefault();
    navigate("/aboutme");
    setShowLogo(true);
    setTimeout(() => {
      setShowLogo(false)
    }, 3000)
  }

  return (
    <>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<HomePage dakotaHandler={dakotaHandler} />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/aboutme" element={showLogo ? <DklLogo /> : <AboutMe />} />
    </Routes>
    {!showLogo? <Footer /> : null}
    </>
  );
}

export default App;
