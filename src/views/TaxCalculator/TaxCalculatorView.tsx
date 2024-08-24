import React from "react";
import Select from "../../ui/Select";
import { taxClassOptions } from "../../config/taxConfig";
import { TaxCalculatorViewProps } from "./TaxCalculatorViewProps";
import Card from "../../ui/Card";

const TaxCalculatorView: React.FC<TaxCalculatorViewProps> = ({
  selectedTaxClass,
  onChange,
  isChildless,
  onIsChildlessChange,
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
    </Card>
  );
};

export default TaxCalculatorView;
