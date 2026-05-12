import React, { useEffect } from "react";
import "./ourTeam.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import StaffData from "./staffData";
import { useLanguage } from "../LanguageContext/LanguageContext";

function OurTeam() {
  const { lang } = useLanguage();
  let slideTimer;

  useEffect(() => {
    document.querySelectorAll(".staffContainerTitle").forEach((el) => {
      el.style.direction = lang === "ar" ? "rtl" : "ltr";
    });
  }, [lang]);

  function sideScroll(elementId, direction, speed, step) {
    let element = document.getElementById(elementId);

    if (!element) {
      console.error(`Element with ID "${elementId}" not found.`);
      return;
    }

    let maxScrollLeft = element.scrollWidth - element.clientLeft;

    slideTimer = setInterval(() => {
      if (direction === "left") {
        if (maxScrollLeft <= 0) {
          element.scrollLeft = maxScrollLeft;
        } else element.scrollLeft -= step;
      } else {
        if (element.scrollLeft >= maxScrollLeft) element.scrollLeft = 0;
        else element.scrollLeft += step;
      }
    }, speed);
  }

  function stopScroll() {
    clearInterval(slideTimer);
  }

  return (
    <div className="staffContainer">
      <h1 className="staffContainerTitle">
        {lang === "en" ? "OUR TEAM:" : "فريقنا:"}
      </h1>
      <div className="staffMembersContainer">
        <button
          onMouseDown={() => sideScroll("staffMembersSection", "left", 30, 10)}
          onMouseLeave={stopScroll}
          onMouseUp={stopScroll}
          onTouchStart={() => sideScroll("staffMembersSection", "left", 30, 10)}
          onTouchEnd={stopScroll}
          onTouchCancel={stopScroll}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            height: "min-content",
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
        <div className="staffMembersSection" id="staffMembersSection">
          {StaffData.map((staff) => (
            <div className="staffMember" key={staff.id}>
              <img className="staffMemberImg" src={staff.image} alt="Hamdi" />
              <div className="staffInfo">
                <a className="staffPhone">
                  <LocalPhoneIcon /> {staff.phone}
                </a>
                <a className="staffMail">
                  <MailIcon />
                  {staff.email}
                </a>
              </div>
              <h2 className="staffMemberName">{staff.name}</h2>
              <p className="staffMemberDesc">{staff.desc}</p>
            </div>
          ))}
        </div>

        <button
          onMouseEnter={() =>
            sideScroll("staffMembersSection", "right", 30, 10)
          }
          onMouseLeave={stopScroll}
          onMouseUp={stopScroll}
          onTouchStart={() =>
            sideScroll("staffMembersSection", "right", 30, 10)
          }
          onTouchEnd={stopScroll}
          onTouchCancel={stopScroll}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            width: "min-content",
          }}
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
      <div className="meetTeam">
        <button>{lang === "en" ? "Meet Our Team" : "تعرف على فريقنا"}</button>
      </div>
    </div>
  );
}

export default OurTeam;
