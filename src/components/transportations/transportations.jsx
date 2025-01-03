import React from "react";
import download from "../../images/download.jpg";
import ocean from "../../images/ocean.png";
import road from "../../images/road.jpg";
import cargo from "../../images/cargo.jpg";
import "./transportations.css";
import EastIcon from "@mui/icons-material/East";

function Transportations() {
  return (
    <div className="transportationGrid">
      <div>
        <img src={download} alt="air" />
        <p>AIR FREIGHT</p>
        <a href="#">
          LEARN MORE{" "}
          <EastIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            className="icon"
          />
        </a>
      </div>
      <div>
        <img src={ocean} alt="ocean" />
        <p>SEA FREIGHT</p>
        <a href="#">
          LEARN MORE{" "}
          <EastIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            className="icon"
          />
        </a>
      </div>
      <div>
        <img src={road} alt="road" />
        <p>ROAD FREIGHT</p>
        <a href="#">
          LEARN MORE{" "}
          <EastIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            className="icon"
          />
        </a>
      </div>
      <div>
        <img src={cargo} alt="cargo" />
        <p>PROJECT CARGO</p>
        <a href="#">
          LEARN MORE{" "}
          <EastIcon
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            className="icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Transportations;
