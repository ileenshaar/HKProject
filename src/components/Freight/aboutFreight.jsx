import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function AboutFreight({ title, desc, link }) {
  return (
    <>
      <h1>{title}</h1>
      <p className="freightDescP">{desc}</p>
      <Link to={link} className="freightDescLink">
        <ArrowForwardIosIcon
          sx={{
            fontSize: "20px",
            stroke: "currentColor",
            color: "white",
            alignSelf: "center",
          }}
        />
      </Link>
    </>
  );
}

export default AboutFreight;
