import React, { useState } from "react";
import WelcomeScreen1Container from "./SubContainer/container-welcome1";
import WelcomeScreen3Container from "./SubContainer/container-welcome3";
import WelcomeScreen4Container from "./SubContainer/container-welcome4";
import WelcomeScreen5Container from "./SubContainer/container-welcome5";
import "./welcomeContainer.css";
import FloatingBtn, { ButtonAlignment } from "../../ui/floatingBtn/floatingBtn";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ProgressDots from "../../ui/progressDots/progressDots";
import { useSwipeNavigation } from "../../services/helper/navigationUtils";

interface WelcomeContainerProps {
  closeOverlay: () => void;
}

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({ closeOverlay }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const availableScreens = 4;
  const [storeReduxLocal, setStoreReduxLocal] = useState(false);
  const [allowedTechnicalStore, setAllowedTechnicalStore] = useState(false);
  const { t } = useTranslation();

  const screens = [
    { component: "welcome1", screen: <WelcomeScreen1Container /> },
    { component: "welcome3", screen: <WelcomeScreen3Container /> },
    { component: "welcome4", screen: <WelcomeScreen4Container /> },
    {
      component: "welcome5",
      screen: (
        <WelcomeScreen5Container
          storeReduxLocal={storeReduxLocal}
          setStoreReduxLocal={setStoreReduxLocal}
          allowedTechnicalStore={allowedTechnicalStore}
          setAllowedTechnicalStore={setAllowedTechnicalStore}
        />
      ),
    },
  ];

  const handleSubmit = () => {
    if (currentScreen === availableScreens - 1) {
      if (!allowedTechnicalStore) {
        alert(t("welcomeScreen5_NeedTechnicalStorage"));
        return;
      }
      if (storeReduxLocal) {
        localStorage.setItem("storeReduxLocal", storeReduxLocal.toString());
      }
      closeOverlay();
    } else {
      setCurrentScreen((current) => current + 1);
    }
  };

  // Swipe and Key Navigation
  const handlers = useSwipeNavigation({
    navLinks: Array.from({ length: availableScreens }, (_, index) => ({
      path: "", 
      component: index.toString()
    })),
    activeComponent: currentScreen.toString(),
    setActiveComponent: (component) => setCurrentScreen(parseInt(component)),
    enable: true,
    onEnd: handleSubmit
  });

  const getScreenClassName = (screenNumber: number): string => {
    if (currentScreen === screenNumber) return "slide-in";
    return "hide";
  };
  

  return (
    <div {...handlers} className="welcome-container" data-testid="welcome-container">
      {screens.map((screenObj, index) => (
        <div key={index} className={`screen ${getScreenClassName(index)}`}>
          {screenObj.screen}
        </div>
      ))}

      <FloatingBtn
        alignment={ButtonAlignment.RIGHT}
        icon={FaArrowRight}
        onClick={handleSubmit}
        ariaLabelledBy="Continue Button"
      />
      <ProgressDots steps={availableScreens} currentStep={currentScreen} />
    </div>
  );
};

export default WelcomeContainer;