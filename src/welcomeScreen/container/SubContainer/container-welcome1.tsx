import React from "react";
import { useTranslation } from "react-i18next";
import WelcomeScreen1View from "../../screens/screen-welcome1";

interface ContainerWelcomeScreen1Props {
  availableScreens: number;
}

const ContainerWelcomeScreen1: React.FC<ContainerWelcomeScreen1Props> = ({
  availableScreens,
}) => {
  const { t } = useTranslation();

  return (
    <WelcomeScreen1View
      availableScreens={availableScreens}
      t={t}
    />
  );
};

export default ContainerWelcomeScreen1;