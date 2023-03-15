import NoScroll from '../../utils/NoScroll';
import './styles.css';
const Contacts = () => {
   return (
      <section className="contacts">
         <NoScroll />
         <div className="contacts__content">
            <h3 className="contacts__content__title">Want to work with me?</h3>
            <form className="contacts__content__form">
               <div>
                  <label
                     className="contacts__content__form__name"
                     htmlFor="email"
                  >
                     Email
                  </label>
                  <input id="email" type="email" name="email"></input>
               </div>
               <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="name" name="name"></input>
               </div>
               <div>
                  <label htmlFor="comments">Commets</label>
                  <textarea
                     id="comments"
                     type="text"
                     name="comments"
                  ></textarea>
               </div>
               <button
                  className="contacts__content__form__name__btn"
                  type="submit"
                  value="Submit"
               >
                  Get in touch
               </button>
            </form>
         </div>
      </section>
   );
};

export default Contacts;
