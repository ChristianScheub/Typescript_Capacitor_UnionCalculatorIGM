import React from "react";
import { HomeViewProps } from "./HomeViewProps";
import IncomeBreakdown from "../IncomeBreakdown/IncomeBreakdown";
import Card from "../../ui/Card";
import { YearlyBarChart } from "../../ui/YearlyBarChart";
import { TaxAndInsurancePieChart } from "../../ui/TaxAndInsurancePieChart";

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
  hoursWageNetYearWithBonus,
  hoursWageGrossYearWithBonus,
  hoursWageNetYear,
  hoursWageGrossYear
}) => {
  return (
    <div>
      <br />
      <h2>Ihre Einkommensübersicht:</h2>
      <br />
      <Card>
        <b>Stundenlohn mit Sonderzahlungen umgelegt</b>

        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3vw' }}>
          <Card style={{ flex: 1 }}>
            <b>Stundenlohn Brutto</b> <br /> {hoursWageGrossYearWithBonus.toFixed(2)}<br />
          </Card>
          <Card style={{ flex: 1 }}>
            <b>Stundenlohn Netto</b> <br /> {hoursWageNetYearWithBonus.toFixed(2)}
          </Card>
        </div>
      </Card>

      <br />
      <Card>
        <b>Stundenlohn ohne Sonderzahlungen</b>
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
      </Card>

      <br />
      <YearlyBarChart
        title="Brutto Gehaltsübersicht"
        hint="Es wird angenommen das die Gewinnbeteiligung im April erfolgt"
        january={salaryWithBonus}
        february={salaryWithBonus + transformationsGeld}
        march={salaryWithBonus}
        april={salaryWithBonus + profitSharing}
        may={salaryWithBonus}
        june={salaryWithBonus + urlaubsgeld}
        july={salaryWithBonus + tZugA + tZugB}
        august={salaryWithBonus}
        september={salaryWithBonus}
        october={salaryWithBonus}
        november={salaryWithBonus + christmasBonus}
        december={salaryWithBonus}
      />
      <br />
      <TaxAndInsurancePieChart
        tax={taxYear}
        solidarityTax={solidarityTaxYear}
        churchTax={churchTaxYear}
        pensionInsurance={pensionInsuranceYear}
        unemploymentInsurance={unemploymentInsurancYear}
        healthInsurance={healthInsuranceYear}
        healthInsuranceSupplement={healthInsuranceSupplementYear}
        careInsurance={careInsuranceYear}
        grossSalary={calcultedSalaryAfterSocialSecurityYear}
      />

      <br />
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