import React, { CSSProperties } from 'react';
import { IncomeBreakdownProps } from "./IncomeBreakdownProps";
import Card from "../../ui/Card/Card";
import { useTranslation } from "react-i18next";

const IncomeBreakdown: React.FC<IncomeBreakdownProps> = ({
  title,
  salary,
  salaryWithBonus,
  salaryAfterTax,
  tax,
  churchTax,
  solidarityTax,
  pensionInsurance,
  unemploymentInsurance,
  healthInsuranceSupplement,
  healthInsurance,
  careInsurance,
  calcultedSalaryAfterSocialSecurity,
  christmasBonus,
  vacationBonus,
  tZugA,
  tZugB,
  transformationsGeld,
  profitSharing,
  salaryWithAllBonus,
}) => {
  const { t } = useTranslation();

  const hasValue = (value?: number): boolean => value !== undefined && value !== 0;

  const hasBonuses = [
    christmasBonus,
    vacationBonus,
    tZugA,
    tZugB,
    transformationsGeld,
    profitSharing
  ].some(hasValue);  

  return (
    <Card>
      <h3>{title}</h3>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_Brutto")}:</span>
        <span style={styles.textRight}>
          {salary !== null ? `${salary} €` : "N/A"}
        </span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_WithBonus")}:</span>
        <span style={styles.textRight}>
          {salaryWithBonus !== null ? `${salaryWithBonus} €` : "N/A"}
        </span>
      </div>
      <hr />
      {hasBonuses && <h4 style={styles.textLeft}>{t("incomeBreakdown_Bonuses")}</h4>}

      {christmasBonus !== undefined && christmasBonus !== 0 && (
        <div style={styles.item}>
          <span style={styles.textLeft}>{t("incomeBreakdown_ChristmasBonus")}:</span>
          <span style={styles.textRight}>{christmasBonus.toFixed(2)} €</span>
        </div>
      )}

      {vacationBonus !== undefined && vacationBonus !== 0 && (
        <div style={styles.item}>
          <span style={styles.textLeft}>{t("incomeBreakdown_VacationBonus")}:</span>
          <span style={styles.textRight}>{vacationBonus.toFixed(2)} €</span>
        </div>
      )}

      {tZugA !== undefined && tZugA !== 0 && (
        <div style={styles.item}>
          <span style={styles.textLeft}>{t("incomeBreakdown_TZugA")}:</span>
          <span style={styles.textRight}>{tZugA.toFixed(2)} €</span>
        </div>
      )}

      {tZugB !== undefined && tZugB !== 0 && (
        <div style={styles.item}>
          <span style={styles.textLeft}>{t("incomeBreakdown_TZugB")}:</span>
          <span style={styles.textRight}>{tZugB.toFixed(2)} €</span>
        </div>
      )}

      {transformationsGeld !== undefined && transformationsGeld !== 0 && (
        <div style={styles.item}>
          <span style={styles.textLeft}>{t("incomeBreakdown_TransformationsGeld")}:</span>
          <span style={styles.textRight}>{transformationsGeld.toFixed(2)} €</span>
        </div>
      )}

      {profitSharing !== undefined && profitSharing !== 0 && (
        <div style={styles.item}>
          <span style={styles.textLeft}>{t("incomeBreakdown_ProfitSharing")}:</span>
          <span style={styles.textRight}>{profitSharing.toFixed(2)} €</span>
        </div>
      )}

      {salaryWithAllBonus !== undefined && (
        <div style={styles.item}>
          <b style={styles.textLeft}>{t("incomeBreakdown_TotalSalary")}:</b>
          <b style={styles.textRight}>{salaryWithAllBonus.toFixed(2)} €</b>
        </div>
      )}
      {hasBonuses && <hr />}

      <h4 style={styles.textLeft}>{t("incomeBreakdown_Taxes")}</h4>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_IncomeTax")}:</span>
        <span style={styles.textRight}>{tax !== null ? `${tax} €` : "N/A"}</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_SolidarityTax")}:</span>
        <span style={styles.textRight}>{solidarityTax !== null ? `${solidarityTax} €` : "N/A"}</span>
      </div>

      {churchTax !== null && churchTax !== undefined && churchTax !== 0 && (
        <div style={styles.item}>
          <span style={styles.textLeft}>{t("incomeBreakdown_ChurchTax")}:</span>
          <span style={styles.textRight}>{churchTax.toFixed(2)} €</span>
        </div>
      )}

      <div style={styles.item}>
        <b style={styles.textLeft}>{t("incomeBreakdown_AfterTax")}:</b>
        <b style={styles.textRight}>
          {salaryAfterTax !== null ? `${salaryAfterTax} €` : "N/A"}
        </b>
      </div>
      <hr />

      <h4 style={styles.textLeft}>{t("incomeBreakdown_SocialSecurity")}</h4>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_PensionInsurance")}:</span>
        <span style={styles.textRight}>{pensionInsurance.toFixed(2)} €</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_UnemploymentInsurance")}:</span>
        <span style={styles.textRight}>{unemploymentInsurance.toFixed(2)} €</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_HealthInsurance")}:</span>
        <span style={styles.textRight}>{healthInsurance.toFixed(2)} €</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_HealthInsuranceSupplement")}:</span>
        <span style={styles.textRight}>{healthInsuranceSupplement.toFixed(2)} €</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>{t("incomeBreakdown_CareInsurance")}:</span>
        <span style={styles.textRight}>{careInsurance.toFixed(2)} €</span>
      </div>
      <hr />
      <div style={styles.item}>
        <b style={styles.textLeft}>{t("incomeBreakdown_AfterDeductions")}:</b>
        <b style={styles.textRight}>{calcultedSalaryAfterSocialSecurity} €</b>
      </div>
    </Card>
  );
};

const styles: { [key: string]: CSSProperties } = {
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  textLeft: {
    textAlign: "left",
  },
  textRight: {
    textAlign: "right",
  },
};

export default IncomeBreakdown;