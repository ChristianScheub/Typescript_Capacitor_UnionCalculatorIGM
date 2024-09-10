import { NavigateFunction, useLocation } from "react-router-dom";
import React, { useState } from "react";
import SettingsView from "../../views/settings/screen_settings"
import HelpTextSocialSecurityContainer from "../HelpText/HelpTextSocialSecurityContainer";
import HelpTextTaxContainer from "../HelpText/HelpTextTaxContainer";
import HelpTextBonusContainer from "../HelpText/HelpTextBonusContainer";
import { useTranslation } from "react-i18next";
const ContainerSettings: React.FC = () => {
  const [isSocialSecurityPopupOpen, setIsSocialSecurityPopupOpen] = useState(false);
  const [isBonusPopupOpen, setIsBonusPopupOpen] = useState(false);
  const [isTaxPopupOpen, setIsTaxPopupOpen] = useState(false);
  const [useLocalStorageRedux, setUseLocalStorageRedux] = useState(() => {
    const saved = localStorage.getItem('allowedLocalStorageUse');
    return saved ? JSON.parse(saved) : false;
  });
  const { t } = useTranslation();
  const location = useLocation();

  const isInfoStart = location.pathname.includes("infoStart");

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
    setIsSocialSecurityPopupOpen(true);
  };

  const handleBonusInformationClick = () => {
    setIsBonusPopupOpen(true);
  };

  const handleTaxInformationClick = () => {
    setIsTaxPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsSocialSecurityPopupOpen(false);
    setIsBonusPopupOpen(false);
    setIsTaxPopupOpen(false);
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

  const handleDeleteAllClick = async (): Promise<void> => {
    if (window.confirm(t("settings_Dialog_DeleteAll"))) {
      localStorage.clear();
      alert(t("settings_Dialog_DeleteAllSuccessful"));
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
        onDeleteAllClick={handleDeleteAllClick}
        isInfoStart={isInfoStart}
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