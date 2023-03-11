import './styles.css';
import about from '../logo-sidebar/about.png';
import skills from '../logo-sidebar/skills.png';
import projects from '../logo-sidebar/projects.png';
import contacts from '../logo-sidebar/contacts.png';
import BtnLang from '../BtnLang/BtnLang';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
   const activeLink =
      'sidebar__nav__list__item__link sidebar__nav__list__item__link_active';
   const normalLink = 'sidebar__nav__list__item__link';

   return (
      <aside className="sidebar">
         <div className="sidebar__logo">
            <a href="#!" className="sidebar__logo-text">
               LUKACHYK ROMAN
            </a>
         </div>
         <nav className="sidebar__nav">
            <ul className="sidebar__nav__list">
               <li className="sidebar__nav__list__item">
                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                     }
                  >
                     <img src={about} alt="About" />
                     About
                  </NavLink>
               </li>
               <li className="sidebar__nav__list__item">
                  <NavLink
                     to="/skills"
                     className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                     }
                  >
                     <img src={skills} alt="Skills" />
                     Skills
                  </NavLink>
               </li>
               <li className="sidebar__nav__list__item">
                  <NavLink
                     to="/projects"
                     className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                     }
                  >
                     <img src={projects} alt="Projects" />
                     Projects
                  </NavLink>
               </li>
               <li className="sidebar__nav__list__item">
                  <NavLink
                     to="/contacts"
                     className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                     }
                  >
                     <img src={contacts} alt="Contacts" />
                     Contacts
                  </NavLink>
               </li>
            </ul>
         </nav>
         <BtnLang />
      </aside>
   );
};

export default SideBar;
