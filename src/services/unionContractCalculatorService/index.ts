import { IUnionContractCalculatorService } from "./IUnionContractCalculatorService";
import {
  calculateBonus,
  calculateSalaryWithBonus,
  caclulateChristmasBonus,
  calculateTransformationsGeld,
  calculateTZugA,
  calculateTZugB,
  calculateUrlaubsgeld,
  calculateSalaryForGroup,
  calculateProfitSharing,
  calculateSalaryWithAllBonus
} from "./calculator";
import {
  getEntgeltgruppenForRegionAndYear,
  getRegions,
  getSalary,
  getSalaryForEG,
  getYearsForRegion,
  getBasicWage,
} from "./getters";

const unionContractCalculatorService: IUnionContractCalculatorService = {
  getRegions,
  getYearsForRegion,
  getEntgeltgruppenForRegionAndYear,
  getSalary,
  getBasicWage,
  getSalaryForEG,
  calculateSalaryWithBonus,
  calculateBonus,
  caclulateChristmasBonus,
  calculateTransformationsGeld,
  calculateTZugA,
  calculateTZugB,
  calculateUrlaubsgeld,
  calculateSalaryForGroup,
  calculateProfitSharing,
  calculateSalaryWithAllBonus
};

export default unionContractCalculatorService;
