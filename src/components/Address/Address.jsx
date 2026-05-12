import React from "react";
import "./Address.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Address() {
  return (
    <div className="addressContainer">
      <div className="addressLine">
        <LocationOnIcon sx={{ color: "#1a0474", fontSize: "2rem" }} />
        <p>Mesrutiyet Mah. Hrant Dink Sokak Bale Apt. No:17/3 Sisli / ISTANBUL</p>
      </div>
      <div className="mapContainer">
        <iframe
          title="HK Istanbul Location"
          src="https://maps.google.com/maps?q=Hk+Istanbul+Hrant+Dink+Sokak+Sisli+Istanbul&output=embed&z=17"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Address;
