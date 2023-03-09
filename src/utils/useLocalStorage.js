import { useState, useEffect } from "react";

export const useLocalStorage = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggleBtn = () => {
    setValue((prevValue) => !prevValue);
    localStorage.setItem("buttonValue", !value);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("buttonValue");
    if (storedValue !== null) {
      setValue(JSON.parse(storedValue));
    }
  }, []);

  return [value, toggleBtn];
};
