import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import HomeView from "../views/Home/HomeView";
import { RootState } from "../stateManagement/store";
import TaxCalculatorService from "../services/taxCalculator/TaxCalculatorService";
import SocialSecurityCalculator from "../services/socialSecurityCalculator/SocialSecurityCalculator";
import UnionContractCalculatorService from "../services/unionContractCalculatorService";
import Logger from "../services/logger/logger";

// Custom hook to calculate all values related to taxes and bonuses
export const useCalculations = (salaryWithBonus:number | null, salaryWithAllBonusYear:number | null, isChildless:boolean) => {
  const [calculations, setCalculations] = useState({
    christmasBonus: 0,
    transformationsGeld: 0,
    tZugA: 0,
    tZugB: 0,
    urlaubsgeld: 0,
    profitSharing: 0,
    salaryWithAllBonusYear: 0,
    taxMonthly: 0,
    solidarityTaxMonthly: 0,
    salaryAfterAllTaxMonthly: 0,
    taxYear: 0,
    solidarityTaxYear: 0,
    salaryAfterAllTaxYear: 0,
    calcultedSalaryAfterSocialSecurityYear: 0,
    careInsuranceYear: 0,
    healthInsuranceYear: 0,
    unemploymentInsuranceYear: 0,
    pensionInsuranceYear: 0
  });

  useEffect(() => {
    const christmasBonus = UnionContractCalculatorService.caclulateChristmasBonus();
    const transformationsGeld = UnionContractCalculatorService.calculateTransformationsGeld();
    const tZugA = UnionContractCalculatorService.calculateTZugA();
    const tZugB = UnionContractCalculatorService.calculateTZugB();
    const urlaubsgeld = UnionContractCalculatorService.calculateUrlaubsgeld();
    const profitSharing = UnionContractCalculatorService.calculateProfitSharing();
    const salaryWithAllBonusYear = UnionContractCalculatorService.calculateSalaryWithAllBonus();

    let taxMonthly = 0;
    let solidarityTaxMonthly = 0;
    let salaryAfterAllTaxMonthly = 0;
    let taxYear = 0;
    let solidarityTaxYear = 0;
    let salaryAfterAllTaxYear = 0;

    if (salaryWithBonus) {
      taxMonthly = TaxCalculatorService.calculateTax(salaryWithBonus, false);
      solidarityTaxMonthly = TaxCalculatorService.calculateSoli(salaryWithBonus, false);
      salaryAfterAllTaxMonthly = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithBonus, false);
      taxYear = TaxCalculatorService.calculateTax(salaryWithAllBonusYear, true);
      solidarityTaxYear = TaxCalculatorService.calculateSoli(salaryWithAllBonusYear, true);
      salaryAfterAllTaxYear = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithAllBonusYear, true);
    }

    const calcultedSalaryAfterSocialSecurityYear = SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
      salaryAfterAllTaxYear,
      salaryWithAllBonusYear,
      true
    );
    const careInsuranceYear = SocialSecurityCalculator.calculateCareInsurance(salaryWithAllBonusYear / 12, isChildless ?? false) * 12;
    const healthInsuranceYear = SocialSecurityCalculator.calculateHealthInsurance(salaryWithAllBonusYear / 12) * 12;
    const unemploymentInsuranceYear = SocialSecurityCalculator.calculateUnemploymentInsurance(salaryWithAllBonusYear / 12) * 12;
    const pensionInsuranceYear = SocialSecurityCalculator.calculatePensionInsurance(salaryWithAllBonusYear / 12) * 12;

    setCalculations({
      christmasBonus,
      transformationsGeld,
      tZugA,
      tZugB,
      urlaubsgeld,
      profitSharing,
      salaryWithAllBonusYear,
      taxMonthly,
      solidarityTaxMonthly,
      salaryAfterAllTaxMonthly,
      taxYear,
      solidarityTaxYear,
      salaryAfterAllTaxYear,
      calcultedSalaryAfterSocialSecurityYear,
      careInsuranceYear,
      healthInsuranceYear,
      unemploymentInsuranceYear,
      pensionInsuranceYear
    });
  }, [salaryWithBonus, salaryWithAllBonusYear, isChildless]);

  return calculations;
};