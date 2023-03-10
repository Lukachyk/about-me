import GetInTouchBtn from "../../GetInTouchBtb/GetInTouchBtn";
import Music from "../../Music/Music";
import NoScroll from "../../utils/NoScroll";

import "./styles.css";

const About = () => {
  return (
    <>
      <NoScroll /> {/* добавляем компонент NoScroll */}
      <section className="about">
        <div className="about__content">
          <h1 className="about__content__greetings">
            Hello there, I&apos;m
            <span className="about__content__greetings-name"> Roman. </span>
            Nice to meet you.
          </h1>
          <p className="about__content__main-text">
            I&apos;m an 18th years old Front-end developer from Belarus, Minsk.
            Learn a lot of different stuff and try to found some work for
            practice and get some money. I had a lot of usefull skills, that
            help me in creating fast, easy to use and good-looking Web-sites. My
            main experience is in front-end, but I also have a passion for
            design. More than any another I love minimalistic, modern and strict
            design with dark shades, lines and squares
          </p>
        </div>
        <GetInTouchBtn />
        <Music />
      </section>
    </>
  );
};

export default About;
