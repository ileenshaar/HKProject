import React, { useEffect } from "react";
import "./transportationsDesc.css";
import road from "../../images/road-freight2.jpg";
import { useLanguage } from "../LanguageContext/LanguageContext";

function RoadTransportationsDesc() {
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
          <h1 className="imgDescContainerh1"> {t.road}</h1>
          <div className="transDesc">
            {t.roadDesc}
            <p>
              <strong>{t.servicesInclude}</strong>
            </p>
            <ul className="custom-list">
              <li>{t.liRoad.li1}</li>
              <li>{t.liRoad.li2}</li>
              <li>{t.liRoad.li3}</li>
              <li>{t.liRoad.li4}</li>
            </ul>
          </div>
        </div>
        <img src={road} alt="" className="transImg" />
      </div>
    </div>
  );
}

export default RoadTransportationsDesc;
