import './style/main.css';
import SideBar from './SideBar/SideBar';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const DialogsContainer = React.lazy(() =>
//   import("./components/Dialogs/DialogsContainer")
// );
// const ProfileContainer = React.lazy(() =>
//   import("./components/Profile/ProfileContainer")
// );
// <Route path="/dialogs/" element={<DialogsContainer />} />

function App() {
   return (
      <Router>
         <main className="app">
            <SideBar />
            <Routes>
               <Route path="/" element={<div>Home</div>} />
               <Route path="/about" element={<About />} />
               <Route path="/skills" element={<Skills />} />
            </Routes>
         </main>
      </Router>
   );
}

export default App;
