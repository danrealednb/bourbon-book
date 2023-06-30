import SpiritListItem from "./SpiritListItem";

function SpiritsList({ spirits }) {
  return (
    <article>
      <h2 className="text-white flex justify-center text-4xl underline py-5">
        Spirits
      </h2>
      <ol
        id="spirits-list"
        className="space-y-5 grid items-center justify-center py-5"
      >
        {spirits.map((spirit) => (
          <li key={spirit.id} className="text-white">
            <SpiritListItem
              id={spirit.id}
              // name={spirit.name}
              // brand={spirit.brandName}
              // type={spirit.type}
              // proof={spirit.proof}
              // age={spirit.age}
              spirit={spirit}
            />
          </li>
        ))}
      </ol>
    </article>
  );
}

export default SpiritsList;
