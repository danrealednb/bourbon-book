const Dropdown = ({ options, id, defaultValue, onChange }) => {
  return (
    <select id={id} name={id} defaultValue={defaultValue} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
