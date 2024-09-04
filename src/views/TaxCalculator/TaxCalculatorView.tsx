import React from "react";
import Select from "../../ui/Select";
import { taxClassOptions } from "../../services/taxCalculator/taxConfig";
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
  isInChurch,
  onIsInChurchChange
}) => {
  return (
    <div>
      <Card>
        <h3>Steuerdetails</h3>
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

        <br />
        <br />
        <Select
          options={[
            { label: "Ja", value: "ja" },
            { label: "Nein", value: "nein" },
          ]}
          value={isInChurch ? "ja" : "nein"}
          onChange={onIsInChurchChange}
          placeholder="Kirchenmitglied"
          helperText="In der anschließenden Berechnung ist auch die Annahme enthalten, dass Sie die Kirchensteuer im Rahmen Ihrer Steuererklärung absetzen und ggf die Kappungsgrenze nutzen falls möglich!"
        />

        <div>
          <MaterialInput
            value={healthInsuranceSupplement}
            onChange={(event) => onHealthInsuranceSupplement(event)}
            type="number"
            label="Krankenkasse Zusatzbeitrag"
            helperText="Der Gesamtezusatzbeitrag in Prozent (%) nennen. Dieser variiert je nach Krankenkasse."
          />
        </div>

      </Card>

      <Card>
        <h3>Werbungskosten</h3>
        <div>
          <MaterialInput
            value={routeToWork}
            onChange={(event) => onRouteToWorkChange(event)}
            type="number"
            label="Arbeitsweg"
            helperText="Arbeitsweg mit dem Auto in km einfach angeben um die Pendlerpauschale zu berücksichtigen. Es wird davon ausgegangen das sie jeden Tag im Büro waren bis auf den jeweiligen Feiertagen des Bundeslandes."
          />
        </div>

        <div>
          <MaterialInput
            value={writeOff}
            onChange={(event) => onWriteOffChange(event)}
            type="number"
            label="Weitere Werbungskosten"
            helperText="Zusätzliche Werbungskosten für das Jahr wie beispielsweise notwendige Fortbildungsbücher."
          />
        </div>
      </Card>
      <br /><br /><br />
    </div>
  );
};

export default TaxCalculatorView;