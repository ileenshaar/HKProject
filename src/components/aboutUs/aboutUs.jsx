import React, { useEffect } from "react";
import "./aboutUs.css";
import { useLanguage } from "../LanguageContext/LanguageContext";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FlightIcon from "@mui/icons-material/Flight";
import PublicIcon from "@mui/icons-material/Public";

function AboutUs() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.querySelectorAll(".aboutUsPoint").forEach((el) => {
      el.style.direction = lang === "ar" ? "rtl" : "ltr";
    });
  }, [lang]);

  return (
    <div className="aboutUsGradBg">
      <div className="aboutUsWhiteBg">
        <div className="gradiantCircle"></div>
        <div className="contentStyle">
          <h1 className="aboutUsTitle">
            {lang === "en" ? "About Us" : "من نحن"}
          </h1>
          <div className="companyDescContainer">
            <div className="aboutUsPoint">
              <LocalShippingIcon className="aboutUsIcons" />
              {t.aboutUs1}
            </div>
            <div className="aboutUsPoint">
              <ThumbUpAltIcon className="aboutUsIcons" />
              {t.aboutUs2}
            </div>
            <div className="aboutUsPoint">
              <FlightIcon className="aboutUsIcons" />
              {t.aboutUs3}
            </div>
            <div className="aboutUsPoint">
              <PublicIcon className="aboutUsIcons" />
              {t.aboutUs4}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
