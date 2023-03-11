import './styles.css';
import sound from './media/sound.gif';
import ambient from './media/ambient.mp3';
import { useRef, useState, useEffect } from 'react';

const Music = () => {
   // воздаем юз реф для картинки и кнопки
   const audioRef = useRef(null);
   const soundButtonRef = useRef(null);

   const [isPlaying, setIsPlaying] = useState(false);

   // Фукнция для кнопки
   const togglePlay = () => {
      // условие при котором будет выполняться или стоп или пауза
      if (isPlaying) {
         audioRef.current.pause();
      } else {
         audioRef.current.play();
      }
      // устанавливаем для стейта тру/фолс
      setIsPlaying(!isPlaying);
   };

   // отслеживаем что происходит
   useEffect(() => {
      // проверяем если ли класс на  ref={soundButtonRef} -  pause ()
      const onFocus = () => {
         if (soundButtonRef.current.classList.contains('paused')) {
            audioRef.current.pause();
         }
      };
      // функция для евент слушателя
      const onBlur = () => audioRef.current.pause();

      // устанавливаем слушателя к window на focus or blur  onFocus ()
      window.addEventListener('focus', onFocus);
      window.addEventListener('blur', onBlur);

      // удаляем слушателя при димонтаже
      return () => {
         window.removeEventListener('focus', onFocus);
         window.removeEventListener('blur', onBlur);
      };
   }, []);

   return (
      <div className="music">
         {/* добавляем компонент Кнопки */}
         <img
            className={`soundbutton${isPlaying ? ' pause' : ' play'}`}
            src={sound}
            alt="Equalizer"
            onClick={togglePlay}
            ref={soundButtonRef}
         />
         <audio className="audio" src={ambient} ref={audioRef} loop></audio>
      </div>
   );
};

export default Music;
