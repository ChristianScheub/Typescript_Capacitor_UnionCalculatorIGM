// Contribution rates for the employee share
export const socialSecurityRates = {
    pensionInsurance: 0.093, // Arbeitnehmeranteil Rentenversicherung
    unemploymentInsurance: 0.013, // Arbeitnehmeranteil Arbeitslosenversicherung
    healthInsurance: 0.0795, // Arbeitnehmeranteil Krankenversicherung inkl. Zusatzbeitrag
    careInsurance: 0.017, // Arbeitnehmeranteil Pflegeversicherung
    careInsuranceChildless: 0.017, // Arbeitnehmeranteil Pflegeversicherung für Kinderlose
  };
  
// Contribution assessment ceilings for health insurance (2024)
  export const contributionLimits = {
    healthInsurance: 6800, // Monatsgrenze in Euro
    pensionInsurance: 0 //ToDO
  };
  