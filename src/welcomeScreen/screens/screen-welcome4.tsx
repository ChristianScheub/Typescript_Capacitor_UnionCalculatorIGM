import React from "react";
import "./screen-welcome4.css";
import GenericRadioOption from "../../ui/radioBtns/generic-radioBtn";
import { TFunction } from "i18next";
import TaxClassContainer from "../../components/Settings/TaxCalculatorContainer";

interface ViewWelcomeScreen4Props {
  t: TFunction;
  usingTaxCalculator: boolean;
  setUsingTaxCalculator: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewWelcomeScreen4: React.FC<ViewWelcomeScreen4Props> = ({
  t,
  usingTaxCalculator,
  setUsingTaxCalculator,
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
        <center>
          <h1 className="welcome-screen-text" id="infoTitle4">
            {t("welcomeScreen4_Headline")}
          </h1>
        </center>
        <br />
        <div
          style={{
            marginLeft: "10vw",
            marginTop: "2vh",
            display: "none",
            color: "black",
          }}
        >
          <GenericRadioOption
            label={t("welcomeScreen4_Option1")}
            darkMode={false}
            value={"Nein"}
            selectedValue={usingTaxCalculator}
            onChange={setUsingTaxCalculator}
          />
          <GenericRadioOption
            label={t("welcomeScreen4_Option2")}
            darkMode={false}
            value={"Ja"}
            selectedValue={usingTaxCalculator}
            onChange={setUsingTaxCalculator}
          />
        </div>
        <TaxClassContainer />
      </div>
    </div>
  );
};

export default ViewWelcomeScreen4;
