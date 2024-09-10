import "../WelcomeScreen.css";
import ProgressDots from "./ui/progressDots/progressDots";
import illustration from "../welcomeIllustration.webp";
import { TFunction } from "i18next";
import FloatingBtn, { ButtonAlignment } from "../../ui/floatingBtn/floatingBtn";
import { FaInfo } from "react-icons/fa";

const ViewWelcomeScreen1 = ({
  availableScreens,
  openInfo,
  t,
}: {
  availableScreens: number;
  openInfo: () => void;
  t: TFunction;
}) => {

  return (
    <div className="welcome-screen colorWhite">

        <p className="welcome-screen-text" id="infoText1">{t("welcomeScreen1_Headline")}</p>
      <img src={illustration} alt="Illustration" className="illustration" />
      <ProgressDots steps={availableScreens} currentStep={0} />
      <FloatingBtn
        alignment={ButtonAlignment.LEFT}
        icon={FaInfo}
        onClick={openInfo}
      />
    </div>
  );
};

export default ViewWelcomeScreen1;
