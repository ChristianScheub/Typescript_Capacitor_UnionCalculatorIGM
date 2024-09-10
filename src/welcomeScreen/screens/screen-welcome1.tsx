import "../WelcomeScreen.css";
import ProgressDots from "./ui/progressDots/progressDots";
import illustration from "../welcomeIllustration.webp";
import { TFunction } from "i18next";

const ViewWelcomeScreen1 = ({
  availableScreens,
  t,
}: {
  availableScreens: number;
  t: TFunction;
}) => {
  return (
    <div className="welcome-screen colorWhite">

        <p id="infoText1">{t("welcomeScreen1_Headline")}</p>
      <img src={illustration} alt="Illustration" className="illustration" />
      <ProgressDots steps={availableScreens} currentStep={0} />
    </div>
  );
};

export default ViewWelcomeScreen1;
