import React from "react";
import EntryVideo from "../entryVideo/entryVideo";
import Intro from "../intro/intro";
import Transportations from "../transportations/transportations";
import WhyHK from "../whyHK/whyHK";
import ScrollSection from "../scrollSection/scrollSection";
import SpacerSection from "../spacerSection/spacerSection";
import Freight from "../Freight/freight";
import OurTeam from "../ourTeam/ourTeam";
import ContactUs from "../contactUs/contactUs";

function HomePage() {
  return (
    <>
      <EntryVideo />
      <Intro />
      <Transportations />
      <WhyHK />
      <ScrollSection />
      <SpacerSection />
      <Freight />
      <ContactUs />
    </>
  );
}

export default HomePage;
