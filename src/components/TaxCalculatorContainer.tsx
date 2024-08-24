import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stateManagement/store';
import { setTaxClass,setChildless } from '../stateManagement/salaryCalculatorSlice';
import TaxCalculatorView from '../views/TaxCalculator/TaxCalculatorView';

const TaxClassContainer: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTaxClass = useSelector((state: RootState) => state.salaryCalculator.taxClass) || '1';
  const isChildless = useSelector((state: RootState) => state.salaryCalculator.isChildless);

  const handleTaxClassChange = (taxClass: string) => {
    const taxClassNumber: number = parseInt(taxClass, 10);
      dispatch(setTaxClass(taxClassNumber));
  };

  const handleIsChildlessChange = (value: string) => {
    const isChildlessBoolean: boolean = value === 'ja';
    dispatch(setChildless(isChildlessBoolean));
  };
  

  return (
    <div>
      <TaxCalculatorView
        selectedTaxClass={selectedTaxClass?.toString()}
        onChange={handleTaxClassChange}
        isChildless={isChildless}
        onIsChildlessChange={handleIsChildlessChange}
      />
    </div>
  );
};

export default TaxClassContainer;
