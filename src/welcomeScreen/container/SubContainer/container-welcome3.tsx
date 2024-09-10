import React from "react";
import WelcomeScreen3View from "../../screens/screen-welcome3";
import { useTranslation } from "react-i18next";

const WelcomeScreen3Container: React.FC = () => {

  const { t } = useTranslation();


  return (
    <WelcomeScreen3View
      t={t}
    />
  );
};

export default WelcomeScreen3Container;