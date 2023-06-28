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
        <p>Deleting...</p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{brand}</h2>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default BrandListItem;
