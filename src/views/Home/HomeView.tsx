import React from "react";
import { HomeViewProps } from "./HomeViewProps";
import Card from "../../ui/Card/Card";
import { YearlyBarChart } from "../../ui/YearlyBarChart";
import { TaxAndInsurancePieChart } from "../../ui/TaxAndInsurancePieChart";

const HomeView: React.FC<HomeViewProps> = ({
  salaryWithBonus,
  transformationsGeld,
  tZugA,
  tZugB,
  urlaubsgeld,
  profitSharing,
  christmasBonus,
  taxYear,
  churchTaxYear,
  solidarityTaxYear,
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
      <center>      <h2>Einkommens- <br />übersicht</h2></center>

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
      <br />
      <i>Das ist nur eine grobe Schätzrechnung ihres Einkommens und der Steuern/Sozialabgaben! Wir übernehmen keine Haftung für die Korrektheit der Ergebnisse.</i>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeView;