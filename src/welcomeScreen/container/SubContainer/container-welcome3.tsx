import React from "react";
import WelcomeScreen3View from "../../screens/screen-welcome3";
import { useTranslation } from "react-i18next";

interface WelcomeScreen3ContainerProps {
  availableScreens: number;
}

const WelcomeScreen3Container: React.FC<WelcomeScreen3ContainerProps> = ({
  availableScreens,
}) => {

  const { t } = useTranslation();


  return (
    <WelcomeScreen3View
      availableScreens={availableScreens}
      t={t}
    />
  );
};

export default WelcomeScreen3Container;