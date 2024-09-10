import React from "react";
import { useTranslation } from "react-i18next";
import WelcomeScreen1View from "../../screens/screen-welcome1";
import { useNavigate } from "react-router-dom";

const ContainerWelcomeScreen1: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const openInfo = () => {
    navigate("/infoStart");
  }

  return (
    <WelcomeScreen1View
      openInfo={openInfo}
      t={t}    />
  );
};

export default ContainerWelcomeScreen1;
