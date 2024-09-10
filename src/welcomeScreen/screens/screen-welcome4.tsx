import React from "react";
import "./screen-welcome4.css";
import ProgressDots from "./ui/progressDots/progressDots";
import GenericRadioOption from "./ui/radioBtns/generic-radioBtn";
import { TFunction } from "i18next";
import TaxClassContainer from "../../components/Settings/TaxCalculatorContainer";

interface ViewWelcomeScreen4Props {
  t: TFunction;
  usingTaxCalculator: Boolean;
  setUsingTaxCalculator: React.Dispatch<React.SetStateAction<Boolean>>;
  availableScreens: number;
}

const ViewWelcomeScreen4: React.FC<ViewWelcomeScreen4Props> = ({
  t,
  usingTaxCalculator,
  setUsingTaxCalculator,
  availableScreens
}) => {

  return (
    <div className="welcome-screen colorWhite">
      <div
        style={{
          top: "4vh",
          width: "100vw",
          position: "absolute",
          zIndex: 5,
        }}
      >
        <h1 className="welcome-screen-text" id="infoTitle4">{t("welcomeScreen4_Headline")}</h1>
        <br />
        <div style={{ marginLeft: "10vw", marginTop: "2vh", display: "none" }}>
          <GenericRadioOption
            label={t("welcomeScreen4_Option1")}
            value={"Nein"}
            selectedValue={usingTaxCalculator}
            onChange={setUsingTaxCalculator}
          />
          <GenericRadioOption
            label={t("welcomeScreen4_Option2")}
            value={"Ja"}
            selectedValue={usingTaxCalculator}
            onChange={setUsingTaxCalculator}
          />
        </div>
        <TaxClassContainer />

      </div>
      <ProgressDots
        steps={availableScreens}
        currentStep={3}
      />
    </div>
  );
};

export default ViewWelcomeScreen4;