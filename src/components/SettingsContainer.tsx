import { NavigateFunction } from "react-router-dom";
import React from "react";
import SettingsView from "../views/info/screen_settings"
const ContainerSettings: React.FC = () => {

  const handleImpressumClick = (navigate: NavigateFunction) => {
      navigate("/impressum");
  };
  const handleDatenschutzClick = (navigate: NavigateFunction) => {
      navigate("/datenschutz");
  };


 
  return (
    <SettingsView
      onDatenschutzClick={handleDatenschutzClick}
      onImpressumClick={handleImpressumClick}
    />
  );
};

export default ContainerSettings;