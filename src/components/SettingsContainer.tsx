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
  const handleTaxClick = (navigate: NavigateFunction) => {
    navigate("/government");
};
const handleUnionClick = (navigate: NavigateFunction) => {
    navigate("/salary");
};
  


 
  return (
    <SettingsView
      onDatenschutzClick={handleDatenschutzClick}
      onImpressumClick={handleImpressumClick}
      onUnionSettingClick={handleUnionClick}
      onTaxSettingClick={handleTaxClick}
    />
  );
};

export default ContainerSettings;