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
  const store = useStore();

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
          </>
        )}
      </div>
    </Router>
  );
};

export default App;