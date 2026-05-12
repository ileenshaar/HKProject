import React, { useEffect } from "react";
import "./transportationsDesc.css";
import ocean from "../../images/ocean.png";
import { useLanguage } from "../LanguageContext/LanguageContext";

function SeaTransportationsDesc() {
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
          <h1 className="imgDescContainerh1"> {t.sea}</h1>
          <div className="transDesc">
            {t.seaDesc1} <span className="highlight">HK Istanbul</span> {t.seaDesc}
            <p>
              <strong>{t.servicesInclude}</strong>
            </p>
            <ul className="custom-list">
              <li>{t.liSea.li1}</li>
              <li>{t.liSea.li2}</li>
              <li>{t.liSea.li3}</li>
              <li>{t.liSea.li4}</li>
              <li>{t.liSea.li5}</li>
            </ul>
          </div>
        </div>
        <img src={ocean} alt="" className="transImg" />
      </div>
    </div>
  );
}

export default SeaTransportationsDesc;
