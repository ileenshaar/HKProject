import React, { useEffect, useRef } from "react";
import "./entryVideo.css";

function EntryVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay blocked or failed:", error);
        });
      }
    }
  }, []);

  return (
    <div className="entryVideo">
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source
          src={`${process.env.PUBLIC_URL}/hk-entry-video.mp4`}
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default EntryVideo;
