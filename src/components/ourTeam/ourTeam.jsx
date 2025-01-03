import React from "react";
import "./ourTeam.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import StaffData from "./staffData";

function OurTeam() {
  let slideTimer;

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
      <h1 className="staffContainerTitle">OUR TEAM</h1>
      <div className="staffMembersContainer">
        <button
          onMouseEnter={() => sideScroll("staffMembersSection", "left", 30, 10)}
          onMouseLeave={stopScroll}
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
            <div className="staffMember">
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
        <button>MEET THE TEAM</button>
      </div>
    </div>
  );
}

export default OurTeam;
