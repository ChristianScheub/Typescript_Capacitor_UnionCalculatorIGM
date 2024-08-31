import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeView from "../views/Home/HomeView";
import { RootState } from "../stateManagement/store";
import TaxCalculatorService from "../services/taxCalculator/TaxCalculatorService";
import SocialSecurityCalculator from "../services/socialSecurityCalculator/SocialSecurityCalculator";
import UnionContractCalculatorService from "../services/unionContractCalculatorService";
import Logger from "../services/logger/logger";

const HomeContainer: React.FC = () => {
  const { salary, salaryWithBonus, isChildless } =
    useSelector((state: RootState) => state.salaryCalculator);

  Logger.info("salaryWithBonus salaryWithBonus: " + salaryWithBonus);


  let christmasBonus = UnionContractCalculatorService.caclulateChristmasBonus();
  let transformationsGeld = UnionContractCalculatorService.calculateTransformationsGeld();
  let tZugA = UnionContractCalculatorService.calculateTZugA();
  let tZugB = UnionContractCalculatorService.calculateTZugB();
  let urlaubsgeld = UnionContractCalculatorService.calculateUrlaubsgeld();
  let profitSharing = UnionContractCalculatorService.calculateProfitSharing();
  let salaryWithAllBonusYear = UnionContractCalculatorService.calculateSalaryWithAllBonus();
  let taxMonthly = 0;
  let solidarityTaxMonthly = 0;
  let salaryAfterAllTaxMonthly = 0;
  let taxYear = 0;
  let solidarityTaxYear = 0;
  let salaryAfterAllTaxYear = 0;

  if (salaryWithBonus) {
    taxMonthly = TaxCalculatorService.calculateTax(salaryWithBonus, false);
    solidarityTaxMonthly = TaxCalculatorService.calculateSoli(salaryWithBonus, false)
    salaryAfterAllTaxMonthly = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithBonus, false);
    taxYear = TaxCalculatorService.calculateTax(salaryWithAllBonusYear, true);
    solidarityTaxYear = TaxCalculatorService.calculateSoli(salaryWithAllBonusYear, true);
    salaryAfterAllTaxYear = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithAllBonusYear, true);
  }


  let calcultedSalaryAfterSocialSecurityYear = SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
    salaryAfterAllTaxYear,salaryWithAllBonusYear,true
  );
  let careInsuranceYear = SocialSecurityCalculator.calculateCareInsurance(salaryWithAllBonusYear/12,isChildless ?? false)*12;
  let healthInsuranceYear = SocialSecurityCalculator.calculateHealthInsurance(salaryWithAllBonusYear/12)*12;
  let unemploymentInsurancYear = SocialSecurityCalculator.calculateUnemploymentInsurance(salaryWithAllBonusYear/12)*12;
  let pensionInsuranceYear = SocialSecurityCalculator.calculatePensionInsurance(salaryWithAllBonusYear/12)*12;

  useEffect(() => {
    //dispatch(setSalary(UnionContractCalculatorService.getSalary()));
    /* dispatch(
      setSalaryWithBonus(
        UnionContractCalculatorService.calculateSalaryWithBonus()
      )
    );*/

    christmasBonus = UnionContractCalculatorService.caclulateChristmasBonus();
    transformationsGeld =
      UnionContractCalculatorService.calculateTransformationsGeld();

    tZugA = UnionContractCalculatorService.calculateTZugA();
    tZugB = UnionContractCalculatorService.calculateTZugB();
    urlaubsgeld = UnionContractCalculatorService.calculateUrlaubsgeld();
    profitSharing = UnionContractCalculatorService.calculateProfitSharing();
    salaryWithAllBonusYear =
      UnionContractCalculatorService.calculateSalaryWithAllBonus();

    if (salaryWithBonus) {

      taxMonthly = TaxCalculatorService.calculateTax(salaryWithBonus, false);
      solidarityTaxMonthly = TaxCalculatorService.calculateSoli(salaryWithBonus, false)
      salaryAfterAllTaxMonthly = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithBonus, false);
      taxYear = TaxCalculatorService.calculateTax(salaryWithAllBonusYear, true);
      solidarityTaxYear = TaxCalculatorService.calculateSoli(salaryWithAllBonusYear, true);
      salaryAfterAllTaxYear = TaxCalculatorService.calculateSalaryAfterAllTax(salaryWithAllBonusYear, true);
    }


    calcultedSalaryAfterSocialSecurityYear = SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
      salaryAfterAllTaxYear,salaryWithAllBonusYear,true
    );
    careInsuranceYear = SocialSecurityCalculator.calculateCareInsurance(salaryWithAllBonusYear/12,isChildless ?? false)*12;
    healthInsuranceYear = SocialSecurityCalculator.calculateHealthInsurance(salaryWithAllBonusYear/12)*12;
    unemploymentInsurancYear = SocialSecurityCalculator.calculateUnemploymentInsurance(salaryWithAllBonusYear/12)*12;
    pensionInsuranceYear = SocialSecurityCalculator.calculatePensionInsurance(salaryWithAllBonusYear/12)*12;
  
  }, []);

  return (
    <HomeView
      salary={salary ?? 0}
      salaryWithBonus={salaryWithBonus ?? 0}
      salaryAfterTax={salaryAfterAllTaxMonthly ?? 0}
      tax={taxMonthly ?? 0}
      solidarityTax={solidarityTaxMonthly ?? 0}
      pensionInsurance={
        salaryWithBonus !== null
          ? SocialSecurityCalculator.calculatePensionInsurance(salaryWithBonus)
          : 0
      }
      unemploymentInsurance={
        salaryWithBonus !== null
          ? SocialSecurityCalculator.calculateUnemploymentInsurance(
            salaryWithBonus
          )
          : 0
      }
      healthInsurance={
        salaryWithBonus !== null
          ? SocialSecurityCalculator.calculateHealthInsurance(salaryWithBonus)
          : 0
      } // Es gibt eigentlich noch den KV Zusatzbeitrag
      careInsurance={
        salaryWithBonus !== null
          ? SocialSecurityCalculator.calculateCareInsurance(
            salaryWithBonus,
            isChildless ?? false
          )
          : 0
      }
      calcultedSalaryAfterSocialSecurity={SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
        salaryAfterAllTaxMonthly ?? 0,salaryWithBonus??0,false
      )}
      transformationsGeld={transformationsGeld}
      tZugA={tZugA}
      tZugB={tZugB}
      urlaubsgeld={urlaubsgeld}
      profitSharing={profitSharing}
      christmasBonus={christmasBonus}
      salaryWithAllBonus={salaryWithAllBonusYear}
      taxYear={taxYear}
      solidarityTaxYear = {solidarityTaxYear}
      salaryAfterAllTaxYear={salaryAfterAllTaxYear}
      calcultedSalaryAfterSocialSecurityYear={calcultedSalaryAfterSocialSecurityYear}
      careInsuranceYear={careInsuranceYear}
      healthInsuranceYear={healthInsuranceYear}
      unemploymentInsurancYear={unemploymentInsurancYear}
      pensionInsuranceYear={pensionInsuranceYear}
    />
  );
};

//ToDO: Sozialabgabeb für das Jahr anpassen wegen Bonis
// done furs jahr
export default HomeContainer;
