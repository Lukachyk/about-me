import './styles.css';
import { NavLink } from 'react-router-dom';
const GetInTouchBtn = () => {
   return (
      <div>
         <NavLink to="/contacts">
            <button className="about__content__btn" type="button">
               Get in touch
            </button>
         </NavLink>
      </div>
   );
};

export default GetInTouchBtn;
