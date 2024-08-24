import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeView from "../views/Home/HomeView";
import { AppDispatch, RootState } from "../stateManagement/store";
import TaxCalculatorService from "../services/taxCalculator/TaxCalculatorService";
import SocialSecurityCalculator from "../services/socialSecurityCalculator/SocialSecurityCalculator";
import unionContractCalculatorService from "../services/unionContractCalculatorService";
import Logger from "../services/logger/logger";

const HomeContainer: React.FC = () => {
  const { salary, salaryWithBonus, selectedSalaryGroup, isChildless } =
    useSelector((state: RootState) => state.salaryCalculator);

  Logger.info("salaryWithBonus salaryWithBonus: " + salaryWithBonus);

  const dispatch = useDispatch<AppDispatch>();

  let christmasBonus = 0,
    transformationsGeld = 0,
    tZugA = 0,
    tZugB = 0,
    urlaubsgeld = 0,
    profitSharing = 0,
    salaryWithAllBonus = 0,
    taxMonthly = 0,
    solidarityTaxMonthly = 0,
    salaryAfterAllTaxMonthly = 0;

  useEffect(() => {
    //dispatch(setSalary(unionContractCalculatorService.getSalary()));
    /* dispatch(
      setSalaryWithBonus(
        unionContractCalculatorService.calculateSalaryWithBonus()
      )
    );*/

    christmasBonus = unionContractCalculatorService.caclulateChristmasBonus();
    transformationsGeld =
      unionContractCalculatorService.calculateTransformationsGeld();

    tZugA = unionContractCalculatorService.calculateTZugA();
    tZugB = unionContractCalculatorService.calculateTZugB();
    urlaubsgeld = unionContractCalculatorService.calculateUrlaubsgeld();
    profitSharing = unionContractCalculatorService.calculateProfitSharing();
    salaryWithAllBonus =
      unionContractCalculatorService.calculateSalaryWithAllBonus();

    if (salaryWithBonus) {
      taxMonthly = TaxCalculatorService.calculateTax(salaryWithBonus, false);
      solidarityTaxMonthly = TaxCalculatorService.calculateSoli(
        salaryWithBonus,
        false
      );
      salaryAfterAllTaxMonthly =
        TaxCalculatorService.calculateSalaryAfterAllTax();
    }
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
      }
      careInsurance={
        salaryWithBonus !== null
          ? SocialSecurityCalculator.calculateCareInsurance(
              salaryWithBonus,
              isChildless ?? false
            )
          : 0
      }
      calcultedSalaryAfterSocialSecurity={SocialSecurityCalculator.calculateNetIncomeAfterSocialSecurity(
        salaryWithBonus ?? 0
      )}
      transformationsGeld={transformationsGeld}
      tZugA={tZugA}
      tZugB={tZugB}
      urlaubsgeld={urlaubsgeld}
      profitSharing={profitSharing}
      christmasBonus={christmasBonus}
      salaryWithAllBonus={salaryWithAllBonus}
    />
  );
};

//ToDO: Steuern für das Jahr anpassen wegen Bonis
export default HomeContainer;
