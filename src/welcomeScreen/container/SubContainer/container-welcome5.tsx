import WelcomeScreen5View from "../../screens/screen-welcome5";
import { useTranslation } from "react-i18next";

const WelcomeScreen5Container = ({
  storeReduxLocal,
  setStoreReduxLocal,
  allowedTechnicalStore,
  setAllowedTechnicalStore
}: {
  storeReduxLocal: boolean;
  setStoreReduxLocal: React.Dispatch<React.SetStateAction<boolean>>;
  allowedTechnicalStore: boolean;
  setAllowedTechnicalStore: React.Dispatch<React.SetStateAction<boolean>>;

}) => {
  const { t } = useTranslation();


  return (
    <WelcomeScreen5View
      storeReduxLocal={storeReduxLocal}
      setStoreReduxLocal={setStoreReduxLocal}
      allowedTechnicalStore={allowedTechnicalStore}
      setAllowedTechnicalStore={setAllowedTechnicalStore}
      t={t}
    />
  );
};

export default WelcomeScreen5Container;