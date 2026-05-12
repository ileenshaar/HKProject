import React, { useState, useEffect } from "react";
import logo from "../../images/hkLogo.png";
import "./header.css";
import { useMediaQuery } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext/LanguageContext";

function Header() {
  const { lang, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const contactActive = location.hash === "#aboutUs";

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/HKProject#aboutUs");
    setTimeout(() => {
      document.getElementById("aboutUs")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  const isSmallerScreen = useMediaQuery("(max-width:1024px)");
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
        <Link to="/HKProject">
          <img className="logo" src={logo} alt="HK Logo" />
        </Link>
      </div>

      <div className={isClicked ? "contentBlock" : "content"}>
        <NavLink to="/HKProject" end className={({ isActive }) => isActive && !contactActive ? "active" : ""}>
          {t.home}
        </NavLink>
        <NavLink to="/Address">{t.address}</NavLink>
        <NavLink to="/about">{t.about}</NavLink>
        <a href="/HKProject#aboutUs" className={contactActive ? "active" : ""} onClick={handleContactClick}>{t.contact}</a>
        <a href="#">
          <button onClick={toggleLanguage} className="quote">
            {lang === "ar" ? "English" : "العربية"}
          </button>
        </a>
      </div>

      <button onClick={handleClick} className="expand">
        <ReorderIcon style={{ width: "2em", height: "2em" }} />
      </button>
    </div>
  );
}

export default Header;
