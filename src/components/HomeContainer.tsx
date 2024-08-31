import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import HomeView from "../views/Home/HomeView";
import { RootState } from "../stateManagement/store";
import TaxCalculatorService from "../services/taxCalculator/TaxCalculatorService";
import SocialSecurityCalculator from "../services/socialSecurityCalculator/SocialSecurityCalculator";
import UnionContractCalculatorService from "../services/unionContractCalculatorService";
import Logger from "../services/logger/logger";

const HomeContainer: React.FC = () => {
  const { salary, salaryWithBonus, isChildless } = useSelector((state: RootState) => state.salaryCalculator);

  Logger.info("salaryWithBonus salaryWithBonus: " + salaryWithBonus);

  const christmasBonus = useRef(UnionContractCalculatorService.caclulateChristmasBonus());
  const transformationsGeld = useRef(UnionContractCalculatorService.calculateTransformationsGeld());
  const tZugA = useRef(UnionContractCalculatorService.calculateTZugA());
  const tZugB = useRef(UnionContractCalculatorService.calculateTZugB());
  const urlaubsgeld = useRef(UnionContractCalculatorService.calculateUrlaubsgeld());
  const profitSharing = useRef(UnionContractCalculatorService.calculateProfitSharing());
  const salaryWithAllBonusYear = useRef(UnionContractCalculatorService.calculateSalaryWithAllBonus());
  
  const taxMonthly = useRef(0);
  const solidarityTaxMonthly = useRef(0);
  const salaryAfterAllTaxMonthly = useRef(0);
  const taxYear = useRef(0);
  const solidarityTaxYear = useRef(0);
  const salaryAfterAllTaxYear = useRef(0);

  const calcultedSalaryAfterSocialSecurityYear = useRef(0);
  const careInsuranceYear = useRef(0);
  const healthInsuranceYear = useRef(0);
  const unemploymentInsurancYear = useRef(0);
  const pensionInsuranceYear = useRef(0);

  useEffect(() => {
    if (salaryWithBonus) {
      taxMonthly.current = TaxCalculatorService.calculateTax(salaryWithBonus, false);
      solidarityTaxMonthly.current = TaxCalculatorService.calculateSoli(salaryWithBonus, false);
      salaryAfterAllTaxMonthly.current = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithBonus, false);
      taxYear.current = TaxCalculatorService.calculateTax(salaryWithAllBonusYear.current, true);
      solidarityTaxYear.current = TaxCalculatorService.calculateSoli(salaryWithAllBonusYear.current, true);
      salaryAfterAllTaxYear.current = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithAllBonusYear.current, true);
    }

    calcultedSalaryAfterSocialSecurityYear.current = SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
      salaryAfterAllTaxYear.current,
      salaryWithAllBonusYear.current,
      true
    );
    careInsuranceYear.current = SocialSecurityCalculator.calculateCareInsurance(
      salaryWithAllBonusYear.current / 12,
      isChildless ?? false
    ) * 12;
    healthInsuranceYear.current = SocialSecurityCalculator.calculateHealthInsurance(
      salaryWithAllBonusYear.current / 12
    ) * 12;
    unemploymentInsurancYear.current = SocialSecurityCalculator.calculateUnemploymentInsurance(
      salaryWithAllBonusYear.current / 12
    ) * 12;
    pensionInsuranceYear.current = SocialSecurityCalculator.calculatePensionInsurance(
      salaryWithAllBonusYear.current / 12
    ) * 12;
  }, [salaryWithBonus, isChildless]);

  return (
    <HomeView
      salary={salary ?? 0}
      salaryWithBonus={salaryWithBonus ?? 0}
      salaryAfterTax={salaryAfterAllTaxMonthly.current ?? 0}
      tax={taxMonthly.current ?? 0}
      solidarityTax={solidarityTaxMonthly.current ?? 0}
      pensionInsurance={salaryWithBonus !== null ? SocialSecurityCalculator.calculatePensionInsurance(salaryWithBonus) : 0}
      unemploymentInsurance={
        salaryWithBonus !== null ? SocialSecurityCalculator.calculateUnemploymentInsurance(salaryWithBonus) : 0
      }
      healthInsurance={salaryWithBonus !== null ? SocialSecurityCalculator.calculateHealthInsurance(salaryWithBonus) : 0}
      careInsurance={
        salaryWithBonus !== null
          ? SocialSecurityCalculator.calculateCareInsurance(salaryWithBonus, isChildless ?? false)
          : 0
      }
      calcultedSalaryAfterSocialSecurity={SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
        salaryAfterAllTaxMonthly.current ?? 0,
        salaryWithBonus ?? 0,
        false
      )}
      transformationsGeld={transformationsGeld.current}
      tZugA={tZugA.current}
      tZugB={tZugB.current}
      urlaubsgeld={urlaubsgeld.current}
      profitSharing={profitSharing.current}
      christmasBonus={christmasBonus.current}
      salaryWithAllBonus={salaryWithAllBonusYear.current}
      taxYear={taxYear.current}
      solidarityTaxYear={solidarityTaxYear.current}
      salaryAfterAllTaxYear={salaryAfterAllTaxYear.current}
      calcultedSalaryAfterSocialSecurityYear={calcultedSalaryAfterSocialSecurityYear.current}
      careInsuranceYear={careInsuranceYear.current}
      healthInsuranceYear={healthInsuranceYear.current}
      unemploymentInsurancYear={unemploymentInsurancYear.current}
      pensionInsuranceYear={pensionInsuranceYear.current}
    />
  );
};

//ToDO: Sozialabgabeb für das Jahr anpassen wegen Bonis
// done furs jahr
export default HomeContainer;