import React from "react";
import { HomeViewProps } from "./HomeViewProps";
import IncomeBreakdown from "../IncomeBreakdown/IncomeBreakdown";

const HomeView: React.FC<HomeViewProps> = ({
  salary,
  salaryWithBonus,
  salaryAfterTax,
  tax,
  solidarityTax,
  pensionInsurance,
  unemploymentInsurance,
  healthInsuranceSupplement,
  healthInsurance,
  careInsurance,
  calcultedSalaryAfterSocialSecurity,
  transformationsGeld,
  tZugA,
  tZugB,
  urlaubsgeld,
  profitSharing,
  christmasBonus,
  salaryWithAllBonus,
  taxYear,
  solidarityTaxYear,
  salaryAfterAllTaxYear,
  calcultedSalaryAfterSocialSecurityYear,
  careInsuranceYear,
  healthInsuranceSupplementYear,
  healthInsuranceYear,
  unemploymentInsurancYear,
  pensionInsuranceYear
}) => {
  return (
    <div>
      <br />
      <br />
      <IncomeBreakdown
        title="Monatliches Gehalt (Ohne Sonderzahlungen)"
        salary={salary}
        salaryWithBonus={salaryWithBonus}
        salaryAfterTax={salaryAfterTax}
        tax={tax}
        solidarityTax={solidarityTax}
        pensionInsurance={pensionInsurance}
        unemploymentInsurance={unemploymentInsurance}
        healthInsuranceSupplement={healthInsuranceSupplement}
        healthInsurance={healthInsurance}
        careInsurance={careInsurance}
        calcultedSalaryAfterSocialSecurity={calcultedSalaryAfterSocialSecurity}
      />
      <br />
      <IncomeBreakdown
        title="Jahres Gehalt"
        salary={parseFloat((salary * 12).toFixed(2))}
        salaryWithBonus={parseFloat((salaryWithBonus * 12).toFixed(2))}
        salaryAfterTax={salaryAfterAllTaxYear}
        tax={taxYear}
        solidarityTax={solidarityTaxYear}
        pensionInsurance={pensionInsuranceYear}
        unemploymentInsurance={unemploymentInsurancYear}
        healthInsuranceSupplement={healthInsuranceSupplementYear}
        healthInsurance={healthInsuranceYear}
        careInsurance={careInsuranceYear}
        calcultedSalaryAfterSocialSecurity={calcultedSalaryAfterSocialSecurityYear}
        transformationsGeld={transformationsGeld}
        tZugA={tZugA}
        tZugB={tZugB}
        vacationBonus={urlaubsgeld}
        profitSharing={profitSharing}
        christmasBonus={christmasBonus}
        salaryWithAllBonus={salaryWithAllBonus}

      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeView;
