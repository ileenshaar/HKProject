import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function AboutFreight({ title, desc }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>
        <ArrowForwardIosIcon
          sx={{
            fontSize: "20px",
            stroke: "currentColor",
            strokeWidth: 2,
            color: "white",
          }}
        />
      </button>
    </>
  );
}

export default AboutFreight;
