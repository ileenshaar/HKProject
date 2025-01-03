import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";
import hkLogo from "../../hk.svg";
import "./header.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useMediaQuery } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";

function Header() {
  const isSmallerScreen = useMediaQuery("(max-width:1024px)");
  let viewBox = isSmallerScreen ? "0 -1 24 24" : "0 0 15 24";
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (!isSmallerScreen) {
      document.querySelector(".header").style.borderRadius = "100px";
      setIsClicked(false);
    }
  }, [isSmallerScreen]);

  useEffect(() => {
    if (!isClicked) {
      document.querySelector(".header").style.borderRadius = "100px";
      document.querySelector(".header").style.backgroundColor = "#f1f1f149";
    }
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    document.querySelector(".header").style.borderRadius = "0";
    document.querySelector(".header").style.backgroundColor =
      "rgba(240, 248, 255, 0.739)";
  };

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} />
      </div>

      <div className={isClicked ? "contentBlock" : "content"}>
        <a href="#" class="active">
          HOME
        </a>
        <a href="#">
          <div className="dropdown">
            <button class="dropbtn">
              SERVICES
              <ArrowDropDownIcon
                viewBox={viewBox}
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
                className="arrowIcon"
              />
            </button>
            <div class="dropdown-content">
              <a href="#">AIR FREIGHT</a>
              <a href="#">SEA FREIGHT</a>
              <a href="#">ROAD FREIGHT</a>
              <a href="#">PROJECT HK </a>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="dropdown">
            <button class="dropbtn">
              ABOUT US
              <ArrowDropDownIcon
                viewBox={viewBox}
                style={{
                  width: "2rem",
                  height: "2rem",
                }}
              />
            </button>
            <div class="dropdown-content">
              <a href="#">ABOUT HK</a>
              <a href="#">MEET OUT TEAM</a>
              <a href="#">JOIN OUR TEAM</a>
              <a href="#">OUR MAGAZINE</a>
            </div>
          </div>
        </a>

        <a href="#">NEWS</a>
        <a href="#">CONTACT US</a>
        <a href="#">
          <img className="logoSec" src={hkLogo} />
        </a>
        <a href="#">
          <button className="quote">GET A QUOTE</button>
        </a>
      </div>

      <button onClick={handleClick} className="expand">
        <ReorderIcon style={{ width: "2em", height: "2em" }} />
      </button>
    </div>
  );
}

export default Header;
