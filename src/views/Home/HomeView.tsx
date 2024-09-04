import React from "react";
import { HomeViewProps } from "./HomeViewProps";
import IncomeBreakdown from "../IncomeBreakdown/IncomeBreakdown";
import Card from "../../ui/Card";

const HomeView: React.FC<HomeViewProps> = ({
  salary,
  salaryWithBonus,
  salaryAfterTax,
  tax,
  solidarityTax,
  churchTax,
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
  churchTaxYear,
  solidarityTaxYear,
  salaryAfterAllTaxYear,
  calcultedSalaryAfterSocialSecurityYear,
  careInsuranceYear,
  healthInsuranceSupplementYear,
  healthInsuranceYear,
  unemploymentInsurancYear,
  pensionInsuranceYear,
  hoursWageNetYear,
  hoursWageGrossYear,
}) => {
  return (
    <div>
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3vw' }}>
        <Card style={{ flex: 1 }}>
          <b>Stundenlohn Brutto</b> <br /> {hoursWageGrossYear.toFixed(2)}<br />
        </Card>
        <Card style={{ flex: 1 }}>
          <b>Stundenlohn Netto</b> <br /> {hoursWageNetYear.toFixed(2)}
        </Card>
      </div>


      <IncomeBreakdown
        title="Monatliches Gehalt (Ohne Sonderzahlungen)"
        salary={salary}
        salaryWithBonus={salaryWithBonus}
        salaryAfterTax={salaryAfterTax}
        tax={tax}
        solidarityTax={solidarityTax}
        churchTax={churchTax}
        pensionInsurance={pensionInsurance}
        unemploymentInsurance={unemploymentInsurance}
        healthInsuranceSupplement={healthInsuranceSupplement}
        healthInsurance={healthInsurance}
        careInsurance={careInsurance}
        calcultedSalaryAfterSocialSecurity={calcultedSalaryAfterSocialSecurity}
      />
      <br />
      <IncomeBreakdown
        title="Jahresgehalt"
        salary={parseFloat((salary * 12).toFixed(2))}
        salaryWithBonus={parseFloat((salaryWithBonus * 12).toFixed(2))}
        salaryAfterTax={salaryAfterAllTaxYear}
        tax={taxYear}
        solidarityTax={solidarityTaxYear}
        churchTax={churchTaxYear}
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