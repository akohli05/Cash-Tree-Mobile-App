import { SetStateAction } from "react";

type DropDownProps = {
  label: string;
  name: string;
  options: { id: string; label: string }[];
  onChange: (event: { target: { value: SetStateAction<string> } }) => void;
};

const DropDown: React.FC<DropDownProps> = ({
  label,
  name,
  options,
  onChange,
}) => {
  return (
    <label>
      {label}
      <select onChange={onChange}>
        {options.map((option) => (
          <option value={option.label}>{option.id}</option>
        ))}
      </select>
    </label>
  );
};

export default DropDown;
