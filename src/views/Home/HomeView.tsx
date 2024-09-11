import React from "react";
import { HomeViewProps } from "./HomeViewProps";
import Card from "../../ui/Card/Card";
import { YearlyBarChart } from "../../ui/YearlyBarChart";
import { TaxAndInsurancePieChart } from "../../ui/TaxAndInsurancePieChart";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div>
      <br />
      <center>
        <h2> {t("homeView_title1")} <br />{t("homeView_title2")} </h2>
      </center>

      <Card>
        <b>{t("homeView_hourly_wage_with_bonus")}</b>

        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3vw' }}>
          <Card style={{ flex: 1 }}>
            <b>{t("homeView_gross_hourly_wage")}</b> <br /> {hoursWageGrossYearWithBonus.toFixed(2)}<br />
          </Card>
          <Card style={{ flex: 1 }}>
            <b>{t("homeView_net_hourly_wage")}</b> <br /> {hoursWageNetYearWithBonus.toFixed(2)}
          </Card>
        </div>
      </Card>

      <br />
      <Card>
        <b>{t("homeView_hourly_wage_without_bonus")}</b>
        <br />
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3vw' }}>
          <Card style={{ flex: 1 }}>
            <b>{t("homeView_gross_hourly_wage")}</b> <br /> {hoursWageGrossYear.toFixed(2)}<br />
          </Card>
          <Card style={{ flex: 1 }}>
            <b>{t("homeView_net_hourly_wage")}</b> <br /> {hoursWageNetYear.toFixed(2)}
          </Card>
        </div>
      </Card>

      <br />
      <YearlyBarChart
        title={t("homeView_gross_salary_overview")}
        hint={t("homeView_profit_sharing_hint")}
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
      <i> {t("warning_calulcationIsEstimation")}</i>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomeView;