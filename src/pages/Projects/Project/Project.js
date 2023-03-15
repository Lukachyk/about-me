import listProjects from '../../../porject-list/listProject';
import './styles.css';
import imgLoader from './img/807.png';

const Project = () => {
   return (
      <div className="projects__content">
         <div className="projects__content__items">
            {listProjects.map((project) => (
               <div key={project.id} className="project__content__items__card">
                  <a href={project.url} target="_blank">
                     <img
                        className="project__content__items__card__img"
                        src={project.img}
                        alt={project.name}
                        onError={(e) => {
                           e.target.src = imgLoader;
                        }}
                     />
                     <p className="project__content__items__card__title">
                        {project.name}
                     </p>
                     <p className="project__content__items__card__date">
                        {project.datetime}
                     </p>
                  </a>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Project;
