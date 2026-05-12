import React, { useEffect } from "react";
import "./transportationsDesc.css";
import cargo from "../../images/cargo.jpg";
import { useLanguage } from "../LanguageContext/LanguageContext";

function ProjectCargoDesc() {
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
          <h1 className="imgDescContainerh1"> {t.project}</h1>
          <div className="transDesc">
            {t.projectDesc}
            <br />
            <br />
            {t.projectDesc2}
            <p>
              <strong>{t.servicesInclude}</strong>
            </p>
            <ul className="custom-list">
              <li>{t.liProject.li1}</li>
              <li>{t.liProject.li2}</li>
              <li>{t.liProject.li3}</li>
              <li>{t.liProject.li4}</li>
              <li>{t.liProject.li5}</li>
            </ul>
          </div>
        </div>
        <img src={cargo} alt="" className="transImg" />
      </div>
    </div>
  );
}

export default ProjectCargoDesc;
