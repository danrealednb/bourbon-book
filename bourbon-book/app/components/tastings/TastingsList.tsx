import TastingListItem from "./TastingListItem";

function TastingsList({ tastings }) {
  return (
    <article>
      <h2 className="text-white flex justify-center text-4xl underline py-5">
        My Tastings
      </h2>
      <ol
        id="expenses-list"
        className="space-y-5 grid items-center justify-center py-5"
      >
        {tastings.map((tasting) => (
          <li key={tasting.id} className="text-white">
            <TastingListItem id={tasting.id} tasting={tasting} />
          </li>
        ))}
      </ol>
    </article>
  );
}

export default TastingsList;
