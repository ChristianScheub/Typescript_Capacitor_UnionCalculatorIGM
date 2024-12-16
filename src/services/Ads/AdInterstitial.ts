import { AdMob, AdOptions } from "@capacitor-community/admob";
import { Capacitor } from "@capacitor/core";
import Logger from "../logger/logger";

const showAdInterstitial = async () => {
  try {
    Logger.info("Start Interstitial Ad");
    let adId: string;
    if (Capacitor.getPlatform() === "android") {
      adId = "ca-app-pub-6250689577715326/4665142545";
    } else if (Capacitor.getPlatform() === "ios") {
      adId = "ca-app-pub-6250689577715326/6564547579";
    } else {
      adId = "ca-app-pub-6250689577715326/4665142545";
    }

    const options: AdOptions = {
      adId: adId,
      isTesting: false
    };

    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  } catch (error) {
    Logger.error("Error while loading Interstitial ad: " + error);
  }
};

export default showAdInterstitial;