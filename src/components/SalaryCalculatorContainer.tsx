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
  selectSalary,
} from "../stateManagement/selectors/salarySelectors";

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

  useEffect(() => {
    const fetchedRegions = unionContractCalculatorService.getRegions();
    dispatch(setRegions(fetchedRegions));
    if (!selectedRegion && fetchedRegions.length > 0) {
      dispatch(setSelectedRegion(fetchedRegions[0]));
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
    Logger.warn("Triggered ");

    if (selectedRegion && selectedYear && selectedSalaryGroup && workingHours) {
      dispatch(setSalary(unionContractCalculatorService.getSalary()));
      dispatch(setSalaryWithBonus(unionContractCalculatorService.calculateSalaryWithBonus()));

      Logger.warn("Triggered get Salary");
    }
  }, [selectedRegion, selectedYear, selectedSalaryGroup, workingHours,bonus,dispatch]);

  const handleRegionChange = (region: string) => {
    dispatch(setSelectedRegion(region));
    Logger.info("SelectedRegion wurde gesetzt mit Wert: " + region);
  };

  const handleWorkingHoursChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setWorkingHours(Number(event.target.value)));
    Logger.info(
      "SelectedWorkingHours wurde gesetzt mit Wert: " + event.target.value
    );
  };

  const handleYearChange = (year: string) => {
    dispatch(setSelectedYear(year));
    Logger.info("SelectedYear wurde gesetzt mit Wert: " + year);
  };

  const handleSalaryGroupChange = (salaryGroup: string) => {
    dispatch(setSelectedSalaryGroup(salaryGroup));
    Logger.info("SelectedSalaryGroup wurde gesetzt mit Wert: " + salaryGroup);
  };

  const handleBonusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBonus(event.target.value));
    Logger.info("Bonus wurde gesetzt mit Wert: " + event.target.value);
  };

  const handleChristmasBonus = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setChristmasBonusP(event.target.value));
    Logger.info(
      "Weihnachtsbonus wurde gesetzt mit Wert: " + event.target.value
    );
  };

  const handleProfitSharing = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setProfitSharingP(event.target.value));
    Logger.info(
      "Gewinnbeteiligung wurde gesetzt mit Wert: " + event.target.value
    );
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
      workingHours={workingHours}
      salary={salary}
      christmasBonus={christmasBonus}
      profitSharing={profitSharing}
      onRegionChange={handleRegionChange}
      onYearChange={handleYearChange}
      onSalaryGroupChange={handleSalaryGroupChange}
      onBonusChange={handleBonusChange}
      onWorkingHoursChange={handleWorkingHoursChange}
      onChristmasBonusChange={handleChristmasBonus}
      onProfitSharingChange={handleProfitSharing}
    />
  );
};

export default SalaryCalculatorContainer;
