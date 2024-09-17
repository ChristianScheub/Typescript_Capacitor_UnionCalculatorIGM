import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarView from "./views/Navbar/NavbarView";
import { saveState } from "./stateManagement/localStorage";
import { useStore } from "react-redux";
import "./i18n";
import { useSwipeNavigation } from "./services/helper/navigationUtils";
import { useDeviceCheck } from "./services/helper/useDeviceCheck";
import { makeStatusBarTransparent } from "./services/helper/statusBarUtils";
import { getRoutes } from "./routes";

const MainApp: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("home");
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  const isDesktop = useDeviceCheck();
  const store = useStore();
  const location = useLocation();

  // Swipe and Key Navigation
  const handlers = useSwipeNavigation({
    navLinks: [
      { path: "/", component: "home" },
      { path: "/tables", component: "tables" },
      { path: "/info", component: "info" }
    ],
    activeComponent,
    setActiveComponent,
    enable: !showWelcome,
  });

  // Check if welcome has already been shown
  useEffect(() => {
    if (localStorage.getItem("welcomeDone") === "true") {
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

  makeStatusBarTransparent();

  return (
    <div {...handlers} style={{ paddingTop: showWelcome ? "0" : "9vh" }} className={isDesktop ? "desktop" : ""}>
      {(showWelcome && location.pathname.includes('Start')) && (
        <NavbarView setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      )}
      {!showWelcome && <NavbarView setActiveComponent={setActiveComponent} activeComponent={activeComponent} />}

      {getRoutes(showWelcome, closeWelcomeOverlay)}
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