import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./scrollSection.css";
import Images from "../../images/scrollRowImages";

function ScrollSection() {
  let slideTimer;
  function sideScroll(elementId, direction, speed, step) {
    const element = document.getElementById(elementId);

    // Guard clause to ensure the element exists
    if (!element) {
      console.error(`Element with ID "${elementId}" not found.`);
      return;
    }

    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    slideTimer = setInterval(() => {
      if (direction === "left") {
        if (element.scrollLeft <= 0) {
          // Cycle to the end
          element.scrollLeft = maxScrollLeft;
        } else {
          element.scrollLeft -= step;
        }
      } else if (direction === "right") {
        if (element.scrollLeft >= maxScrollLeft) {
          // Cycle to the start
          element.scrollLeft = 0;
        } else {
          element.scrollLeft += step;
        }
      }
    }, speed);
  }
  function stopScroll() {
    clearInterval(slideTimer); // Stop the timer
  }
  return (
    <div className="ScrollContainer">
      <button
        onMouseEnter={() => sideScroll("ScrollContainer", "left", 25, 10)}
        onMouseLeave={stopScroll}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosNewIcon
          sx={{
            fontSize: "40px",
            stroke: "currentColor",
            strokeWidth: 2,
            color: "#1a0474",
          }}
        />
      </button>

      <div className="row" id="ScrollContainer">
        {Images.map((src, index) => (
          <a key={index}>
            <img src={src} alt={`cargo-${index}`} />
          </a>
        ))}
      </div>

      <button
        onMouseEnter={() => sideScroll("ScrollContainer", "right", 25, 10)}
        onMouseLeave={stopScroll}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "40px",
            stroke: "currentColor",
            strokeWidth: 2,
            color: "#1a0474",
          }}
        />
      </button>
    </div>
  );
}

export default ScrollSection;
