import React, { useRef, useEffect, useState } from "react";
import air from "../../images/airFreight2.jpg";
import road from "../../images/road-freight1.jpg";
import ocean from "../../images/seaFreight3.jpg";
import cargo from "../../images/cargo.jpg";
import "./freight.css";
import AboutFreight from "./aboutFreight";
import { useMediaQuery } from "@mui/material";

function Freight() {
  const isSmallerScreen = useMediaQuery("(max-width:1024px)");
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const freightCols = section.querySelectorAll(".freightCol");

    // Only apply carousel logic for smaller screens.
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

    const updateCarousel = () => {
      section.style.display = "flex";
      freightCols.forEach((col, index) => {
        col.style.display = index === currentIndex ? "block" : "none";
      });
    };

    // Initial setup
    updateCarousel();

    // Set interval for cycling through items
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % freightCols.length);
    }, 1500); // Adjust interval duration as needed

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [isSmallerScreen, currentIndex]);

  return (
    <div className="freightGrid" ref={sectionRef}>
      <div className="freightCol">
        <img src={air} alt="air freight" />
        <h1 className="freightColTitle">AIR FREIGHT</h1>
        <div className="freightDesc">
          <AboutFreight
            title={"AIR FREIGHT"}
            desc={
              "We handle both import and export cargo worldwide, offering door to door and door to airport services on both prepaid…"
            }
          />
        </div>
      </div>

      <div className="freightCol">
        <img src={road} alt="road freight" />
        <h1 className="freightColTitle">ROAD FREIGHT</h1>
        <div className="freightDesc">
          <AboutFreight
            title={"ROAD FREIGHT"}
            desc={
              "A complete series of container transportation from and to the ports around the whole world, ensuring quality transports and…"
            }
          />
        </div>
      </div>

      <div className="freightCol">
        <img src={ocean} alt="ocean freight" />
        <h1 className="freightColTitle">SEA FREIGHT</h1>
        <div className="freightDesc">
          <AboutFreight
            title={"SEA FREIGHT"}
            desc={
              "Through clear communication, thoughtful collaboration and dedicated follow-through, our Road Freight…"
            }
          />
        </div>
      </div>

      <div className="freightCol">
        <img src={cargo} alt="Project HK" />
        <h1 className="freightColTitle">PROJECT CARGO</h1>
        <div className="freightDesc">
          <AboutFreight
            title={"PROJECT CARGO"}
            desc={
              "Using our experience and resources, we combine the necessary freight methods in order to achieve the requested objective…"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Freight;
