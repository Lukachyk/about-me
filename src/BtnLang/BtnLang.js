import './styles.css';
import { useLocalStorage } from '../utils/useLocalStorage';
import { useEffect } from 'react';
import ua from './ua.png';
const BtnLang = () => {
   const [value, toggleBtn] = useLocalStorage(true);

   useEffect(() => {
      if (!value) {
         const timeoutId = setTimeout(() => {
            if (!value) {
               alert(
                  'На даний час, сайт підтримує лише англійську версію!!! Currently, the website only supports the English version!!!'
               );
               toggleBtn();
            }
         }, 1000);
         return () => clearTimeout(timeoutId);
      }
   }, [value]);

   return (
      <div className="sidebar__btn">
         <p
            className={`sidebar__btn__en-text${
               value ? ' sidebar__btn__en-text_active' : ''
            }`}
         >
            EN
         </p>

         <button
            onClick={toggleBtn}
            className={`sidebar__btn__mode${
               value ? '' : ' sidebar__btn__mode_on'
            }`}
            type="button"
         ></button>
         <p
            className={`sidebar__btn__ua-text${
               value ? '' : ' sidebar__btn__ua-text_active'
            }`}
         >
            UA
         </p>
      </div>
   );
};

export default BtnLang;
