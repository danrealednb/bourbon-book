import { Link, useFetcher } from "@remix-run/react";

function BrandListItem({ id, brand }) {
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm(
      `Are you sure? Do you want to delete this brand? (${brand})`
    );

    if (!proceed) {
      return;
    }
    fetcher.submit(null, {
      method: "delete",
      action: `/brands/${id}`,
    });
  }

  if (fetcher.state !== "idle") {
    return (
      <article className="expense-item locked">
        <p className="text-white">Deleting {brand}...</p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title font-bold py-1 text-lg text-center">
          {brand}
        </h2>
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

export default BrandListItem;
