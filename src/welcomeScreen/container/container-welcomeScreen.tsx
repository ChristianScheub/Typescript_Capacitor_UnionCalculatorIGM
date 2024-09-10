import React, { useState } from "react";
import WelcomeScreen1Container from "./SubContainer/container-welcome1";
import WelcomeScreen3Container from "./SubContainer/container-welcome3";
import WelcomeScreen4Container from "./SubContainer/container-welcome4";
import WelcomeScreen5Container from "./SubContainer/container-welcome5";
import "./welcomeContainer.css";
import { useSwipeable } from "react-swipeable";
import FloatingBtn, { ButtonAlignment } from "../../ui/floatingBtn/floatingBtn";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProgressDots from "../screens/ui/progressDots/progressDots";


interface WelcomeContainerProps {
  closeOverlay: () => void;
}

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({ closeOverlay }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const availableScreens = 4;
  const [storeReduxLocal, setStoreReduxLocal] = useState(false);
  const [allowedTechnicalStore, setAllowedTechnicalStore] = useState(false);
  const { t } = useTranslation();


  const nextScreen = () => setCurrentScreen((current) => (current + 1) % availableScreens);
  const prevScreen = () => setCurrentScreen(current => {
    if (current === 0) return current;
    return (current - 1 + availableScreens) % availableScreens;
  });


  const handlers = useSwipeable({
    onSwipedLeft: () => nextScreen(),
    onSwipedRight: () => prevScreen(),
    trackMouse: true,
    trackTouch: true,
  });

  const getScreenClassName = (screenNumber: number): string => {
    if (currentScreen === screenNumber) return "slide-in";
    return "hide";
  };

  const handleSubmit = () => {
    console.log(currentScreen);
    if (currentScreen === 3) {
      if (!allowedTechnicalStore) {
        alert(t("welcomeScreen5_NeedTechnicalStorage"));
        return;
      }
      if (storeReduxLocal) {
        localStorage.setItem("storeReduxLocal", storeReduxLocal.toString());
      }
      closeOverlay();
    }
    nextScreen();
  }


  return (
    <div {...handlers} className="welcome-container" data-testid="welcome-container">
      <div className={`screen ${getScreenClassName(3)}`}>
        <WelcomeScreen5Container storeReduxLocal={storeReduxLocal} setStoreReduxLocal={setStoreReduxLocal} allowedTechnicalStore={allowedTechnicalStore} setAllowedTechnicalStore={setAllowedTechnicalStore} />
      </div>

      <div className={`screen ${getScreenClassName(2)}`}>
        <WelcomeScreen4Container />
      </div>
      <div className={`screen ${getScreenClassName(1)}`}>
        <WelcomeScreen3Container />
      </div>
      <div className={`screen ${currentScreen === 0 ? "slide-in" : "slide-out"}`} data-testid="welcome-container1">
        <WelcomeScreen1Container />
      </div>
      <FloatingBtn
        alignment={ButtonAlignment.RIGHT}
        icon={FaArrowRight}
        onClick={handleSubmit}
      />
      <ProgressDots steps={availableScreens} currentStep={currentScreen} />


    </div>
  );
};

export default WelcomeContainer;