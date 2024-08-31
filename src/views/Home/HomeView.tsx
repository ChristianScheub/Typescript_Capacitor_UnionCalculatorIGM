import React from "react";
import { HomeViewProps } from "./HomeViewProps";
import { CSSProperties } from "react";
import IncomeBreakdown from "../IncomeBreakdown/IncomeBreakdown";
import { tab } from "@testing-library/user-event/dist/tab";

const HomeView: React.FC<HomeViewProps> = ({
  salary,
  salaryWithBonus,
  salaryAfterTax,
  tax,
  solidarityTax,
  pensionInsurance,
  unemploymentInsurance,
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
