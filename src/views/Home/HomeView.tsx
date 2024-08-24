import React from "react";
import { HomeViewProps } from "./HomeViewProps";
import { CSSProperties } from "react";
import IncomeBreakdown from "../IncomeBreakdown/IncomeBreakdown";

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
  salaryWithAllBonus
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
        salaryAfterTax={parseFloat((salaryAfterTax * 12).toFixed(2))}
        tax={parseFloat((tax * 12).toFixed(2))}
        solidarityTax={parseFloat((solidarityTax * 12).toFixed(2))}
        pensionInsurance={parseFloat((pensionInsurance * 12).toFixed(2))}
        unemploymentInsurance={parseFloat(
          (unemploymentInsurance * 12).toFixed(2)
        )}
        healthInsurance={parseFloat((healthInsurance * 12).toFixed(2))}
        careInsurance={parseFloat((careInsurance * 12).toFixed(2))}
        calcultedSalaryAfterSocialSecurity={parseFloat(
          (calcultedSalaryAfterSocialSecurity * 12).toFixed(2)
        )}
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
