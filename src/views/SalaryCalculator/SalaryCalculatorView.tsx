import React from 'react';
import Select from '../../ui/Select';
import MaterialInput from '../../ui/MaterialInput';
import { SalaryCalculatorViewProps } from './SalaryCalculatorViewProps';
import Card from '../../ui/Card/Card';
import { useTranslation } from "react-i18next";

export const SalaryCalculatorView: React.FC<SalaryCalculatorViewProps> = ({
  regions,
  years,
  salaryGroups,
  selectedRegion,
  selectedYear,
  selectedSalaryGroup,
  nonTariffBonusChange,
  bonus,
  workingHours,
  salary,
  christmasBonus,
  profitSharing,
  onRegionChange,
  onYearChange,
  onSalaryGroupChange,
  onBonusChange,
  onNonTariffBonusChange,
  onWorkingHoursChange,
  onChristmasBonusChange,
  onProfitSharingChange
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <br />
      <Card>
        <h3>{t("salaryCalculatorView_select_tariff")}</h3>
        <br/>

        <div>
          <Select
            options={regions.map(region => ({ value: region, label: region }))}
            value={regions.find(region => region === selectedRegion) || ''}
            onChange={(value) => onRegionChange(value)}
            placeholder={t("salaryCalculatorView_select_region")}
          />
        </div>
        <br />

        <div>
          <Select
            options={years.map(year => ({ value: year, label: year }))}
            value={years.find(year => year === selectedYear) || ''}
            onChange={(value) => onYearChange(value)}
            placeholder={t("salaryCalculatorView_select_year")}
          />
        </div>
        <br />

        <div>
          <Select
            options={salaryGroups.map(group => ({ value: group, label: group }))}
            value={salaryGroups.find(group => group === selectedSalaryGroup) || ''}
            onChange={(value) => onSalaryGroupChange(value)}
            placeholder={t("salaryCalculatorView_select_salary_group")}
          />
        </div>

        <div>
          <MaterialInput
            value={workingHours}
            label={t("salaryCalculatorView_working_hours")}
            onChange={(event) => onWorkingHoursChange(event)}
            type="number"
          />
        </div>
        <br />
        <hr />
        <b>{t("salaryCalculatorView_gross_monthly_salary")}</b>
        {salary ? `${salary}€` : t("salaryCalculatorView_not_available")}

      </Card>
      <br />

      <Card>
        <h3>{t("salaryCalculatorView_bonuses")}</h3>
        <div>
          <MaterialInput
            value={bonus}
            onChange={(event) => onBonusChange(event)}
            type="number"
            label={t("salaryCalculatorView_performance_bonus")}
            helperText={t("salaryCalculatorView_enter_percentage")}
          />
        </div>

        <div>
          <MaterialInput
            value={christmasBonus}
            onChange={(event) => onChristmasBonusChange(event)}
            type="number"
            label={t("salaryCalculatorView_christmas_bonus")}
            helperText={t("salaryCalculatorView_christmas_bonus_default")}
          />
        </div>

        <div>
          <MaterialInput
            value={profitSharing}
            onChange={(event) => onProfitSharingChange(event)}
            type="number"
            label={t("salaryCalculatorView_profit_sharing")}
            helperText={t("salaryCalculatorView_profit_sharing_percentage")}
          />
        </div>

        <div>
          <MaterialInput
            value={nonTariffBonusChange}
            onChange={(event) => onNonTariffBonusChange(event)}
            type="number"
            label={t("salaryCalculatorView_non_tariff_allowances")}
            helperText={t("salaryCalculatorView_non_tariff_allowances_hint")}
          />
        </div>

      </Card>

      <br /><br /><br />
    </div>
  );
};