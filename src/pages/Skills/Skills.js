import './styles.css';
import avatar from './avatar.jpeg';
import Loader from '../../Loader/Loader';

const Skills = () => {
   return (
      <section className="skills">
         <div className="skills__content">
            <div className="skills__content__avatar-block">
               <img
                  src={avatar}
                  className="skills__content-avatar__block__img"
                  alt="Avatar"
               />
            </div>
            <div className="skills__content__wrapper">
               <div className="skills__content__level">
                  <h3 className="skills__content__level__title">JS</h3>
                  <div className="skills__content__level__wrapper">
                     <div className="skills__content__level__scale skills__content__level__scale-js"></div>
                  </div>
               </div>
               <div className="skills__content__level">
                  <h3 className="skills__content__level__title">CSS</h3>
                  <div className="skills__content__level__wrapper">
                     <div className="skills__content__level__scale skills__content__level__scale-css"></div>
                  </div>
               </div>
               <div className="skills__content__level">
                  <h3 className="skills__content__level__title">React</h3>
                  <div className="skills__content__level__wrapper">
                     <div className="skills__content__level__scale skills__content__level__scale-react"></div>
                  </div>
               </div>
               <div className="skills__content__level">
                  <h3 className="skills__content__level__title">Redux</h3>
                  <div className="skills__content__level__wrapper">
                     <div className="skills__content__level__scale .skills__content__level__scale-redux"></div>
                  </div>
               </div>
            </div>
         </div>
         <Loader />
      </section>
   );
};

export default Skills;
