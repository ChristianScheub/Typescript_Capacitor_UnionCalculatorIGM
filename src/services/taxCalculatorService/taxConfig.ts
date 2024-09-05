// Purpose: Define constants for the tax calculation.

// Define income limits as constants
export const incomeLimits = {
  lowerLimit1: 11604,  // Lower limit for the first income bracket
  upperLimit1: 17005,  // Upper limit for the first income bracket
  lowerLimit2: 17006,  // Lower limit for the second income bracket
  upperLimit2: 66760,  // Upper limit for the second income bracket
  lowerLimit3: 66761,  // Lower limit for the third income bracket
  upperLimit3: 277825, // Upper limit for the third income bracket
  lowerLimit4: 277826, // Lower limit for the fourth income bracket
};

// Define tax rates and constants as constants
export const taxRates = {
  b1Coefficient: 922.98,  // Coefficient for the second tax bracket
  b1Intercept: 1400,      // Constant for the second tax bracket
  c1Coefficient: 181.19,  // Coefficient for the third tax bracket
  c1Intercept: 2397,      // Constant for the third tax bracket
  c2Intercept: 1025.38,   // Additional constant for the third tax bracket
  dRate: 0.42,            // Rate for the fourth tax bracket
  dIntercept: 10602.13,   // Constant for the fourth tax bracket
  eRate: 0.45,            // Rate for the fifth tax bracket
  eIntercept: 18936.88,   // Constant for the fifth tax bracket
};

// Steuerklassenfaktoren
export const taxClassFactors: Record<number, number> = {
  1: 11604, // Ledig 11604
  2: 12816, // Alleinerziehend
  3: 21816, // Verheiratet (besserverdienender Partner)
  4: 11604, // Verheiratet (beide Partner gleich verdienend)
  5: 0, // Verheiratet (weniger verdienender Partner)
  6: 0, // Zweitjob
};

export const taxClassOptions = [
  { value: "1", label: 'Ledig' },
  { value: "2", label: 'Alleinerziehend' },
  { value: "3", label: 'Verheiratet (besserverdienender Partner)' },
  { value: "4", label: 'Verheiratet (beide Partner gleich verdienend)' },
  { value: "5", label: 'Verheiratet (weniger verdienender Partner)' },
  { value: "6", label: 'Zweitjob' }
];

export const soliThresholdSingle = 96820; // für Alleinstehende
export const soliThresholdMarried = 193641; // für Verheiratete

//Werbungskosten
export const geldProKm = {
  shortDistance: 0.3,
  longDistance: 0.38,
};

//Church Tax
export interface StateConfig {
  taxRate: number;
  capRate?: number; // Optional, da Bayern keine Kappung hat
}

export const STATE_CONFIGS: Record<string, StateConfig> = {
  'Baden-Württemberg': { taxRate: 0.08, capRate: 0.0275 },
  'Bayern': { taxRate: 0.08 },
  'Berlin': { taxRate: 0.09, capRate: 0.03 },
  'Brandenburg': { taxRate: 0.09, capRate: 0.03 },
  'Bremen': { taxRate: 0.09, capRate: 0.035 },
  'Hamburg': { taxRate: 0.09, capRate: 0.03 },
  'Hessen': { taxRate: 0.09, capRate: 0.035 },
  'Mecklenburg-Vorpommern': { taxRate: 0.09, capRate: 0.03 },
  'Niedersachsen': { taxRate: 0.09, capRate: 0.035 },
  'Nordrhein-Westfalen': { taxRate: 0.09, capRate: 0.035 },
  'Rheinland-Pfalz': { taxRate: 0.09, capRate: 0.035 },
  'Saarland': { taxRate: 0.09, capRate: 0.035 },
  'Sachsen': { taxRate: 0.09, capRate: 0.035 },
  'Sachsen-Anhalt': { taxRate: 0.09, capRate: 0.035 },
  'Schleswig-Holstein': { taxRate: 0.09, capRate: 0.03 },
  'Thüringen': { taxRate: 0.09, capRate: 0.035 },
  '': { taxRate: 0.09, capRate: 0.035 },
};