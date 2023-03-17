import React from 'react';
import './style/main.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import About from './pages/About/About.js';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';

// const AboutContainer = lazy(() => import('./pages/About/About.js'));
const SkillsContainer = lazy(() => import('./pages/Skills/Skills'));

function App() {
   return (
      <Router>
         <main className="app">
            <SideBar />
            <Suspense fallback={<div>Loading...</div>}>
               <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<SkillsContainer />} />
                  <Route path="/contacts" element={<Contacts />} />
               </Routes>
            </Suspense>
         </main>
      </Router>
   );
}

export default App;
