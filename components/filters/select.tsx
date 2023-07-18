type Props = {
  selectedName: string;
  options: string[];
  selectedValue: string
  handleChangeSelect: any
};

const Select = ({ selectedName, options, selectedValue, handleChangeSelect }: Props) => {
  return (
    <select className="select select-bordered w-full focus:outline-none" value={selectedValue} onChange={handleChangeSelect}>
      <option value="">
        {selectedName}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
