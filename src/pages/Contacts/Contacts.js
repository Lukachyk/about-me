import axios from 'axios';
import { useState, useEffect } from 'react';
import NoScroll from '../../utils/NoScroll';
import done from './done.png';
import error404 from './error404.png';
import './styles.css';

const Contacts = () => {
   const TOKEN = 'CHAT_ID';
   const CHAT_ID = 'CHAT_ID';

   const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
   const active = 'contacts__content__form__submitted';
   const activeError = 'contacts__content__form__submitted_error';
   const hide = 'none';
   const [submitted, setSubmitted] = useState(false);
   const [submittedErr, setSubmittedErr] = useState(false);

   const handleClick = async (event) => {
      event.preventDefault();

      const form = event.target.closest('form');
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const commentText = formData.get('comments');
      // Проверяем, что все поля формы заполнены

      if (!name || !email || !commentText) {
         alert('Please fill out all fields before submitting the form');
         return;
      }

      const message = `<b>Заявка с сайта!!!</b>\n
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
         setSubmitted(true);
      } catch (error) {
         alert('The function is currently not working !!!!');
         console.error(error);
         setSubmittedErr(true);
         console.log(submitted);
      }
   };

   useEffect(() => {
      if (submitted || submittedErr) {
         const timeoutId = setTimeout(() => {
            if (submitted) {
               setSubmitted(false);
            }
            if (submittedErr) {
               setSubmittedErr(false);
            }
         }, 5000);
         return () => clearTimeout(timeoutId);
      }
   }, [submitted, submittedErr]);

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
               <div className="contacts__content__form__block-wrapper">
                  <button
                     onClick={handleClick}
                     className="contacts__content__form__btn"
                     type="submit"
                     value="Submit"
                  >
                     Get in touch
                  </button>
                  <img className={submitted ? active : hide} src={done} />
                  <img
                     className={submittedErr ? activeError : hide}
                     src={error404}
                  />
               </div>
            </form>
         </div>
      </section>
   );
};

export default Contacts;
