import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../stateManagement/store";
import TaxCalculatorService from "../services/taxCalculatorService";
import SocialSecurityCalculator from "../services/socialSecurityCalculator/SocialSecurityCalculator";
import UnionContractCalculatorService from "../services/unionContractCalculatorService";
import Logger from "../services/logger/logger";
import TablesView from "../views/Table/TablesView";

const TablesContainer: React.FC = () => {
  const { salary, salaryWithBonus } = useSelector((state: RootState) => state.salary);
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

  const [taxMonthly, setTaxMonthly] = useState(0);
  const [solidarityTaxMonthly, setSolidarityTaxMonthly] = useState(0);
  const [churchTaxMonthly, setChurchTaxMonthly] = useState(0);
  const [salaryAfterAllTaxMonthly, setSalaryAfterAllTaxMonthly] = useState(0);
  const [taxYear, setTaxYear] = useState(0);
  const [solidarityTaxYear, setSolidarityTaxYear] = useState(0);
  const [churchTaxYear, setChurchTaxYear] = useState(0);
  const [salaryAfterAllTaxYear, setSalaryAfterAllTaxYear] = useState(0);


  const [calculatedSalaryAfterSocialSecurityYear, setCalculatedSalaryAfterSocialSecurityYear] = useState(0);
  const [careInsuranceYear, setCareInsuranceYear] = useState(0);
  const [healthInsuranceSupplementYear, setHealthInsuranceSupplementYear] = useState(0);
  const [healthInsuranceYear, setHealthInsuranceYear] = useState(0);
  const [unemploymentInsuranceYear, setUnemploymentInsuranceYear] = useState(0);
  const [pensionInsuranceYear, setPensionInsuranceYear] = useState(0);


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
      setTaxMonthly(TaxCalculatorService.calculateTax(salaryWithBonus, false));
      setChurchTaxMonthly(TaxCalculatorService.calculateChurchTax(salaryWithBonus,false));
      setSolidarityTaxMonthly(TaxCalculatorService.calculateSoli(salaryWithBonus, false));
      setSalaryAfterAllTaxMonthly(TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithBonus, false));

      // Berechnung der jährlichen Werte
      const calculatedSalaryWithAllBonusYear = UnionContractCalculatorService.calculateSalaryWithAllBonus();
      setTaxYear(TaxCalculatorService.calculateTax(calculatedSalaryWithAllBonusYear, true));
      setChurchTaxYear(TaxCalculatorService.calculateChurchTax(calculatedSalaryWithAllBonusYear,true));
      setSolidarityTaxYear(TaxCalculatorService.calculateSoli(calculatedSalaryWithAllBonusYear, true));
      setSalaryAfterAllTaxYear(TaxCalculatorService.calculateSalaryAfterAllTax(calculatedSalaryWithAllBonusYear, true));
    }

    // Berechnung der Sozialabgaben für das Jahr
    setCalculatedSalaryAfterSocialSecurityYear(SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
      salaryAfterAllTaxYear,
      salaryWithAllBonusYear,
      true
    ));

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

  }, [salaryWithBonus, isChildless, salaryAfterAllTaxYear, salaryWithAllBonusYear]);

  useEffect(() => {
    calculateAllValues();
  }, [salaryWithBonus, isChildless, calculateAllValues]);

  return (
    <TablesView
      salary={salary ?? 0}
      salaryWithBonus={salaryWithBonus ?? 0}
      salaryAfterTax={salaryAfterAllTaxMonthly}
      tax={taxMonthly}
      solidarityTax={solidarityTaxMonthly}
      churchTax={churchTaxMonthly}
      pensionInsurance={salaryWithBonus !== null ? SocialSecurityCalculator.calculatePensionInsurance(salaryWithBonus) : 0}
      unemploymentInsurance={salaryWithBonus !== null ? SocialSecurityCalculator.calculateUnemploymentInsurance(salaryWithBonus) : 0}
      healthInsuranceSupplement={salaryWithBonus !== null ? SocialSecurityCalculator.calculateHealthInsuranceSupplement(salaryWithBonus) : 0}
      healthInsurance={salaryWithBonus !== null ? SocialSecurityCalculator.calculateHealthInsurance(salaryWithBonus) : 0}
      careInsurance={salaryWithBonus !== null ? SocialSecurityCalculator.calculateCareInsurance(salaryWithBonus, isChildless ?? false) : 0}
      calcultedSalaryAfterSocialSecurity={SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
        salaryAfterAllTaxMonthly,
        salaryWithBonus ?? 0,
        false
      )}
      transformationsGeld={transformationsGeld}
      tZugA={tZugA}
      tZugB={tZugB}
      urlaubsgeld={urlaubsgeld}
      profitSharing={profitSharing}
      christmasBonus={christmasBonus}
      salaryWithAllBonus={salaryWithAllBonusYear}
      taxYear={taxYear}
      solidarityTaxYear={solidarityTaxYear}
      churchTaxYear={churchTaxYear}
      salaryAfterAllTaxYear={salaryAfterAllTaxYear}
      calcultedSalaryAfterSocialSecurityYear={calculatedSalaryAfterSocialSecurityYear}
      careInsuranceYear={careInsuranceYear}
      healthInsuranceSupplementYear={healthInsuranceSupplementYear}
      healthInsuranceYear={healthInsuranceYear}
      unemploymentInsurancYear={unemploymentInsuranceYear}
      pensionInsuranceYear={pensionInsuranceYear}
    />
  );
};

export default TablesContainer;