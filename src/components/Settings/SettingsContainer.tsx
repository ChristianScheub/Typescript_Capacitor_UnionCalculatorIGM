import { NavigateFunction } from "react-router-dom";
import React, { useState } from "react";
import SettingsView from "../../views/settings/screen_settings"
import HelpTextSocialSecurityContainer from "../HelpText/HelpTextSocialSecurityContainer";
import HelpTextTaxContainer from "../HelpText/HelpTextTaxContainer";
import HelpTextBonusContainer from "../HelpText/HelpTextBonusContainer";
const ContainerSettings: React.FC = () => {
  const [isSocialSecurityPopupOpen, setSocialSecurityPopupOpen] = useState(false);
  const [isBonusPopupOpen, setBonusPopupOpen] = useState(false);
  const [isTaxPopupOpen, setTaxPopupOpen] = useState(false);
  const [useLocalStorageRedux, setUseLocalStorageRedux] = useState(() => {
    const saved = localStorage.getItem('allowedLocalStorageUse');
    return saved ? JSON.parse(saved) : false;
  });

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

  const handleSocialSecurityInformationClick = () => {
    setSocialSecurityPopupOpen(true);
  };

  // Popup-Trigger für Bonusinformationen
  const handleBonusInformationClick = () => {
    setBonusPopupOpen(true);
  };

  // Popup-Trigger für Steuerinformationen
  const handleTaxInformationClick = () => {
    setTaxPopupOpen(true);
  };

  // Methode zum Schließen der Popups
  const handleClosePopup = () => {
    setSocialSecurityPopupOpen(false);
    setBonusPopupOpen(false);
    setTaxPopupOpen(false);
  };

  const handleLocalStorageChange = (value: boolean) => {
    const confirmation = window.confirm(
      "Möchten Sie diese Einstellung wirklich ändern? Dies erfordert ein Neuladen der Webseite, und die derzeit gesetzten Werte werden verworfen."
    );
  
    if (confirmation) {
      setUseLocalStorageRedux(value);
      if (value) {
        localStorage.setItem('allowedLocalStorageUse', JSON.stringify(true));
      } else {
        localStorage.clear();
      }
      window.location.reload();
    }
  };
  


  return (
    <>
      <SettingsView
        onDatenschutzClick={handleDatenschutzClick}
        onImpressumClick={handleImpressumClick}
        onUnionSettingClick={handleUnionClick}
        onTaxSettingClick={handleTaxClick}
        onBonusInformationClick={handleBonusInformationClick}
        onTaxInformationClick={handleTaxInformationClick}
        onSocialSecurityInformationClick={handleSocialSecurityInformationClick}
        useLocalStorageRedux={useLocalStorageRedux}
        setUseLocalStorageRedux={handleLocalStorageChange}
      />

      {/* Sozialversicherungs-Popup */}
      {isSocialSecurityPopupOpen && (
        <HelpTextSocialSecurityContainer onClose={handleClosePopup} />
      )}

      {/* Bonus-Popup */}
      {isBonusPopupOpen && <HelpTextBonusContainer onClose={handleClosePopup} />}

      {/* Steuer-Popup */}
      {isTaxPopupOpen && <HelpTextTaxContainer onClose={handleClosePopup} />}
    </>
  );
};

export default ContainerSettings;