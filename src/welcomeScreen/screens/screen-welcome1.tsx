import "../WelcomeScreen.css";
import illustration from "../AppImage.webp";
import { TFunction } from "i18next";
import FloatingBtn, { ButtonAlignment } from "../../ui/floatingBtn/floatingBtn";
import { FaInfo } from "react-icons/fa";

const ViewWelcomeScreen1 = ({
  openInfo,
  t,
}: {
  openInfo: () => void;
  t: TFunction;
}) => {

  return (
    <div className="welcome-screen colorWhite">

      <p className="welcome-screen-text" id="infoText1">{t("welcomeScreen1_Headline")}</p>
      <img src={illustration} alt="Illustration" className="illustration" />
      <i className="welcome-screen-text" id="infoText2">{t("welcomeScreen1_info")}</i>

      <FloatingBtn
        alignment={ButtonAlignment.LEFT}
        icon={FaInfo}
        onClick={openInfo}
      />
    </div>
  );
};

export default ViewWelcomeScreen1;