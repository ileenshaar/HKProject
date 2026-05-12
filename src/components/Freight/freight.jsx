import React, { useRef, useEffect, useState } from "react";
import air from "../../images/airFreight2.jpg";
import road from "../../images/road-freight1.jpg";
import ocean from "../../images/seaFreight3.jpg";
import cargo from "../../images/cargo.jpg";
import "./freight.css";
import AboutFreight from "./aboutFreight";
import { useMediaQuery } from "@mui/material";
import { useLanguage } from "../LanguageContext/LanguageContext";

function Freight() {
  const { lang, t } = useLanguage();
  const isSmallerScreen = useMediaQuery("(max-width:1024px)");
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.querySelectorAll(".freightDescP").forEach((el) => {
      el.style.direction = lang === "ar" ? "rtl" : "ltr";
    });
  }, [lang]);

  useEffect(() => {
    const section = sectionRef.current;
    const freightCols = section.querySelectorAll(".freightCol");

    if (!isSmallerScreen) {
      section.style.display = "grid";
      section.style.gridTemplateColumns = "repeat(4,1fr)";
      freightCols.forEach((col) => {
        col.style.display = "flex";
      });
    }
    if (!isSmallerScreen) return;
    section.style.display = "flex";

    if (!freightCols.length) return;

    section.style.display = "flex";
    freightCols.forEach((col, index) => {
      col.style.display = index === currentIndex ? "block" : "none";
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % freightCols.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isSmallerScreen, currentIndex]);

  const airDesc =
    lang === "en"
      ? "For your urgent shipments, we at KH Istanbul offer fast and accurate air freight services, through our partnerships with major international airlines..."
      : "لشحناتك العاجلة نقدم في KH Istanbul خدمات الشحن الجوي السريع والدقيق,عبر شراكتنا مع كبرى شركات الطيران العالمية...";

  const roadDesc =
    lang === "en"
      ? "HK Istanbul provides safe and efficient land freight services in Türkiye and around the world, whether the shipment is full load..."
      : "توفر شركة HK Istanbul خدمات الشحن البري الآمنة والفعالة في تركيا ودول العالم, سواء كانت الشحنة حمولة كاملة...";

  const seaDesc =
    lang === "en"
      ? "At HK Istanbul, we offer flexible and economical shipping solutions to suit all types of goods. We offer full (FCL) or consolidation (LCL) shipping options depending on the size of the shipment..."
      : "نقدم في HK Istanbul حلول شحن مرنة واقتصادية تناسب جميع أنواع البضائع. نوفر خيارات شحن كاملة (FCL) أو موحدة (LCL) حسب حجم الشحنة...";

  const cargoDesc =
    lang === "en"
      ? "Using our experience and resources, we combine the necessary freight methods in order to achieve the requested objective..."
      : "باستخدام خبرتنا ومواردنا، نجمع بين طرق الشحن اللازمة لتحقيق الهدف المطلوب...";

  return (
    <div className="freightGrid" ref={sectionRef}>
      <div className="freightCol">
        <img src={air} alt="air freight" />
        <h1 className="freightColTitle"> {t.air}</h1>
        <div className="freightDesc">
          <AboutFreight
            title={t.air}
            desc={airDesc}
            link="/AirTransportationsDesc"
          />
        </div>
      </div>

      <div className="freightCol">
        <img src={road} alt="road freight" />
        <h1 className="freightColTitle"> {t.road}</h1>
        <div className="freightDesc">
          <AboutFreight
            title={t.road}
            desc={roadDesc}
            link="/RoadTransportationsDesc"
          />
        </div>
      </div>

      <div className="freightCol">
        <img src={ocean} alt="ocean freight" />
        <h1 className="freightColTitle"> {t.sea}</h1>
        <div className="freightDesc">
          <AboutFreight
            title={t.sea}
            desc={seaDesc}
            link="/SeaTransportationsDesc"
          />
        </div>
      </div>

      <div className="freightCol">
        <img src={cargo} alt="Project HK" />
        <h1 className="freightColTitle"> {t.project}</h1>
        <div className="freightDesc">
          <AboutFreight
            title={t.project}
            desc={cargoDesc}
            link="/ProjectCargoDesc"
          />
        </div>
      </div>
    </div>
  );
}

export default Freight;
