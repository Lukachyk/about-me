import { useState, useEffect } from "react";
import "./styles.css";

const BtnLang = () => {
  const [value, setValue] = useState(true);

  const toggleBtn = () => {
    setValue(!value);
    localStorage.setItem("buttonValue", !value);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("buttonValue");
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, []);

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
