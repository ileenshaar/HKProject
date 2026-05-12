import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/aboutUs";
import AirTransportationsDesc from "./components/transportationsDesc/AirTransportationsDesc.jsx";
import SeaTransportationsDesc from "./components/transportationsDesc/SeaTransportationsDesc.jsx";
import RoadTransportationsDesc from "./components/transportationsDesc/RoadTransportationsDesc.jsx";
import ProjectCargoDesc from "./components/transportationsDesc/ProjectCargoDesc.jsx";
import Address from "./components/Address/Address.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import { LanguageProvider } from "./components/LanguageContext/LanguageContext.js";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            {/* Home route directly renders all components */}
            <Route path="/HKProject" element={<HomePage />} />

            {/* About Us page */}
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/RoadTransportationsDesc"
              element={<RoadTransportationsDesc />}
            />
            <Route
              path="/AirTransportationsDesc"
              element={<AirTransportationsDesc />}
            />
            <Route
              path="/SeaTransportationsDesc"
              element={<SeaTransportationsDesc />}
            />
            <Route path="/ProjectCargoDesc" element={<ProjectCargoDesc />} />
            <Route path="/Address" element={<Address />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
