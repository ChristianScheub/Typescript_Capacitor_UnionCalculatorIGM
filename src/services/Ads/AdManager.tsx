import { useEffect } from "react";
import Logger from "../logger/logger";
import initializeAds from "./AdConsentForm";
import showBanner from "./AdBanner";
import showAdInterstitial from "./AdInterstitial";

const AD_INTERVAL_MINUTES = 10;

export const AdManager: React.FC = () => {
  const canShowAd = (): boolean => {
    Logger.info("Check if full screen ad can be shown");
    const lastAdTime = localStorage.getItem("lastAdTime");
    if (!lastAdTime) return true;

    const lastAdTimestamp = parseInt(lastAdTime, 10);
    const now = Date.now();
    const elapsedMinutes = (now - lastAdTimestamp) / (1000 * 60);
    return elapsedMinutes >= AD_INTERVAL_MINUTES;
  };

  const showAdWithCheck = async () => {
    if (canShowAd()) {
      try {
        Logger.info("Try to show full screen ad");
        await showAdInterstitial();
        localStorage.setItem("lastAdTime", Date.now().toString());
      } catch (err) {
        Logger.error("Error showing Interstitial ads: " + err);
      }
    }
  };

  const initialize = async () => {
    try {
      await initializeAds();
      await showBanner();
      Logger.info("Init Ad Manager");
    } catch (err) {
      Logger.error("Error initializing ads or showing banner: " + err);
    }

    setTimeout(() => {
      showAdWithCheck();
    }, 6000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      initialize();
    }, 1000);

    const interval = setInterval(() => {
      showAdWithCheck();
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return null;
};
