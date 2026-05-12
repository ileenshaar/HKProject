import React from "react";
import download from "../../images/airFreight3.jpeg";
import ocean from "../../images/ocean.png";
import road from "../../images/road-freight2.jpg";
import cargo from "../../images/cargo.jpg";
import "./transportations.css";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";

function Transportations() {
  const { t } = useLanguage();

  return (
    <div className="transportationGrid">
      <div>
        <img src={download} alt="air" />
        <p>{t.air}</p>
        <Link to="/AirTransportationsDesc">
          {t.learnMore}{" "}
          <EastIcon style={{ width: "1.5rem", height: "1.5rem" }} className="icon" />
        </Link>
      </div>
      <div>
        <img src={ocean} alt="ocean" />
        <p>{t.sea}</p>
        <Link to="/SeaTransportationsDesc">
          {t.learnMore}{" "}
          <EastIcon style={{ width: "1.5rem", height: "1.5rem" }} className="icon" />
        </Link>
      </div>
      <div>
        <img src={road} alt="road" />
        <p>{t.road}</p>
        <Link to="/RoadTransportationsDesc">
          {t.learnMore}{" "}
          <EastIcon style={{ width: "1.5rem", height: "1.5rem" }} className="icon" />
        </Link>
      </div>
      <div>
        <img src={cargo} alt="cargo" />
        <p>{t.project}</p>
        <Link to="/ProjectCargoDesc">
          {t.learnMore}{" "}
          <EastIcon style={{ width: "1.5rem", height: "1.5rem" }} className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Transportations;
