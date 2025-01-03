import React from "react";
import "./entryVideo.css";
function EntryVideo() {
  return (
    <div className="entryVideo">
      <video width="100%" height="100%" autoPlay muted loop>
        <source
          src="https://marinair.gr/wp-content/uploads/2023/08/Marinair-cargo-services_promo.mp4"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default EntryVideo;
