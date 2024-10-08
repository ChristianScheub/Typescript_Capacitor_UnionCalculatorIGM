import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import HomeView from "../../views/Home/HomeView";
import { RootState } from "../../stateManagement/store";
import TaxCalculatorService from "../../services/taxCalculatorService";
import SocialSecurityCalculator from "../../services/socialSecurityCalculator/SocialSecurityCalculator";
import UnionContractCalculatorService from "../../services/unionContractCalculatorService";
import Logger from "../../services/logger/logger";
import { calculateHourlyWage } from "../../services/helper/hourlyWageCalculator";
import { AdMob, BannerAdOptions, AdmobConsentStatus, BannerAdSize, BannerAdPosition, } from '@capacitor-community/admob';
import { Capacitor } from "@capacitor/core";

const HomeContainer: React.FC = () => {
  const { salaryWithBonus } = useSelector((state: RootState) => state.salary);
  const { isChildless } = useSelector((state: RootState) => state.tax);


  Logger.info("salaryWithBonus: " + salaryWithBonus);

  // State statt useRef verwenden
  const [christmasBonus, setChristmasBonus] = useState(0);
  const [transformationsGeld, setTransformationsGeld] = useState(0);
  const [tZugA, setTZugA] = useState(0);
  const [tZugB, setTZugB] = useState(0);
  const [urlaubsgeld, setUrlaubsgeld] = useState(0);
  const [profitSharing, setProfitSharing] = useState(0);
  const [salaryWithAllBonusYear, setSalaryWithAllBonusYear] = useState(0);

  const [salaryAfterAllTaxMonthly, setSalaryAfterAllTaxMonthly] = useState(0);
  const [taxYear, setTaxYear] = useState(0);
  const [solidarityTaxYear, setSolidarityTaxYear] = useState(0);
  const [churchTaxYear, setChurchTaxYear] = useState(0);
  const [salaryAfterAllTaxYear, setSalaryAfterAllTaxYear] = useState(0);
  const [hoursWageGrossYear, setHoursWageGrossYear] = useState(0); //Brutto
  const [hoursWageNetYear, setHoursWageNetYear] = useState(0); //Netto
  const [hoursWageGrossYearWithBonus, setHoursWageGrossYearWithBonus] = useState(0); //Brutto
  const [hoursWageNetYearWithBonus, setHoursWageNetYearWithBonus] = useState(0); //Netto


  const [calculatedSalaryAfterSocialSecurityYear, setCalculatedSalaryAfterSocialSecurityYear] = useState(0);
  const [careInsuranceYear, setCareInsuranceYear] = useState(0);
  const [healthInsuranceSupplementYear, setHealthInsuranceSupplementYear] = useState(0);
  const [healthInsuranceYear, setHealthInsuranceYear] = useState(0);
  const [unemploymentInsuranceYear, setUnemploymentInsuranceYear] = useState(0);
  const [pensionInsuranceYear, setPensionInsuranceYear] = useState(0);
  let isDesktop = false;
  if (window.innerWidth >= 1024) {
    isDesktop = true;
  }



  const calculateAllValues = useCallback(() => {
    // Berechnung der Bonuszahlungen
    setChristmasBonus(UnionContractCalculatorService.caclulateChristmasBonus());
    setTransformationsGeld(UnionContractCalculatorService.calculateTransformationsGeld());
    setTZugA(UnionContractCalculatorService.calculateTZugA());
    setTZugB(UnionContractCalculatorService.calculateTZugB());
    setUrlaubsgeld(UnionContractCalculatorService.calculateUrlaubsgeld());
    setProfitSharing(UnionContractCalculatorService.calculateProfitSharing());
    setSalaryWithAllBonusYear(UnionContractCalculatorService.calculateSalaryWithAllBonus());

    if (salaryWithBonus !== null) {
      setSalaryAfterAllTaxMonthly(TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithBonus, false));

      // Berechnung der jährlichen Werte
      const calculatedSalaryWithAllBonusYear = UnionContractCalculatorService.calculateSalaryWithAllBonus();
      setTaxYear(TaxCalculatorService.calculateTax(calculatedSalaryWithAllBonusYear, true));
      setChurchTaxYear(TaxCalculatorService.calculateChurchTax(calculatedSalaryWithAllBonusYear, true));
      setSolidarityTaxYear(TaxCalculatorService.calculateSoli(calculatedSalaryWithAllBonusYear, true));
      setSalaryAfterAllTaxYear(TaxCalculatorService.calculateSalaryAfterAllTax(calculatedSalaryWithAllBonusYear, true));
    }

    // Berechnung der Sozialabgaben für das Jahr
    setCalculatedSalaryAfterSocialSecurityYear(SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
      salaryAfterAllTaxYear,
      salaryWithAllBonusYear,
      true
    ));
    setHoursWageNetYearWithBonus(SocialSecurityCalculator.calculateNetHourlyWageAfterSocialSecurity(
      salaryAfterAllTaxYear,
      salaryWithAllBonusYear
    ));
    setHoursWageGrossYearWithBonus(UnionContractCalculatorService.calculateGrossHourlyWage());

    if (salaryWithBonus) {
      setHoursWageNetYear(SocialSecurityCalculator.calculateNetHourlyWageAfterSocialSecurity(
        salaryAfterAllTaxMonthly * 12,
        salaryWithBonus * 12
      ));

      setHoursWageGrossYear(calculateHourlyWage(salaryWithBonus * 12));
    }

    setCareInsuranceYear(SocialSecurityCalculator.calculateCareInsurance(
      salaryWithAllBonusYear / 12,
      isChildless ?? false
    ) * 12);
    setHealthInsuranceYear(SocialSecurityCalculator.calculateHealthInsurance(
      salaryWithAllBonusYear / 12
    ) * 12);
    setHealthInsuranceSupplementYear(SocialSecurityCalculator.calculateHealthInsuranceSupplement(salaryWithAllBonusYear / 12) * 12);

    setUnemploymentInsuranceYear(SocialSecurityCalculator.calculateUnemploymentInsurance(
      salaryWithAllBonusYear / 12
    ) * 12);
    setPensionInsuranceYear(SocialSecurityCalculator.calculatePensionInsurance(
      salaryWithAllBonusYear / 12
    ) * 12);
  }, [salaryWithBonus, isChildless, salaryAfterAllTaxYear, salaryWithAllBonusYear, salaryAfterAllTaxMonthly]);

  useEffect(() => {
    calculateAllValues();
  }, [salaryWithBonus, isChildless, calculateAllValues]);


  //AdMob
  const initializeAds = async () => {
    if (Capacitor.isNativePlatform()) {
      await AdMob.initialize();

      const [trackingInfo, consentInfo] = await Promise.all([
        AdMob.trackingAuthorizationStatus(),
        AdMob.requestConsentInfo(),
      ]);

      if (trackingInfo.status === 'notDetermined') {
        await AdMob.requestTrackingAuthorization();
      }

      const authorizationStatus = await AdMob.trackingAuthorizationStatus();

      if (
        authorizationStatus.status === 'authorized' &&
        consentInfo.isConsentFormAvailable &&
        consentInfo.status === AdmobConsentStatus.REQUIRED
      ) {
        await AdMob.showConsentForm();
      }

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
        // npa: true // Non-personalized ads if needed
      };
      await AdMob.showBanner(options);

    }
  };

  useEffect(() => {
    initializeAds().catch((err) => {
      console.error("AdMob initialization error:", err);
    });

  }, []);

  return (
    <HomeView
      salaryWithBonus={salaryWithBonus ?? 0}
      transformationsGeld={transformationsGeld}
      tZugA={tZugA}
      tZugB={tZugB}
      urlaubsgeld={urlaubsgeld}
      profitSharing={profitSharing}
      christmasBonus={christmasBonus}
      taxYear={taxYear}
      solidarityTaxYear={solidarityTaxYear}
      churchTaxYear={churchTaxYear}
      calcultedSalaryAfterSocialSecurityYear={calculatedSalaryAfterSocialSecurityYear}
      careInsuranceYear={careInsuranceYear}
      healthInsuranceSupplementYear={healthInsuranceSupplementYear}
      healthInsuranceYear={healthInsuranceYear}
      unemploymentInsurancYear={unemploymentInsuranceYear}
      pensionInsuranceYear={pensionInsuranceYear}
      hoursWageNetYearWithBonus={hoursWageNetYearWithBonus}
      hoursWageGrossYearWithBonus={hoursWageGrossYearWithBonus}
      hoursWageNetYear={hoursWageNetYear}
      hoursWageGrossYear={hoursWageGrossYear}
      isDesktop={isDesktop}
    />
  );
};

export default HomeContainer;