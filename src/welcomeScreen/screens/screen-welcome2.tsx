import React from "react";
import "../WelcomeScreen.css";
import ProgressDots from "./ui/progressDots/progressDots";
import illustration from "../secureIcon.webp";
import { TFunction } from "i18next";

const ViewWelcomeScreen2 = ({
  availableScreens,
  t
}: {
  availableScreens: number;
  t: TFunction;
}) => {

  return (
    <div className="welcome-screen colorWhite">
      <div
        style={{
          top: "20vh",
          width: "100vw",
          position: "absolute",
          textAlign: "center",
        }}
      >
        <img src={illustration} alt="Illustration" style={{ height: "30vh" }} />
        <br />
        <br />
        <br />
        <b id="infoTitle2" className="infoTextWelcome2 makeItCenter">
        {t("welcomeScreen2_Headline")}
        </b>
        <p id="infoText2" className="infoTextWelcome2 makeItCenter">
        {t("welcomeScreen2_Text")}
        </p>
      </div>
      <ProgressDots steps={availableScreens} currentStep={1} />
    </div>
  );
};

export default ViewWelcomeScreen2;