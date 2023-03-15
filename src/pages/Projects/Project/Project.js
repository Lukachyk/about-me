import listProjects from '../../../porject-list/listProject';
import './styles.css';
const Project = () => {
   return (
      <div>
         {listProjects.map((project) => (
            <div key={project.id} className="project__content__items__card">
               <a href={project.url}>
                  <img src={project.img} alt={project.name} />
                  <p className="project__content__items__card__title">
                     {project.name}
                  </p>
               </a>
            </div>
         ))}
      </div>
   );
};

export default Project;
