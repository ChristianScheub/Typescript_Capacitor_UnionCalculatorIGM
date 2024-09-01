import Logger from "../logger/logger";

// Utility function for converting and validating a value into a number
export function parseAndValidateNumber(value: string): number | null {
    const numberValue = parseFloat(value);

    if (value.trim() === '') {
        return 0;
      }
  
    if (!isNaN(numberValue)) {
      return numberValue;
    } else {
      Logger.error("Invalid value should have been set " + value);
      return null;
    }
  }