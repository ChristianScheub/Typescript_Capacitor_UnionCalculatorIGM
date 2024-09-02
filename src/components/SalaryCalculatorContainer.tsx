import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../stateManagement/store";
import {
  setRegions,
  setYears,
  setSalaryGroups,
  setSelectedRegion,
  setSelectedYear,
  setSelectedSalaryGroup,
  setBonus,
  setSalary,
  setSalaryWithBonus,
  setWorkingHours,
  setChristmasBonusP,
  setProfitSharingP,
  setNonTariffBonus,
} from "../stateManagement/salaryCalculatorSlice";
import unionContractCalculatorService from "../services/unionContractCalculatorService";
import { SalaryCalculatorView } from "../views/SalaryCalculator/SalaryCalculatorView";
import Logger from "../services/logger/logger";
import {
  selectChristmasBonusP,
  selectProfitSharingP,
  selectRegions,
  selectSalaryGroups,
} from "../stateManagement/selectors/unionContractSelectors";
import {
  selectSelectedRegion,
  selectSelectedYear,
  selectSelectedSalaryGroup,
  selectWorkingHours,
  selectYears,
} from "../stateManagement/selectors/unionContractSelectors";
import {
  selectBonus,
  selectNonTariffBonus,
  selectSalary,
} from "../stateManagement/selectors/salarySelectors";
import { parseAndValidateNumber } from "../services/helper/parseNumber";
import { mapStringToBundesland } from "../services/isWestGermany/isWestGermany";
import { Bundesland } from "../services/isWestGermany/Bundesland";

const SalaryCalculatorContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const regions = useSelector(selectRegions);
  const years = useSelector(selectYears);
  const salaryGroups = useSelector(selectSalaryGroups);
  const selectedRegion = useSelector(selectSelectedRegion);
  const selectedYear = useSelector(selectSelectedYear);
  const selectedSalaryGroup = useSelector(selectSelectedSalaryGroup);
  const bonus = useSelector(selectBonus);
  const salary = useSelector(selectSalary);
  const workingHours = useSelector(selectWorkingHours);
  const christmasBonus = useSelector(selectChristmasBonusP);
  const profitSharing = useSelector(selectProfitSharingP);
  const nonTariffBonus = useSelector(selectNonTariffBonus);

  useEffect(() => {
    const fetchedRegions = unionContractCalculatorService.getRegions();
    dispatch(setRegions(fetchedRegions));
    if (!selectedRegion && fetchedRegions.length > 0) {
      dispatch(setSelectedRegion(mapStringToBundesland(fetchedRegions[0]) ?? Bundesland.EMPTY));
    }
  }, [dispatch, selectedRegion]);

  useEffect(() => {
    if (selectedRegion) {
      dispatch(setYears(unionContractCalculatorService.getYearsForRegion()));
    }
  }, [selectedRegion, dispatch]);

  useEffect(() => {
    if (selectedYear && selectedRegion) {
      dispatch(
        setSalaryGroups(
          unionContractCalculatorService.getEntgeltgruppenForRegionAndYear()
        )
      );
    }
  }, [selectedYear, selectedRegion, dispatch]);

  useEffect(() => {
    if (selectedRegion && selectedYear && selectedSalaryGroup && workingHours) {
      dispatch(setSalary(unionContractCalculatorService.getSalary()));
      dispatch(setSalaryWithBonus(unionContractCalculatorService.calculateSalaryWithBonus()));
    }
  }, [selectedRegion, selectedYear, selectedSalaryGroup, workingHours, bonus, dispatch]);

  const handleRegionChange = (region: string) => {
    const selectedBundesland = mapStringToBundesland(region);
    if(selectedBundesland){
      dispatch(setSelectedRegion(selectedBundesland));
    }
    else{
      dispatch(setSelectedRegion(Bundesland.EMPTY));
    }
    Logger.info("SelectedRegion has been set to: " + selectedBundesland+region);
  };

  const handleWorkingHoursChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setWorkingHours(value));
    Logger.info(
      "SelectedHours has been set to: " + value
    );
  };

  const handleYearChange = (year: string) => {
    dispatch(setSelectedYear(year));
    Logger.info("SelectedYear has been set to: " + year);
  };

  const handleSalaryGroupChange = (salaryGroup: string) => {
    dispatch(setSelectedSalaryGroup(salaryGroup));
    Logger.info("Selected salary group has been set to: " + salaryGroup);
  };

  const handleBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setBonus(value));
    Logger.info("Bonus has been set to: " + value);
  };

  const handleNonTariffBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setNonTariffBonus(value));
    Logger.info("Non-tariff bonus has been set to: " + value);
  };

  const handleChristmasBonus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setChristmasBonusP(value));
    Logger.info("Christmas bonus has been set to: " + value);
  };

  const handleProfitSharing = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseAndValidateNumber(event.target.value);
    dispatch(setProfitSharingP(value));
    Logger.info("Profit sharing has been set to: " + value);
  };

  return (
    <SalaryCalculatorView
      regions={regions}
      years={years}
      salaryGroups={salaryGroups}
      selectedRegion={selectedRegion}
      selectedYear={selectedYear}
      selectedSalaryGroup={selectedSalaryGroup}
      bonus={bonus}
      nonTariffBonusChange={nonTariffBonus}
      workingHours={workingHours}
      salary={salary}
      christmasBonus={christmasBonus}
      profitSharing={profitSharing}
      onRegionChange={handleRegionChange}
      onYearChange={handleYearChange}
      onSalaryGroupChange={handleSalaryGroupChange}
      onBonusChange={handleBonusChange}
      onNonTariffBonusChange={handleNonTariffBonusChange}
      onWorkingHoursChange={handleWorkingHoursChange}
      onChristmasBonusChange={handleChristmasBonus}
      onProfitSharingChange={handleProfitSharing}
    />
  );
};

export default SalaryCalculatorContainer;