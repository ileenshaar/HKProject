import React, { useEffect, useRef } from "react";
import "./whyHK.css";

function WhyHK() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const circles = section.querySelectorAll(".circle1, .circle3");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation classes to each circle with a slight delay
          circles.forEach((circle, index) => {
            setTimeout(() => {
              circle.classList.add("animate");
            }, index * 300); // Adjust delay (300ms between each)
          });
        } else {
          // Remove animation classes to reset animation on exit
          circles.forEach((circle) => {
            circle.classList.remove("animate");
          });
        }
      },
      {
        threshold: 0.4, // Trigger when 50% of the section is visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const circles = section.querySelectorAll(".circle2, .circle4");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation classes to each circle with a slight delay
          circles.forEach((circle, index) => {
            setTimeout(() => {
              circle.classList.add("animate");
            }, index * 300); // Adjust delay (300ms between each)
          });
        } else {
          // Remove animation classes to reset animation on exit
          circles.forEach((circle) => {
            circle.classList.remove("animate");
          });
        }
      },
      {
        threshold: 0.7, // Trigger when 50% of the section is visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    <div className="circlesContainrer" ref={sectionRef}>
      <h1 className="titleSmallScreen">WHY KH?</h1>

      <div className="circleDual">
        <div className="circle1">
          <h1>Networking</h1>
          <p>
            Proud members of trusted networks and International organizations,
            including IATA, WCA, JCTRANS, FENEX and more.
          </p>
        </div>
        <div className="circle3">
          <h1>Worldwide</h1>
          <p>
            With multiple Network offices all over the world and our own offices
            in Europe, India, and HK China, we offer global freight know-how.
          </p>
        </div>
      </div>

      <h1 className="title">WHY KH?</h1>

      <div className="circleDual">
        <div className="circle2">
          <h1>Qualified</h1>
          <p>
            We work with the highest standards and we have an ISO verification
            that proves it.
          </p>
        </div>
        <div className="circle4">
          <h1>Insured</h1>
          <p>
            All our transfers include Legal Liability covering $1.000.000 for
            any one incident or occurrence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyHK;
