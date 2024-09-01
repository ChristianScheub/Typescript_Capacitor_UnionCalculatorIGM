import React from 'react';
import Select from '../../ui/Select';
import MaterialInput from '../../ui/MaterialInput';
import { SalaryCalculatorViewProps } from './SalaryCalculatorViewProps';
import Card from '../../ui/Card';

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
  return (
    <div>
      <br />
      <Card>
        <h1>Tarif auswählen</h1>

        <div>
          <Select
            options={regions.map(region => ({ value: region, label: region }))}
            value={regions.find(region => region === selectedRegion) || ''}
            onChange={(value) => onRegionChange(value)}
            placeholder="Region auswählen"
          />
        </div>
        <br />

        <div>
          <Select
            options={years.map(year => ({ value: year, label: year }))}
            value={years.find(year => year === selectedYear) || ''}
            onChange={(value) => onYearChange(value)}
            placeholder="Jahr auswählen"
          />
        </div>
        <br />

        <div>
          <Select
            options={salaryGroups.map(group => ({ value: group, label: group }))}
            value={salaryGroups.find(group => group === selectedSalaryGroup) || ''}
            onChange={(value) => onSalaryGroupChange(value)}
            placeholder="Entgeltgruppe auswählen"
          />
        </div>

        <div>
          <label>Arbeitsstunden</label>
          <MaterialInput
            value={workingHours}
            onChange={(event) => onWorkingHoursChange(event)}
            placeholder={workingHours}
            type="number"
          />
        </div>
        <br />
        <hr />
        <b>Brutto Monatsgehalt (ohne Bonis) </b>
        {salary ? `${salary}€` : 'Nicht verfügbar'}

      </Card>

      <Card>

        <div>
          <label>Leistungsentgelt (%)</label>
          <MaterialInput
            value={bonus}
            onChange={(event) => onBonusChange(event)}
            placeholder={bonus}
            type="number"
          />
        </div>

        <div>
          <label>Weihnachtsgeld (%)</label>
          <MaterialInput
            value={christmasBonus}
            onChange={(event) => onChristmasBonusChange(event)}
            placeholder={christmasBonus}
            type="number"
          />
        </div>

        <div>
          <label>Gewinnbeteiligung (%)</label>
          <MaterialInput
            value={profitSharing}
            onChange={(event) => onProfitSharingChange(event)}
            placeholder={profitSharing}
            type="number"
          />
        </div>


        <div>
          <label>Außertarifliche Zulagen</label>
          <MaterialInput
            value={nonTariffBonusChange}
            onChange={(event) => onNonTariffBonusChange(event)}
            placeholder={nonTariffBonusChange}
            type="number"
          />
        </div>

      </Card>

      <br /><br />
    </div>
  );
};