import React from "react";
import "../stylePages/LanguageSwitcher.css"; 

export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="language-switcher">
      <button onClick={() => setLanguage("ru")}>RU</button>
      <button onClick={() => setLanguage("uk")}>UA</button>
      <button onClick={() => setLanguage("en")}>EN</button>
    </div>
  );
}