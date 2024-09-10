import React, { useState } from "react";
import WelcomeScreen4View from "../../screens/screen-welcome4";
import { useTranslation } from "react-i18next";

interface WelcomeScreen4ContainerProps {
  closeOverlay: (password: string) => void;
  setAvailableScreens: (numScreens: number) => void;
  setCurrentScreen: (num: number) => void;
  availableScreens: number;
}

const WelcomeScreen4Container: React.FC<WelcomeScreen4ContainerProps> = ({
  closeOverlay,
  setAvailableScreens,
  setCurrentScreen,
  availableScreens,
}) => {
  const { t } = useTranslation();
  const [usingTaxCalculator, setUsingTaxCalculator] = useState<Boolean>(false);

  return (
    <WelcomeScreen4View
      t={t}
      usingTaxCalculator={usingTaxCalculator}
      setUsingTaxCalculator={setUsingTaxCalculator}
      availableScreens={availableScreens}
    />
  );
};

export default WelcomeScreen4Container;