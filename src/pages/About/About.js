import GetInTouchBtn from '../../GetInTouchBtb/GetInTouchBtn';
import Music from '../../Music/Music';
import NoScroll from '../../utils/NoScroll';

import './styles.css';

const About = () => {
   return (
      <>
         <NoScroll /> {/* добавляем компонент NoScroll */}
         <section className="about">
            <div className="about__content">
               <h1 className="about__content__greetings">
                  Hello there, I&apos;m
                  <span className="about__content__greetings-name">
                     {' '}
                     Roman.{' '}
                  </span>
                  Nice to meet you.
               </h1>
               <p className="about__content__main-text">
                  I&apos;m 31 years old, a junior front-end developer from
                  Ukraine, Kyiv. I study many different things and try to find a
                  job to practice and earn money. I have gained many useful
                  skills that help me to create fast, easy-to-use and beautiful
                  websites. My main experience is in frontend.
               </p>
            </div>
            <GetInTouchBtn />
            <Music />
         </section>
      </>
   );
};

export default About;
