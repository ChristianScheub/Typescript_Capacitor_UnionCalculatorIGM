import React from "react";
import "./screen-welcome4.css";
import GenericRadioOption from "./ui/radioBtns/generic-radioBtn";
import { TFunction } from "i18next";
import Card from "../../ui/Card/Card";

interface ViewWelcomeScreen5Props {
  storeReduxLocal: boolean;
  setStoreReduxLocal: React.Dispatch<React.SetStateAction<boolean>>;
  allowedTechnicalStore: boolean;
  setAllowedTechnicalStore: React.Dispatch<React.SetStateAction<boolean>>;
  t: TFunction;
}

const ViewWelcomeScreen5: React.FC<ViewWelcomeScreen5Props> = ({
  storeReduxLocal,
  setStoreReduxLocal,
  allowedTechnicalStore,
  setAllowedTechnicalStore,
  t,
}) => {

  return (
    <div className="welcome-screen colorWhite">
      <div
        style={{
          top: "4vh",
          width: "100vw",
          position: "absolute",
          zIndex: 5,
          paddingBottom: "10vh"
        }}
      >
        <h1 className="welcome-screen-text infoTextWelcome2 makeItCenter" id="infoTitle2">
          {t("welcomeScreen5_Headline")}
        </h1>

        <Card>
          <h3> {t("welcomeScreen5_Headline2")}</h3>
          <br />
          <GenericRadioOption
            label={t("welcomeScreen5_Option1")}
            darkMode={true}
            value={true}
            selectedValue={storeReduxLocal}
            onChange={setStoreReduxLocal}
          />
          <GenericRadioOption
            label={t("welcomeScreen5_Option2")}
            darkMode={true}
            value={false}
            selectedValue={storeReduxLocal}
            onChange={setStoreReduxLocal}
          />
        </Card>
        <br />
        <Card>
          <h3> {t("welcomeScreen5_Headline3")}</h3>
          <p className="infoText" >{t("welcomeScreen5_Info2")}</p>
          <GenericRadioOption
            label={t("welcomeScreen5_Option1")}
            darkMode={true}
            value={true}
            selectedValue={allowedTechnicalStore}
            onChange={setAllowedTechnicalStore}
          />
          <GenericRadioOption
            label={t("welcomeScreen5_Option2")}
            darkMode={true}
            value={false}
            selectedValue={allowedTechnicalStore}
            onChange={setAllowedTechnicalStore}
          />
        </Card>
      </div>
    </div>
  );
};

export default ViewWelcomeScreen5;