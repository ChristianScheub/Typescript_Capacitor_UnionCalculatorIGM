import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SalaryCalculatorContainer from "./components/SalaryCalculatorContainer";
import Navbar from "./views/Navbar/Navbar";
import HomeContainer from "./components/HomeContainer";
import TaxClassContainer from "./components/TaxCalculatorContainer";
import ContainerSettings from "./components/container_settings";
import Impressum from "./legal/impressum";
import Datenschutz from "./legal/datenschutz";
import "./i18n";

const App: React.FC = () => {

  const [activeComponent, setActiveComponent] = useState<string>("home");


  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navbar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/salary" element={<SalaryCalculatorContainer />} />
            <Route path="/government" element={<TaxClassContainer />} />
            <Route path="/info" element={<ContainerSettings />} />
            <Route path="/impressum" element={<Impressum />} /> {/* Neue Route für Impressum */}
            <Route path="/datenschutz" element={<Datenschutz />} /> {/* Neue Route für Datenschutz */}
            <Route path="*" element={<HomeContainer />} /> {/* Default Route für unbekannte Pfade */}
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
