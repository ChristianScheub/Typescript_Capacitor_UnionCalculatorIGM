import React from "react";
import { TablesViewProps } from "./TablesViewProps";
import IncomeBreakdown from "../IncomeBreakdown/IncomeBreakdown";

const TablesView: React.FC<TablesViewProps> = ({
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
    pensionInsuranceYear
}) => {
    return (
        <div>
            <br />

            <center>
                <h2>Aufgeschlüsselte <br />Berechnung</h2>
            </center>

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
            <i>Das ist nur eine grobe Schätzrechnung ihres Einkommens und der Steuern/Sozialabgaben! Wir übernehmen keine Haftung für die Korrektheit der Ergebnisse.</i>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default TablesView;