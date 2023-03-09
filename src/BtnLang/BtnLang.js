import "./styles.css";
import { useLocalStorage } from "../utils/useLocalStorage";

const BtnLang = () => {
  const [value, toggleBtn] = useLocalStorage(true);

  return (
    <div className="sidebar__btn">
      <p
        className={`sidebar__btn__en-text${
          value ? " sidebar__btn__en-text_active" : ""
        }`}
      >
        EN
      </p>
      <button
        onClick={toggleBtn}
        className={`sidebar__btn__mode${value ? "" : " sidebar__btn__mode_on"}`}
        type="button"
      ></button>
      <p
        className={`sidebar__btn__ua-text${
          value ? "" : " sidebar__btn__ua-text_active"
        }`}
      >
        UA
      </p>
    </div>
  );
};

export default BtnLang;
