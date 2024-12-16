import { useEffect } from "react";
import Logger from "../logger/logger";
import initializeAds from "./AdConsentForm";
import showBanner from "./AdBanner";
import showAdInterstitial from "./AdInterstitial";

export const AdManager: React.FC = () => {
  useEffect(() => {
    const initialize = async () => {
      try {
        // Initialize ads and display the banner
        await initializeAds();
        await showBanner();
      } catch (err) {
        Logger.error("Error initializing ads or showing banner: " + err);
      }
  
      // Delay the first interstitial ad by 6 seconds
      setTimeout(async () => {
        try {
          await showAdInterstitial();
        } catch (err) {
          Logger.error("Error showing Interstitial ads: " + err);
        }
  
        // Repeat showing interstitial ads every 90 seconds
        const interval = setInterval(async () => {
          try {
            await showAdInterstitial();
          } catch (err) {
            Logger.error("Error showing Interstitial ads: " + err);
          }
        }, 90000);
  
        return () => clearInterval(interval);
      }, 6000);
    };
  
    const timer = setTimeout(initialize, 1000);
  
    return () => clearTimeout(timer);
  }, []);


  return null;
};