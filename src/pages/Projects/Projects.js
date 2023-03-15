import './styles.css';

import Project from './Project/Project';

const Projects = () => {
   return (
      <section className="projects">
         <div className="projects__content">
            <div className="projects__content__items">
               <Project />
            </div>
         </div>
      </section>
   );
};

export default Projects;
