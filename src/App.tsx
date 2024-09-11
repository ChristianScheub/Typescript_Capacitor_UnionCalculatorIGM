import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SalaryCalculatorContainer from "./components/Settings/SalaryCalculatorContainer";
import Navbar from "./views/Navbar/Navbar";
import HomeContainer from "./components/Calculations/HomeContainer";
import TaxClassContainer from "./components/Settings/TaxCalculatorContainer";
import ContainerSettings from "./components/Settings/SettingsContainer";
import Impressum from "./legal/impressum";
import Datenschutz from "./legal/datenschutz";
import "./i18n";
import 'typeface-roboto';
import TablesContainer from "./components/Calculations/TablesContainer";
import WelcomeContainer from "./welcomeScreen/container/container-welcomeScreen";
import { saveState } from "./stateManagement/localStorage";
import { useStore } from "react-redux";


const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("home");
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const store = useStore();

  // Check device type
  useEffect(() => {
    const checkDevice = async () => {
      if (window.innerWidth >= 1024) {
        // Assuming anything with a width >= 1024px is a laptop/desktop
        setIsDesktop(true);
      }
    };

    checkDevice();
  }, []);

  // Check if welcome has already been shown
  useEffect(() => {
    const welcomeDone = localStorage.getItem("welcomeDone");
    if (welcomeDone === "true") {
      setShowWelcome(false);
    }

  }, []);

  // Function to close the welcome overlay
  const closeWelcomeOverlay = () => {
    localStorage.setItem("welcomeDone", "true");
    setShowWelcome(false);
    if (localStorage.getItem("storeReduxLocal") === "true") {
      saveState(store);
      window.location.reload();
    }
  };

  return (
    <Router>
      <div>
        {showWelcome ? (
          <div>
            <Routes>
              <Route path="/" element={<WelcomeContainer closeOverlay={closeWelcomeOverlay} />} />
              <Route path="/infoStart" element={<ContainerSettings />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>
          </div>
        ) : (
          <>
            <div style={{
              paddingTop: isDesktop ? undefined : "10vw"
            }} className={isDesktop ? "desktop" : ""}>
              <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
              <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/salary" element={<SalaryCalculatorContainer />} />
                <Route path="/government" element={<TaxClassContainer />} />
                <Route path="/tables" element={<TablesContainer />} />
                <Route path="/info" element={<ContainerSettings />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="*" element={<HomeContainer />} />
              </Routes>

            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;