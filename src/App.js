import React from 'react';
import './style/main.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import About from './pages/About/About.js';
import Projects from './pages/Projects/Projects';

// const AboutContainer = lazy(() => import('./pages/About/About.js'));
const SkillsContainer = lazy(() => import('./pages/Skills/Skills'));

function App() {
   return (
      <Router>
         <main className="app">
            <SideBar />
            <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/skills" element={<SkillsContainer />} />
               </Routes>
            </Suspense>
         </main>
      </Router>
   );
}

export default App;
