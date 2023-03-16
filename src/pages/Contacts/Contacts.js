import axios from 'axios';
import NoScroll from '../../utils/NoScroll';
import './styles.css';

const Contacts = () => {
   const TOKEN = '6020872184:AAE_VBG3QEbbqCd2siAjx_DYjO_IR6QQiO4';
   const CHAT_ID = '-1001914694299';
   const URI_API = `http://api.telegram.org/bot${TOKEN}/sendMessage}`;

   const handleClick = async (event) => {
      event.preventDefault();

      const form = event.target.closest('form');
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const commentText = formData.get('comments');

      const message = `<b>Заявка с сайта</b>\n;
     <b>Отправитель: ${name} </b>\n
     <b>Потча : ${email} </b>\n
     <b>Комментн : ${commentText} </b>`;

      try {
         const response = await axios.post(URI_API, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML',
         });

         form.reset();
      } catch (error) {
         console.error(error);
      }
   };

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
                  onClick={handleClick}
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
