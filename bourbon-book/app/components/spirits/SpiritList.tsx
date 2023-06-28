import SpiritListItem from "./SpiritListItem";

function SpiritsList({ spirits }) {
  return (
    <ol id="spirits-list">
      {spirits.map((spirit) => (
        <li key={spirit.id}>
          <SpiritListItem
            id={spirit.id}
            name={spirit.name}
            brand={spirit.brand}
            type={spirit.type}
            proof={spirit.proof}
          />
        </li>
      ))}
    </ol>
  );
}

export default SpiritsList;
