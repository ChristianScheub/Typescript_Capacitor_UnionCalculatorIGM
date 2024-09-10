import React from "react";
import "../WelcomeScreen.css";
import ProgressDots from "./ui/progressDots/progressDots";
import { TFunction } from "i18next";
import SalaryCalculatorContainer from "../../components/Settings/SalaryCalculatorContainer";

interface ViewWelcomeScreen3Props {
  availableScreens: number;
  t: TFunction;
}

const ViewWelcomeScreen3: React.FC<ViewWelcomeScreen3Props> = ({
  availableScreens,
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
        }}
      >

        <h1 className="welcome-screen-text infoTextWelcome2 makeItCenter" id="infoTitle2">
          {t("welcomeScreen3_Headline")}
        </h1>

        <SalaryCalculatorContainer />

        <br />
      </div>
      <ProgressDots steps={availableScreens} currentStep={2} />
    </div>

  );
};

export default ViewWelcomeScreen3;