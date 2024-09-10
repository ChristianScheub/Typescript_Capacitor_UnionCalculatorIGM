import React from "react";
import WelcomeScreen2View from "../../screens/screen-welcome2";
import { useTranslation } from "react-i18next";

interface ContainerWelcomeScreen2Props {
  availableScreens: number;
}

const ContainerWelcomeScreen2: React.FC<ContainerWelcomeScreen2Props> = ({
  availableScreens,
}) => {
  const { t } = useTranslation();

  return (
    <WelcomeScreen2View availableScreens={availableScreens} t={t} />
  );
};

export default ContainerWelcomeScreen2;