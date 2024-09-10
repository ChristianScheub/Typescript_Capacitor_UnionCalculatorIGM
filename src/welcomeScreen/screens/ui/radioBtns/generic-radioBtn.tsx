import React from "react";

interface GenericRadioOptionProps<T, U = T> {
  label: string;
  value: T;
  selectedValue: T;
  onChange: (value: U) => void;
}

const GenericRadioOption: React.FC<GenericRadioOptionProps<string | any>> = ({
  label,
  value,
  selectedValue,
  onChange,
}) => {
  const isSelected = value === selectedValue;
  const handleClick = () => onChange(value);


  return (
    <div
      className={`option ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <table>
      <tbody>
        <tr>
          <td>
            <div className={`radio ${isSelected ? "selected" : ""}`} />
          </td>
          <td>
            <span>{label}</span>
          </td>
        </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>
  );
};

export default GenericRadioOption;