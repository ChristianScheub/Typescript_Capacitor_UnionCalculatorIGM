import React from "react";
import Select from "../../ui/Select";
import { taxClassOptions } from "../../config/taxConfig";
import { TaxCalculatorViewProps } from "./TaxCalculatorViewProps";
import Card from "../../ui/Card";
import MaterialInput from "../../ui/MaterialInput";

const TaxCalculatorView: React.FC<TaxCalculatorViewProps> = ({
  selectedTaxClass,
  onChange,
  isChildless,
  onIsChildlessChange,
  healthInsuranceSupplement,
  onHealthInsuranceSupplement,
  routeToWork,
  onRouteToWorkChange,
  writeOff,
  onWriteOffChange,
}) => {
  return (
    <Card>
      <h1>Steuerdetails</h1>
      <Select
        options={taxClassOptions}
        value={selectedTaxClass || ""}
        onChange={onChange}
        placeholder="Steuerklasse auswählen"
      />

      <br />
      <br />
      <Select
        options={[
          { label: "Ja", value: "ja" },
          { label: "Nein", value: "nein" },
        ]}
        value={isChildless ? "ja" : "nein"}
        onChange={onIsChildlessChange}
        placeholder="Kinderlos"
      />

      <div>
        <label>Krankenkasse Zusatzbeitrag (%)</label>
        <MaterialInput
          value={healthInsuranceSupplement}
          onChange={(event) => onHealthInsuranceSupplement(event)}
          type="number"
        />
      </div>

      <div>
        <label>Arbeitsweg (Mit dem Auto, Einmalweg)</label>
        <MaterialInput
          value={routeToWork}
          onChange={(event) => onRouteToWorkChange(event)}
          type="number"
        />
      </div>

      <div>
        <label>Steuerliche Abschreibung</label>
        <MaterialInput
          value={  writeOff}
          onChange={(event) => onWriteOffChange(event)}
          type="number"
        />
      </div>
    </Card>
  );
};

export default TaxCalculatorView;