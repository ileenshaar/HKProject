import React, { useEffect } from "react";
import "./transportationsDesc.css";
import airFreight from "../../images/airFreight3.jpeg";
import { useLanguage } from "../LanguageContext/LanguageContext";

function AirTransportationsDesc() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document
      .querySelectorAll([".transDesc", ".imgDescContainer", ".imgDescContainerh1", ".custom-list"].join(", "))
      .forEach((el) => {
        el.style.direction = lang === "ar" ? "rtl" : "ltr";
      });
  }, [lang]);

  return (
    <div className="transDescContainer">
      <div className="descContainer">
        <div className="imgDescContainer">
          <h1 className="imgDescContainerh1"> {t.air}</h1>
          <div className="transDesc">
            {t.airDesc1}
            <span className="highlight"> HK Istanbul</span>
            {t.airDesc}
            <p>
              <strong> {t.servicesInclude}</strong>
            </p>
            <ul className="custom-list">
              <li>{t.liAir.li1}</li>
              <li>{t.liAir.li2}</li>
              <li>{t.liAir.li3}</li>
              <li>{t.liAir.li4}</li>
              <li>{t.liAir.li5}</li>
            </ul>
          </div>
        </div>
        <img src={airFreight} alt="" className="transImg" />
      </div>
    </div>
  );
}

export default AirTransportationsDesc;
