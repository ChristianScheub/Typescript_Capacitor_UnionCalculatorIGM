import React from "react";
import { useTranslation } from "react-i18next";
import WelcomeScreen1View from "../../screens/screen-welcome1";
import { useNavigate } from "react-router-dom";

interface ContainerWelcomeScreen1Props {
  availableScreens: number;
}

const ContainerWelcomeScreen1: React.FC<ContainerWelcomeScreen1Props> = ({
  availableScreens,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const openInfo = () => {
    navigate("/infoStart");
  }

  return (
    <WelcomeScreen1View
      availableScreens={availableScreens}
      openInfo={openInfo}
      t={t}
    />
  );
};

export default ContainerWelcomeScreen1;