import { Link, Form, useFetcher } from "@remix-run/react";

function SpiritListItem({ id, brand, type, name, proof }) {
  // const submit = useSubmit();
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm(
      `Are you sure? Do you want to delete this item?  (${brand} ${name})`
    );

    if (!proceed) {
      return;
    }
    fetcher.submit(null, {
      method: "delete",
      action: `/spirits/${id}`,
    });
  }

  if (fetcher.state !== "idle") {
    return (
      <article className="expense-item locked">
        <p className="text-white">
          Deleting Dan {brand} {name}...
        </p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <p className="expense-title font-bold py-1 text-lg text-center">
          {name}
        </p>
        <p className="expense-title py-1 text-lg text-center">{brand}</p>
        <p className="expense-title py-1 text-lg text-center">{type}</p>
        <p className="expense-title py-1 text-lg text-center">{proof} Proof</p>
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

export default SpiritListItem;
