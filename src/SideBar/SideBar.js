import "./styles.css";
import about from "../logo-sidebar/about.png";
import skills from "../logo-sidebar/skills.png";
import projects from "../logo-sidebar/projects.png";
import contacts from "../logo-sidebar/contacts.png";
import BtnLang from "../BtnLang/BtnLang";

const SideBar = () => {
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
            <a
              href="#!"
              className="sidebar__nav__list__item__link sidebar__nav__list__item__link_active"
            >
              <img src={about} alt="About" />
              About
            </a>
          </li>
          <li className="sidebar__nav__list__item">
            <a href="#!" className="sidebar__nav__list__item__link">
              <img src={skills} alt="Skills" />
              Skills
            </a>
          </li>
          <li className="sidebar__nav__list__item">
            <a href="#!" className="sidebar__nav__list__item__link">
              <img src={projects} alt="Projects" />
              Projects
            </a>
          </li>
          <li className="sidebar__nav__list__item">
            <a href="#!" className="sidebar__nav__list__item__link">
              <img src={contacts} alt="Contacts" />
              Contacts
            </a>
          </li>
        </ul>
      </nav>
      <BtnLang />
    </aside>
  );
};

export default SideBar;
