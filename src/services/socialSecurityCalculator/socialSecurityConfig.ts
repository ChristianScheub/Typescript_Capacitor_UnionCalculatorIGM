// Contribution rates for the employee share
export const socialSecurityRates = {
    pensionInsurance: 0.093, // Arbeitnehmeranteil Rentenversicherung
    unemploymentInsurance: 0.013, // Arbeitnehmeranteil Arbeitslosenversicherung
    healthInsurance: 0.0875, // 7.3% Basis + 1.45% Arbeitnehmeranteil Zusatzbeitrag (Ø ~2.9% für 2026)
    careInsurance: 0.017, // Arbeitnehmeranteil Pflegeversicherung
    careInsuranceChildless: 0.023, // Arbeitnehmeranteil Pflegeversicherung für Kinderlose
  };

// Contribution assessment ceilings (2026)
  export const contributionLimits = {
    healthInsurance: 5812.5, // Monatsgrenze in Euro (2026)
    pensionInsuranceWestGermany: 8050.00,
    pensionInsuranceOstGermany: 8050.00, //2024 war das 100 weniger wie west DE aber wurde nun angeglichen wohl:o
    unemploymentInsuranceWestGermany:  8050,
    unemploymentInsurancOstGermany: 8050,
    careInsurance: 5512.5
  };

  // Contribution assessment ceilings for health insurance (2026) - not used but for enxt year
  export const contributionLimits2026 = {
    healthInsurance: 5812.5, // Monatsgrenze in Euro
    pensionInsuranceWestGermany: 8450.00,
    pensionInsuranceOstGermany: 8450.00,
    unemploymentInsuranceWestGermany:  8450,// Prüfen ggf ob sie wirklich da auch gleich ist wie rentenversicherung, war 2024 unterschiedliche werte
    unemploymentInsurancOstGermany: 8450,
    careInsurance: 5175 //? Nicht gefunden
  };
  