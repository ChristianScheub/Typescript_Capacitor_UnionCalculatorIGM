import { useNavigate,NavigateFunction } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import UsedLibsListContainer from "../../legal/usedLibs/container_usedLibList";
import SwitchSlider from "../../ui/SwitchSlider/SwitchSlider";

interface ViewSettingsProps {
  onDatenschutzClick: (navigate: NavigateFunction) => void;
  onImpressumClick: (navigate: NavigateFunction) => void;
  onTaxSettingClick: (navigate: NavigateFunction) => void;
  onUnionSettingClick: (navigate: NavigateFunction) => void;
  onTaxInformationClick: (navigate: NavigateFunction) => void;
  onBonusInformationClick: (navigate: NavigateFunction) => void;
  onSocialSecurityInformationClick: (navigate: NavigateFunction) => void;
  useLocalStorageRedux: boolean;
  setUseLocalStorageRedux: (value: boolean) => void;
}

const ViewSettings: React.FC<ViewSettingsProps> = ({
  onDatenschutzClick,
  onImpressumClick,
  onTaxSettingClick,
  onUnionSettingClick,
  onTaxInformationClick,
  onBonusInformationClick,
  onSocialSecurityInformationClick,
  useLocalStorageRedux,
  setUseLocalStorageRedux
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className="backgroundColor"
    >
      <div
        style={{
          marginTop: "env(safe-area-inset-top)",
        }}
      >

        <div className="after-login-container">
          <h1>Einstellungen</h1>
          <hr />
            <p
              data-testid="settings-union"
              onClick={() => onUnionSettingClick(navigate)}
            >
               Tarif-/Gehalt Einstellungen
            </p>
          <hr />
            <p
              data-testid="settings-tax"
              onClick={() => onTaxSettingClick(navigate)}
            >
              Steuereinstellungen
            </p>
            <hr />
            <SwitchSlider
              checked={useLocalStorageRedux}
              onChange={(event) => setUseLocalStorageRedux(event.target.checked)}
              label="Lokal die Eingaben speichern"
            />
            <hr />

          <div className="mb-3 margin2vw">
            <h1>{t("settings_Information")}</h1>
            <i>Achtung: Das ist nur eine grobe Schätzrechnung ihres Einkommens und der Steuern/Sozialabgaben! Wir übernehmen keine Haftung für die Korrektheit der Ergebnisse.</i>

            <hr />
            <p
              data-testid="settings-edatenschutz"
              onClick={() => onBonusInformationClick(navigate)}
            >
             Sonderzahlungen Informationen
            </p>
            <hr />
            <p
              data-testid="settings-edatenschutz"
              onClick={() => onTaxInformationClick(navigate)}
            >
              Steuer Berechnung Information
            </p>
            <hr />
            <p
              data-testid="settings-edatenschutz"
              onClick={() => onSocialSecurityInformationClick(navigate)}
            >
              Berechnung der Sozialbeiträge Information
            </p>
            <hr />

            <p
              data-testid="settings-edatenschutz"
              onClick={() => onDatenschutzClick(navigate)}
            >
              {t("settings_Datenschutz")}
            </p>
            <hr />
            <p
              data-testid="settings-impressum"
              onClick={() => onImpressumClick(navigate)}
            >
              {t("settings_Impressum")}
            </p>
            <hr />
            <UsedLibsListContainer />
            <hr />
            <a
              href="https://github.com/ChristianScheub/Typescript_Capacitor_UnionCalculatorIGM"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p>GitHub Repository</p>
            </a>
            <hr />
            <br/> <br/> <br/> <br/> <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSettings;