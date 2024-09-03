import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stateManagement/store';
import TaxCalculatorView from '../views/TaxCalculator/TaxCalculatorView';
import Logger from '../services/logger/logger';
import { selectHealthInsuranceSupplement } from '../stateManagement/selectors/socialSecuritySelectors';
import { parseAndValidateNumber } from '../services/helper/parseNumber';
import { selectIsInChurch, selectRouteToWork, selectWriteOff } from '../stateManagement/selectors/taxSelectors';
import { setChildless, setHealthInsuranceSupplement, setIsInChurch, setRouteToWork, setTaxClass, setWriteOff } from '../stateManagement/slices/TaxSlice';

const TaxClassContainer: React.FC = () => {
  const dispatch = useDispatch();
  const selectedTaxClass = useSelector((state: RootState) => state.tax.taxClass) || '1';
  const isChildless = useSelector((state: RootState) => state.tax.isChildless);
  const healthInsuranceSupplement = useSelector(selectHealthInsuranceSupplement);
  const routeToWork = useSelector(selectRouteToWork);
  const writeOff = useSelector(selectWriteOff);
  const isInChurch = useSelector(selectIsInChurch);



  const handleTaxClassChange = (taxClass: string) => {
    const taxClassNumber: number = parseInt(taxClass, 10);
      dispatch(setTaxClass(taxClassNumber));
  };

  const handleIsChildlessChange = (value: string) => {
    const isChildlessBoolean: boolean = value === 'ja';
    dispatch(setChildless(isChildlessBoolean));
  };

  const handleIsInChurch = (value: string) => {
    const isInChurch: boolean = value === 'ja';
    dispatch(setIsInChurch(isInChurch));
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
  const handleWriteOff = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setWriteOff(value));
    Logger.info(
      "writeOff was set to: " + event.target.value
    );
  };
  
  const handleRouteToWork = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setRouteToWork(value));
    Logger.info(
      "Route To Work was set to: " + event.target.value
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
        writeOff={writeOff}
        onWriteOffChange={handleWriteOff}
        routeToWork={routeToWork}
        onRouteToWorkChange={handleRouteToWork}
        isInChurch={isInChurch}
        onIsInChurchChange={handleIsInChurch}
      />
    </div>
  );
};

export default TaxClassContainer;
