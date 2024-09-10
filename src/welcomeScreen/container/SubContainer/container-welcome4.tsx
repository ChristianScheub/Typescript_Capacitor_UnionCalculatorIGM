import React, { useState } from "react";
import WelcomeScreen4View from "../../screens/screen-welcome4";
import { useTranslation } from "react-i18next";

const WelcomeScreen4Container: React.FC = () => {
  const { t } = useTranslation();
  const [usingTaxCalculator, setUsingTaxCalculator] = useState<boolean>(false);

  return (
    <WelcomeScreen4View
      t={t}
      usingTaxCalculator={usingTaxCalculator}
      setUsingTaxCalculator={setUsingTaxCalculator}
    />
  );
};

export default WelcomeScreen4Container;