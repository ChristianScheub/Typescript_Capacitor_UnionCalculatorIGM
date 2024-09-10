import React from 'react';
import Select from '../../ui/Select';
import MaterialInput from '../../ui/MaterialInput';
import { SalaryCalculatorViewProps } from './SalaryCalculatorViewProps';
import Card from '../../ui/Card/Card';

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
        <h3>Tarif auswählen</h3>
        <br/>

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
          <MaterialInput
            value={workingHours}
            label="Arbeitsstunden"
            onChange={(event) => onWorkingHoursChange(event)}
            type="number"
          />
        </div>
        <br />
        <hr />
        <b>Brutto Monatsgehalt (ohne Bonis) </b>
        {salary ? `${salary}€` : 'Nicht verfügbar'}

      </Card>
      <br />

      <Card>
        <h3>Zulagen</h3>
        <div>
          <MaterialInput
            value={bonus}
            onChange={(event) => onBonusChange(event)}
            type="number"
            label="Leistungsentgelt"
            helperText="Bitte in Prozent eingeben"

          />
        </div>

        <div>
          <MaterialInput
            value={christmasBonus}
            onChange={(event) => onChristmasBonusChange(event)}
            type="number"
            label="Weihnachtsgeld"
            helperText='Der Standardwert ist meist bei 50%'
          />
        </div>

        <div>
          <MaterialInput
            value={profitSharing}
            onChange={(event) => onProfitSharingChange(event)}
            type="number"
            label="Gewinnbeteiligung (%)"
            helperText='Prozentual basierend auf das Monatsgehalt'
          />
        </div>


        <div>
          <MaterialInput
            value={nonTariffBonusChange}
            onChange={(event) => onNonTariffBonusChange(event)}
            type="number"
            label="Außertarifliche Zulagen"
            helperText='Diese sind optional für Firmen und werden direkt in Euro angegeben'
          />
        </div>

      </Card>

      <br /><br /><br />
    </div>
  );
};