import "./styles.css";
import sound from "./media/sound.gif";
import ambient from "./media/ambient.mp3";
import { useRef, useState, useEffect } from "react";

const Music = () => {
  const audioRef = useRef(null);
  const soundButtonRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const onFocus = () =>
      soundButtonRef.current.classList.contains("paused")
        ? audioRef.current.pause()
        : audioRef.current.play();

    const onBlur = () => audioRef.current.pause();

    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  return (
    <div className="music">
      {/* добавляем компонент Кнопки */}
      <img
        className={`soundbutton${isPlaying ? " pause" : " play"}`}
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
