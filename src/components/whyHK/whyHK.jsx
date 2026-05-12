import React, { useEffect, useRef } from "react";
import "./whyHK.css";
import { useLanguage } from "../LanguageContext/LanguageContext";

function WhyHK() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const circles = sectionRef.current.querySelectorAll(
      ".circle1, .circle2, .circle3, .circle4"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    circles.forEach((circle) => observer.observe(circle));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="circlesContainrer" ref={sectionRef}>
      <h1 className="titleSmallScreen">WHY HK?</h1>

      <div className="circleDual">
        <div className="circle1">
          <h1>Trust</h1>
          <p>{t.trust}</p>
        </div>
        <div className="circle3">
          <h1>Services</h1>
          <p>{t.services}</p>
        </div>
      </div>

      <h1 className="title">WHY HK?</h1>

      <div className="circleDual">
        <div className="circle2">
          <h1>Experience</h1>
          <p>{t.experience}</p>
        </div>
        <div className="circle4">
          <h1>Partnership</h1>
          <p>{t.partnership}</p>
        </div>
      </div>
    </div>
  );
}

export default WhyHK;
