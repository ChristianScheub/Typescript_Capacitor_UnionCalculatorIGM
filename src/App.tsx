import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate,useLocation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SalaryCalculatorContainer from "./components/Settings/SalaryCalculatorContainer";
import NavbarView from "./views/Navbar/NavbarView";
import HomeContainer from "./components/Calculations/HomeContainer";
import TaxClassContainer from "./components/Settings/TaxCalculatorContainer";
import ContainerSettings from "./components/Settings/SettingsContainer";
import Impressum from "./legal/impressum";
import Datenschutz from "./legal/datenschutz";
import TablesContainer from "./components/Calculations/TablesContainer";
import WelcomeContainer from "./welcomeScreen/container/container-welcomeScreen";
import { saveState } from "./stateManagement/localStorage";
import { useStore } from "react-redux";
import "./i18n";

const MainApp: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("home");
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const store = useStore();
  const navigate = useNavigate();

  // Navigation-Links für Swipe-Funktion
  const navLinks = useMemo(
    () => [
      { path: "/", component: "home" },
      { path: "/tables", component: "tables" },
      { path: "/info", component: "info" },
    ],
    []
  );

  // Swipe-Handler
  const handlers = useSwipeable({
    onSwipedLeft: () => nextLink(),
    onSwipedRight: () => prevLink(),
    trackMouse: true,
  });

  const nextLink = () => {
    const currentIndex = navLinks.findIndex((link) => link.component === activeComponent);
    if (currentIndex < navLinks.length - 1) {
      const nextLink = navLinks[currentIndex + 1];
      setActiveComponent(nextLink.component);
      navigate(nextLink.path);
    }
  };

  const prevLink = () => {
    const currentIndex = navLinks.findIndex((link) => link.component === activeComponent);
    if (currentIndex > 0) {
      const previousLink = navLinks[currentIndex - 1];
      setActiveComponent(previousLink.component);
      navigate(previousLink.path);
    }
  };

  // Check device type
  useEffect(() => {
    const checkDevice = async () => {
      if (window.innerWidth >= 1024) {
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

  const location = useLocation();

  return (
    <div>
      {showWelcome ? (
         <div className={isDesktop ? "desktop" : ""}>
         {location.pathname.includes('Start') && (
           <NavbarView setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
         )}
         <Routes>
           <Route path="/" element={<WelcomeContainer closeOverlay={closeWelcomeOverlay} />} />
           <Route path="/infoStart" element={<ContainerSettings />} />
           <Route path="/impressum" element={<Impressum />} />
           <Route path="/datenschutz" element={<Datenschutz />} />
           <Route path="/impressumStart" element={<Impressum />} />
           <Route path="/datenschutzStart" element={<Datenschutz />} />
         </Routes>
       </div>
      ) : (
        <div {...handlers} style={{ paddingTop: "9vh" }} className={isDesktop ? "desktop" : ""}>
          <NavbarView setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
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
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

export default App;