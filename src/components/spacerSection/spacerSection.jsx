import React from "react";
import "./spacerSection.css";
import hklogo from "../../images/hkLogo.png";
import { useLanguage } from "../LanguageContext/LanguageContext";

function SpacerSection() {
  const { lang } = useLanguage();

  return (
    <div className="SpacerContainer">
      <div className="description">
        <img src={hklogo} alt="cargo sea" />
        <h1 className="titleLarge">
          {lang === "en"
            ? "Your goods are in safe hands."
            : "بضائعكم بأيدٍ أمينة"}
        </h1>
        <p>
          {lang === "en"
            ? "We promise that every shipment will arrive safely and professionally at its destination, because trust begins with the right choice."
            : "نعدكم بأن كل شحنة تصل بأمانة واحترافية إلى وجهتها، لأن الثقة تبدأ من الاختيار الصحيح"}
        </p>
        <button className="quote">GET A QUOTE</button>
      </div>
    </div>
  );
}

export default SpacerSection;
