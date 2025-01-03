import "./App.css";
import Header from "./components/header/header";
import EntryVideo from "./components/entryVideo/entryVideo";
import Intro from "./components/intro/intro";
import Transportations from "./components/transportations/transportations";
import WhyHK from "./components/whyHK/whyHK";
import ScrollSection from "./components/scrollSection/scrollSection";
import SpacerSection from "./components/spacerSection/spacerSection";
import Freight from "./components/Freight/freight";
import OurTeam from "./components/ourTeam/ourTeam";
import ContactUs from "./components/contactUs/contactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <EntryVideo />
      <Intro />
      <Transportations />
      <WhyHK />
      <ScrollSection />
      <SpacerSection />
      <Freight />
      <OurTeam />
      <ContactUs />
      {/* <div style={{ margin: "500px" }}></div> */}
    </div>
  );
}

export default App;
