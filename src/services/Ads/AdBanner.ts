import { AdMob, BannerAdOptions, BannerAdPosition, BannerAdSize } from "@capacitor-community/admob";
import { Capacitor } from "@capacitor/core";

const showBanner = async () => {
    let adId: string;
    if (Capacitor.getPlatform() === 'android') {
      adId = 'ca-app-pub-6250689577715326/5496005964'; // Android Ad ID
    } else if (Capacitor.getPlatform() === 'ios') {
      adId = 'ca-app-pub-6250689577715326/2958436560'; // iOS Ad ID
    } else {
      // If another platform is used, use default ID or logic
      adId = 'ca-app-pub-6250689577715326/5496005964';
    }

    const options: BannerAdOptions = {
      adId: adId,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: false,
    };
    await AdMob.showBanner(options);
  };
export default showBanner;