import React from "react";
import "../WelcomeScreen.css";
import { TFunction } from "i18next";
import SalaryCalculatorContainer from "../../components/Settings/SalaryCalculatorContainer";

interface ViewWelcomeScreen3Props {
  t: TFunction;
}

const ViewWelcomeScreen3: React.FC<ViewWelcomeScreen3Props> = ({
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
    </div>
  );
};

export default ViewWelcomeScreen3;