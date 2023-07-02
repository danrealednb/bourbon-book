import { Link, useFetcher } from "@remix-run/react";
import { FaStar } from "react-icons/fa";

function TastingListItem({ id, tasting }) {
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm(
      `Are you sure? Do you want to delete this spirit from your collection? (${tasting.spiritName})`
    );

    if (!proceed) {
      return;
    }
    fetcher.submit(null, {
      method: "delete",
      action: `/tastings/${id}`,
    });
  }

  if (fetcher.state !== "idle") {
    return (
      <article className="expense-item locked">
        <p className="text-white">Deleting {tasting.spiritName}...</p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div className="expense-title text-center">
        <h2 className="font-bold text-lg">{tasting.spiritName}</h2>
        <div className="flex justify-center items-center space-x-2">
          <FaStar className="text-yellow" />
          <p>{tasting.rating}</p>
        </div>

        <p>{tasting.notes}</p>
      </div>
      <menu className="expense-actions flex justify-center items-center py-5 space-x-2">
        <button className="px-1 py-1 bg-dark-blue text-white rounded">
          <Link to={id}>Edit</Link>
        </button>
        <button
          className="px-1 py-1 bg-red text-white rounded"
          onClick={deleteExpenseItemHandler}
        >
          Delete
        </button>
      </menu>
    </article>
  );
}

export default TastingListItem;
