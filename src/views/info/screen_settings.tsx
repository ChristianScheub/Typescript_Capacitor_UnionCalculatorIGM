import { useNavigate,NavigateFunction } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import UsedLibsListContainer from "../../legal/usedLibs/container_usedLibList";

interface ViewSettingsProps {
  onDatenschutzClick: (navigate: NavigateFunction) => void;
  onImpressumClick: (navigate: NavigateFunction) => void;
}

const ViewSettings: React.FC<ViewSettingsProps> = ({
  onDatenschutzClick,
  onImpressumClick,
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
          <div className="mb-3 margin2vw">
            <h1>{t("settings_Information")}</h1>
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
            <b>{t("settings_Warning")}</b>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSettings;
