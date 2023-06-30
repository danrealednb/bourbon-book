import CollectionListItem from "./CollectionListItem";

function CollectionList({ spirits }) {
  return (
    <article>
      <h2 className="text-white flex justify-center text-4xl underline py-5">
        My Collection
      </h2>
      <ol
        id="expenses-list"
        className="space-y-5 grid items-center justify-center py-5"
      >
        {spirits.map((spirit) => (
          <li key={spirit.id} className="text-white">
            <CollectionListItem id={spirit.id} spirit={spirit} />
          </li>
        ))}
      </ol>
    </article>
  );
}

export default CollectionList;
