import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stateManagement/store';
import { setTaxClass,setChildless, setHealthInsuranceSupplement } from '../stateManagement/salaryCalculatorSlice';
import TaxCalculatorView from '../views/TaxCalculator/TaxCalculatorView';
import Logger from '../services/logger/logger';
import { selectHealthInsuranceSupplement } from '../stateManagement/selectors/socialSecuritySelectors';

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
    dispatch(setHealthInsuranceSupplement(Number(event.target.value)));
    Logger.info(
      "SelectedWorkingHours wurde gesetzt mit Wert: " + event.target.value
    );
  };
  

  return (
    <div>
      <TaxCalculatorView
        selectedTaxClass={selectedTaxClass?.toString()}
        onChange={handleTaxClassChange}
        isChildless={isChildless}
        onIsChildlessChange={handleIsChildlessChange}
        healthInsuranceSupplement={healthInsuranceSupplement ?? 0}
        onHealthInsuranceSupplement={handleHealthInsuranceSupplement}
      />
    </div>
  );
};

export default TaxClassContainer;
