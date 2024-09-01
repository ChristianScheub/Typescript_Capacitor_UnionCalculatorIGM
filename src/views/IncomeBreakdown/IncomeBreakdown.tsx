import React from "react";
import { CSSProperties } from "react";
import { IncomeBreakdownProps } from "./IncomeBreakdownProps";
import Card from "../../ui/Card";

const IncomeBreakdown: React.FC<IncomeBreakdownProps> = ({
  title,
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
  christmasBonus,
  vacationBonus,
  tZugA,
  tZugB,
  transformationsGeld,
  profitSharing,
  salaryWithAllBonus,
}) => {
  return (
    <Card>
      <h2>{title}</h2>
      <div style={styles.item}>
        <span style={styles.textLeft}>Brutto:</span>
        <span style={styles.textRight}>
          {salary !== null ? `${salary} €` : "N/A"}
        </span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>Mit Leistungsentgelt/Zulagen:</span>
        <span style={styles.textRight}>
          {salaryWithBonus !== null ? `${salaryWithBonus} €` : "N/A"}
        </span>
      </div>

      {christmasBonus !== undefined && (
        <div>
          <hr />
          <h4 style={styles.textLeft}>Sonderzahlungen</h4>
          <div style={styles.item}>
            <span style={styles.textLeft}>Weihnachtsgeld:</span>
            <span style={styles.textRight}>{christmasBonus.toFixed(2)} €</span>
          </div>
        </div>
      )}

      {vacationBonus !== undefined && (
        <div style={styles.item}>
          <span style={styles.textLeft}>Urlaubsgeld:</span>
          <span style={styles.textRight}>{vacationBonus.toFixed(2)} €</span>
        </div>
      )}

      {tZugA !== undefined && (
        <div style={styles.item}>
          <span style={styles.textLeft}>T-Zug A:</span>
          <span style={styles.textRight}>{tZugA.toFixed(2)} €</span>
        </div>
      )}

      {tZugB !== undefined && (
        <div style={styles.item}>
          <span style={styles.textLeft}>T-Zug B:</span>
          <span style={styles.textRight}>{tZugB.toFixed(2)} €</span>
        </div>
      )}

      {transformationsGeld !== undefined && (
        <div style={styles.item}>
          <span style={styles.textLeft}>Transformationsgeld:</span>
          <span style={styles.textRight}>
            {transformationsGeld.toFixed(2)} €
          </span>
        </div>
      )}

      {profitSharing !== undefined && (
        <div style={styles.item}>
          <span style={styles.textLeft}>Gewinnbeteiligung:</span>
          <span style={styles.textRight}>{profitSharing.toFixed(2)} €</span>
        </div>
      )}

      {salaryWithAllBonus !== undefined && (
        <div style={styles.item}>
          <b style={styles.textLeft}>Gesamtgehalt:</b>
          <b style={styles.textRight}>{salaryWithAllBonus.toFixed(2)} €</b>
        </div>
      )}

      <hr />

      <h4 style={styles.textLeft}>Steuern</h4>
      <div style={styles.item}>
        <span style={styles.textLeft}>Lohnsteuer:</span>
        <span style={styles.textRight}>
          {tax !== null ? `${tax} €` : "N/A"}
        </span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>Solidaritätssteuer:</span>
        <span style={styles.textRight}>
          {solidarityTax !== null ? `${solidarityTax} €` : "N/A"}
        </span>
      </div>
      <div style={styles.item}>
        <b style={styles.textLeft}>Nach Steuern:</b>
        <b style={styles.textRight}>
          {salaryAfterTax !== null ? `${salaryAfterTax} €` : "N/A"}
        </b>
      </div>
      <hr />

      <h4 style={styles.textLeft}>Sozialabgaben</h4>
      <div style={styles.item}>
        <span style={styles.textLeft}>Rentenversicherung:</span>
        <span style={styles.textRight}>{pensionInsurance.toFixed(2)} €</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>Arbeitslosenversicherung:</span>
        <span style={styles.textRight}>
          {unemploymentInsurance.toFixed(2)} €
        </span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>Krankenversicherung:</span>
        <span style={styles.textRight}>{healthInsurance.toFixed(2)} €</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>Krankenversicherung Zusatzbetrag:</span>
        <span style={styles.textRight}>{healthInsuranceSupplement.toFixed(2)} €</span>
      </div>
      <div style={styles.item}>
        <span style={styles.textLeft}>Pflegeversicherung:</span>
        <span style={styles.textRight}>{careInsurance.toFixed(2)} €</span>
      </div>
      <hr />
      <div style={styles.item}>
        <b style={styles.textLeft}>Nach Abzügen:</b>
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
