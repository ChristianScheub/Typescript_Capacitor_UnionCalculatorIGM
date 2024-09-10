import WelcomeScreen5View from "../../screens/screen-welcome5";
import { useTranslation } from "react-i18next";

const WelcomeScreen5Container = ({
  closeOverlay,
  storeReduxLocal,
  setStoreReduxLocal
}: {
  closeOverlay: () => void;
  storeReduxLocal: boolean;
  setStoreReduxLocal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();


  return (
    <WelcomeScreen5View
      storeReduxLocal={storeReduxLocal}
      setStoreReduxLocal={setStoreReduxLocal}
      t={t}
    />
  );
};

export default WelcomeScreen5Container;