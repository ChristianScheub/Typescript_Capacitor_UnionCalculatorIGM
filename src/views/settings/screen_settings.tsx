import { useNavigate, NavigateFunction } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import UsedLibsListContainer from "../../legal/usedLibs/container_usedLibList";
import SwitchSlider from "../../ui/switchSlider/SwitchSlider";

interface ViewSettingsProps {
  onDatenschutzClick: (navigate: NavigateFunction) => void;
  onImpressumClick: (navigate: NavigateFunction) => void;
  onTaxSettingClick: (navigate: NavigateFunction) => void;
  onUnionSettingClick: (navigate: NavigateFunction) => void;
  onTaxInformationClick: (navigate: NavigateFunction) => void;
  onBonusInformationClick: (navigate: NavigateFunction) => void;
  onSocialSecurityInformationClick: (navigate: NavigateFunction) => void;
  onDeleteAllClick: () => void;
  isInfoStart: boolean;
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
  onDeleteAllClick,
  isInfoStart,
  useLocalStorageRedux,
  setUseLocalStorageRedux,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="backgroundColor">
      <div>
        <br />

        <div className="after-login-container">
          {!isInfoStart && (
            <>
              <h1>{t("settings_Title")}</h1>
              <hr />
              <p
                data-testid="settings-union"
                onClick={() => onUnionSettingClick(navigate)}
              >
                {t("settings_Union")}
              </p>
              <hr />
              <p
                data-testid="settings-tax"
                onClick={() => onTaxSettingClick(navigate)}
              >
                {t("settings_Tax")}
              </p>
              <hr />
              <p
                data-testid="settings-delete-all"
                onClick={() => onDeleteAllClick()}
              >
                {t("settings_DeleteAll")}
              </p>

              <hr />
              <SwitchSlider
                checked={useLocalStorageRedux}
                onChange={(event) =>
                  setUseLocalStorageRedux(event.target.checked)
                }
                label={t("settings_SaveLocally")}
              />
              <hr />
            </>
          )}

          <div className="mb-3 margin2vw">
            <h1>{t("settings_Information")}</h1>
            <i>{t("warning_calulcationIsEstimation")}</i>
            <hr />
            <p
              data-testid="settings-edatenschutz"
              onClick={() => onBonusInformationClick(navigate)}
            >
              {t("settings_BonusInfo")}
            </p>
            <hr />
            <p
              data-testid="settings-edatenschutz"
              onClick={() => onTaxInformationClick(navigate)}
            >
              {t("settings_TaxInfo")}
            </p>
            <hr />
            <p
              data-testid="settings-edatenschutz"
              onClick={() => onSocialSecurityInformationClick(navigate)}
            >
              {t("settings_SocialSecurityInfo")}
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
              <p>{t("settings_GitHubRepo")}</p>
            </a>
            <hr />
            <br /> <br /> <br /> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSettings;
