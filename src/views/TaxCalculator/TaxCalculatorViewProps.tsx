export interface TaxCalculatorViewProps {
    selectedTaxClass: string | null;
    onChange: (taxClass: string) => void;
    isChildless: boolean;
    onIsChildlessChange: (value: string) => void;
    healthInsuranceSupplement: number|null;
    onHealthInsuranceSupplement: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }