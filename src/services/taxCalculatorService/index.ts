import { calculateChurchTax } from './calculators/ChurchTaxCalculator';
import { ITaxCalculatorService } from './ITaxCalculatorService';
import { calculateSoli } from './calculators/SoliCalculatorCalculator';
import { calculateTax, calculateSalaryAfterAllTax } from './calculators/WageTaxCalculator';

const TaxCalculatorService: ITaxCalculatorService = {
  calculateTax,
  calculateSalaryAfterAllTax,
  calculateSoli,
  calculateChurchTax
};

export default TaxCalculatorService;