// Purpose: Define constants for the tax calculation.

export const incomeLimits = {
  lowerLimit1: 12348,      // Grundfreibetrag 2026
  upperLimit1: 17799,      // erste Progressionszone endet bei 17.799 €
  lowerLimit2: 17800,
  upperLimit2: 69878,      // zweite Zone bis zum Spitzensteuersatz
  lowerLimit3: 69879,
  upperLimit3: 277825,     // Spitzenzone bis Reichensteuersatz
  lowerLimit4: 277826      // ab hier gilt 45 %-Satz
};

// Define tax rates and constants as constants
export const taxRates = {
  b1Coefficient: 914.51,  // Coefficient for the second tax bracket
  b1Intercept: 1400,      // Constant for the second tax bracket
  c1Coefficient: 173.10,  // Coefficient for the third tax bracket
  c1Intercept: 2397,      // Constant for the third tax bracket
  c2Intercept: 1034.87,   // Additional constant for the third tax bracket
  dRate: 0.42,            // Rate for the fourth tax bracket
  dIntercept: 11135.63,   // Constant for the fourth tax bracket (§32a EStG 2026)
  eRate: 0.45,            // Rate for the fifth tax bracket
  eIntercept: 19470.38,   // Constant for the fifth tax bracket (§32a EStG 2026)
};


export const taxClassOptions = [
  { value: "1", label: 'Ledig' },
  { value: "2", label: 'Alleinerziehend' },
  { value: "3", label: 'Verheiratet (besserverdienender Partner)' },
  { value: "4", label: 'Verheiratet (beide Partner gleich verdienend)' },
  { value: "5", label: 'Verheiratet (weniger verdienender Partner)' },
  { value: "6", label: 'Zweitjob' }
];

export const soliThresholdSingle = 98403;  // für Alleinstehende (2026)
export const soliThresholdMarried = 196806; // für Verheiratete (2026)

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