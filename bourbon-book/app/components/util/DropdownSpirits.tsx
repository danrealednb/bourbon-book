const Dropdown = ({ options, id, onChange }) => {
  return (
    <select id={id} name={id} onChange={onChange}>
      {options.map((option) => {
        return (
          <option key={option.name} value={option.id}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
