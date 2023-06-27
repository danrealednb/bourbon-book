import SpiritListItem from "./SpiritListItem";

type spirit_type = {
  id: string;
  brand: string;
  type: string;
};
function SpiritsList({ spirits }) {
  return (
    <ol id="expenses-list">
      {spirits.map((spirit: spirit_type) => (
        <li key={spirit.id}>
          <SpiritListItem
            id={spirit.id}
            brand={spirit.brand}
            type={spirit.type}
          />
        </li>
      ))}
    </ol>
  );
}

export default SpiritsList;
