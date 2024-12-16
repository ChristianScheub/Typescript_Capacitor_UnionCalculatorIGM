import { useEffect } from "react";
import Logger from "../logger/logger";
import initializeAds from "./AdConsentForm";
import showBanner from "./AdBanner";
import showAdInterstitial from "./AdInterstitial";

export const AdManager: React.FC = () => {
  const startAdInterval = () => {
    const interval = setInterval(async () => {
      try {
        await showAdInterstitial();
      } catch (err) {
        Logger.error("Error showing Interstitial ads: " + err);
      }
    }, 90000); // 90 seconds interval

    return () => clearInterval(interval);
  };

  const showFirstAd = () => {
    setTimeout(async () => {
      try {
        await showAdInterstitial();
      } catch (err) {
        Logger.error("Error showing Interstitial ads: " + err);
      }

      // Start the interval for subsequent ads
      startAdInterval();
    }, 6000); // Delay of 6 seconds
  };

  // Function to initialize ads and banner
  const initialize = async () => {
    try {
      await initializeAds();
      await showBanner();
    } catch (err) {
      Logger.error("Error initializing ads or showing banner: " + err);
    }

    // Show the first interstitial ad
    showFirstAd();
  };

  useEffect(() => {
    // Initialize ads with a 1-second delay
    const timer = setTimeout(() => {
      initialize();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};