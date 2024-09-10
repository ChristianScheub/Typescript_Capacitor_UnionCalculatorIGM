import React from "react";
import "./screen-welcome4.css";
import ProgressDots from "./ui/progressDots/progressDots";
import GenericRadioOption from "./ui/radioBtns/generic-radioBtn";
import { TFunction } from "i18next";

interface ViewWelcomeScreen5Props {
  storeReduxLocal: boolean;
  setStoreReduxLocal: React.Dispatch<React.SetStateAction<boolean>>;
  allowedTechnicalStore: boolean;
  setAllowedTechnicalStore:  React.Dispatch<React.SetStateAction<boolean>>;
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
          top: "10vh",
          width: "100vw",
          position: "absolute",
          zIndex: 5,
          color: "white"
        }}
      >
        <h1 id="infoTitle4"> {t("welcomeScreen5_Headline2")}</h1>
        <br />
        <div style={{ marginLeft: "10vw", marginTop: "2vh" }}>
          <GenericRadioOption
            label={t("welcomeScreen5_Option1")}
            value={true}
            selectedValue={storeReduxLocal}
            onChange={setStoreReduxLocal}
          />
          <GenericRadioOption
            label={t("welcomeScreen5_Option2")}
            value={false}
            selectedValue={storeReduxLocal}
            onChange={setStoreReduxLocal}
          />
        </div>

        <h1 id="infoTitle4"> {t("welcomeScreen5_Headline3")}</h1>
        <p className="infoText makeItCenter" >{t("welcomeScreen5_Info2")}</p>
        <div style={{ marginLeft: "10vw", marginTop: "2vh" }}>
          <GenericRadioOption
            label={t("welcomeScreen5_Option1")}
            value={true}
            selectedValue={allowedTechnicalStore}
            onChange={setAllowedTechnicalStore}
          />
          <GenericRadioOption
            label={t("welcomeScreen5_Option2")}
            value={false}
            selectedValue={allowedTechnicalStore}
            onChange={setAllowedTechnicalStore}
          />
        </div>
      </div>
      <ProgressDots steps={4} currentStep={3} />
    </div>
  );
};

export default ViewWelcomeScreen5;