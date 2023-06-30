import { Link, useFetcher } from "@remix-run/react";
import { FaCheckCircle } from "react-icons/fa";

function CollectionListItem({ id, spirit }) {
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm(
      `Are you sure? Do you want to delete this spirit from your collection? (${spirit.spiritName})`
    );

    if (!proceed) {
      return;
    }
    fetcher.submit(null, {
      method: "delete",
      action: `/collection/${id}`,
    });
  }

  if (fetcher.state !== "idle") {
    return (
      <article className="expense-item locked">
        <p className="text-white">Deleting {spirit.spiritName}...</p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title font-bold py-1 text-lg text-center">
          {spirit.spiritName}
        </h2>
        <div className="flex justify-center space-x-2">
          <label>Opened</label>
          <p>
            {spirit.opened === true ? (
              <FaCheckCircle className="text-green text-l" />
            ) : (
              <FaCheckCircle className="text-red text-l" />
            )}
          </p>
        </div>

        <div className="flex justify-center space-x-2">
          <label>Finished</label>
          <p>
            {spirit.finished === true ? (
              <FaCheckCircle className="text-green text-l" />
            ) : (
              <FaCheckCircle className="text-red text-l" />
            )}
          </p>
        </div>
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

export default CollectionListItem;
