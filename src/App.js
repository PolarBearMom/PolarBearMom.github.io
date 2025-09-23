import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LangProvider } from './LangContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contributions from './pages/Contributions';
import CombatSystem from './pages/CombatSystem';
import InteractiveUI from './pages/InteractiveUI';
import Optimization from './pages/Optimization';
import ProblemSolving from './pages/ProblemSolving';
import Growth from './pages/Growth';
import Vision from './pages/Vision';

function App() {
  return (
    <LangProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contributions" element={<Contributions />} />
              <Route path="/combat-system" element={<CombatSystem />} />
              <Route path="/interactive-ui" element={<InteractiveUI />} />
              <Route path="/optimization" element={<Optimization />} />
              <Route path="/problem-solving" element={<ProblemSolving />} />
              <Route path="/growth" element={<Growth />} />
              <Route path="/vision" element={<Vision />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LangProvider>
  );
}

export default App;