import React, { useState } from "react";
import WelcomeScreen1Container from "./SubContainer/container-welcome1";
import WelcomeScreen2Container from "./SubContainer/container-welcome2";
import WelcomeScreen3Container from "./SubContainer/container-welcome3";
import WelcomeScreen4Container from "./SubContainer/container-welcome4";
import WelcomeScreen5Container from "./SubContainer/container-welcome5";
import "./welcomeContainer.css";
import { useSwipeable } from "react-swipeable";
import FloatingBtn, { ButtonAlignment } from "../../ui/floatingBtn/floatingBtn";
import { FaArrowRight } from "react-icons/fa";


interface WelcomeContainerProps {
  closeOverlay: () => void;
}

const WelcomeContainer: React.FC<WelcomeContainerProps> = ({ closeOverlay }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [availableScreens, setAvailableScreens] = useState(4);
  const [storeReduxLocal, setStoreReduxLocal] = useState(false);


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
    if(currentScreen===3){
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
        <WelcomeScreen5Container closeOverlay={closeOverlay} storeReduxLocal={storeReduxLocal} setStoreReduxLocal={setStoreReduxLocal} />
      </div>

      <div className={`screen ${getScreenClassName(2)}`}>
        <WelcomeScreen4Container closeOverlay={closeOverlay} setAvailableScreens={setAvailableScreens} availableScreens={availableScreens} setCurrentScreen={setCurrentScreen}/>
      </div>
      <div className={`screen ${getScreenClassName(1)}`}>
        <WelcomeScreen3Container availableScreens={availableScreens} />
      </div>
      <div className={`screen ${currentScreen === 0 ? "slide-in" : "slide-out"}`} data-testid="welcome-container1">
        <WelcomeScreen1Container availableScreens={availableScreens} />
      </div>
      <FloatingBtn
        alignment={ButtonAlignment.RIGHT}
        icon={FaArrowRight}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default WelcomeContainer;