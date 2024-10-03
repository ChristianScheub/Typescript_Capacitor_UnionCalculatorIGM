// Contribution rates for the employee share
export const socialSecurityRates = {
    pensionInsurance: 0.093, // Arbeitnehmeranteil Rentenversicherung
    unemploymentInsurance: 0.013, // Arbeitnehmeranteil Arbeitslosenversicherung
    healthInsurance: 0.073, // Arbeitnehmeranteil Krankenversicherung inkl. Zusatzbeitrag
    careInsurance: 0.017, // Arbeitnehmeranteil Pflegeversicherung
    careInsuranceChildless: 0.023, // Arbeitnehmeranteil Pflegeversicherung für Kinderlose
  };
  
// Contribution assessment ceilings for health insurance (2024)
  export const contributionLimits = {
    healthInsurance: 5175, // Monatsgrenze in Euro
    pensionInsuranceWestGermany: 7550,
    pensionInsuranceOstGermany: 7450,
    unemploymentInsuranceWestGermany:  7550,
    unemploymentInsurancOstGermany: 7450,
    careInsurance: 5175
  };
  