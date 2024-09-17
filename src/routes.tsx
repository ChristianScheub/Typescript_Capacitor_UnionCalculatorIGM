import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomeContainer from "./welcomeScreen/container/container-welcomeScreen";
import HomeContainer from "./components/Calculations/HomeContainer";
import SalaryCalculatorContainer from "./components/Settings/SalaryCalculatorContainer";
import TaxClassContainer from "./components/Settings/TaxCalculatorContainer";
import TablesContainer from "./components/Calculations/TablesContainer";
import ContainerSettings from "./components/Settings/SettingsContainer";
import Impressum from "./legal/impressum";
import Datenschutz from "./legal/datenschutz";

export const getRoutes = (showWelcome: boolean, closeWelcomeOverlay: () => void) => {
  if (showWelcome) {
    return (
      <Routes>
        <Route path="/" element={<WelcomeContainer closeOverlay={closeWelcomeOverlay} />} />
        <Route path="/infoStart" element={<ContainerSettings />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressumStart" element={<Impressum />} />
        <Route path="/datenschutzStart" element={<Datenschutz />} />
      </Routes>
    );
  }

  return (
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
  );
};