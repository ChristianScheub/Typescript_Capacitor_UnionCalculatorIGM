import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stateManagement/store';
import { setTaxClass,setChildless, setHealthInsuranceSupplement } from '../stateManagement/salaryCalculatorSlice';
import TaxCalculatorView from '../views/TaxCalculator/TaxCalculatorView';
import Logger from '../services/logger/logger';
import { selectHealthInsuranceSupplement } from '../stateManagement/selectors/socialSecuritySelectors';
import { parseAndValidateNumber } from '../services/helper/parseNumber';

const TaxClassContainer: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTaxClass = useSelector((state: RootState) => state.salaryCalculator.taxClass) || '1';
  const isChildless = useSelector((state: RootState) => state.salaryCalculator.isChildless);
  const healthInsuranceSupplement = useSelector(selectHealthInsuranceSupplement);


  const handleTaxClassChange = (taxClass: string) => {
    const taxClassNumber: number = parseInt(taxClass, 10);
      dispatch(setTaxClass(taxClassNumber));
  };

  const handleIsChildlessChange = (value: string) => {
    const isChildlessBoolean: boolean = value === 'ja';
    dispatch(setChildless(isChildlessBoolean));
  };

  const handleHealthInsuranceSupplement = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setHealthInsuranceSupplement(value));
    Logger.info(
      "HealthInsuranceSupplement was set to: " + event.target.value
    );
  };
  

  return (
    <div>
      <TaxCalculatorView
        selectedTaxClass={selectedTaxClass?.toString()}
        onChange={handleTaxClassChange}
        isChildless={isChildless}
        onIsChildlessChange={handleIsChildlessChange}
        healthInsuranceSupplement={healthInsuranceSupplement}
        onHealthInsuranceSupplement={handleHealthInsuranceSupplement}
      />
    </div>
  );
};

export default TaxClassContainer;
