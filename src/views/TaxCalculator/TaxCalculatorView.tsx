import React from "react";
import Select from "../../ui/Select";
import { taxClassOptions } from "../../services/taxCalculatorService/taxConfig";
import { TaxCalculatorViewProps } from "./TaxCalculatorViewProps";
import Card from "../../ui/Card/Card";
import MaterialInput from "../../ui/MaterialInput";
import { useTranslation } from "react-i18next";

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
  onIsInChurchChange,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <Card>

        <h3>{t("taxCalculatorView_TaxDetails")}</h3>
        <i>{t("warning_calulcationIsEstimation")}</i>
        <br /><br />

        <Select
          options={taxClassOptions}
          value={selectedTaxClass || ""}
          onChange={onChange}
          placeholder={t("taxCalculatorView_SelectTaxClass")}
          helperText={t("taxCalculatorView_TaxClassHelperText")}
        />

        <br />
        <br />
        <Select
          options={[
            { label: t("taxCalculatorView_Yes"), value: "ja" },
            { label: t("taxCalculatorView_No"), value: "nein" },
          ]}
          value={isChildless ? "ja" : "nein"}
          onChange={onIsChildlessChange}
          placeholder={t("taxCalculatorView_Childless")}
          helperText={t("taxCalculatorView_ChildlessHelperText")}
        />

        <br />
        <br />
        <Select
          options={[
            { label: t("taxCalculatorView_Yes"), value: "ja" },
            { label: t("taxCalculatorView_No"), value: "nein" },
          ]}
          value={isInChurch ? "ja" : "nein"}
          onChange={onIsInChurchChange}
          placeholder={t("taxCalculatorView_ChurchMember")}
          helperText={t("taxCalculatorView_ChurchMemberHelperText")}
        />

        <div>
          <MaterialInput
            value={healthInsuranceSupplement}
            onChange={(event) => onHealthInsuranceSupplement(event)}
            type="number"
            label={t("taxCalculatorView_HealthInsuranceSupplement")}
            helperText={t("taxCalculatorView_HealthInsuranceSupplementHelperText")}
          />
        </div>
      </Card>

      <Card>
        <h3>{t("taxCalculatorView_Expenses")}</h3>
        <div>
          <MaterialInput
            value={routeToWork}
            onChange={(event) => onRouteToWorkChange(event)}
            type="number"
            label={t("taxCalculatorView_RouteToWork")}
            helperText={t("taxCalculatorView_RouteToWorkHelperText")}
          />
        </div>

        <div>
          <MaterialInput
            value={writeOff}
            onChange={(event) => onWriteOffChange(event)}
            type="number"
            label={t("taxCalculatorView_WriteOff")}
            helperText={t("taxCalculatorView_WriteOffHelperText")}
          />
        </div>
      </Card>
      <br />
      <br />
      <br />
    </div>
  );
};

export default TaxCalculatorView;