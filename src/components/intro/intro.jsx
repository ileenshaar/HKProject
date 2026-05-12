import React, { useState, useEffect } from "react";
import "./intro.css";
import { useLanguage } from "../LanguageContext/LanguageContext";

function Intro() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro">
      <p className={visible ? "introTexth4" : "introTexth4hidden"} variant="h4">
        HK ISTANBUL DIŞ TİCARET
      </p>
      <p className={visible ? "introTexth3" : "introTexth4hidden"} variant="h3">
        {t.intro}
      </p>
    </div>
  );
}

export default Intro;
