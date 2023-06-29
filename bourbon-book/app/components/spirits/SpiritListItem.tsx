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
        <p>
          Deleting Dan {brand} {name}...
        </p>
      </article>
    );
  }

  return (
    <article className="expense-item">
      <div>
        <p className="expense-amount">{brand}</p>
        <p className="expense-title">{name}</p>
        <p className="expense-amount">{type}</p>
        <p className="expense-amount">{proof} Proof</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        {/* <Form method='delete' action={`/expenses/${id}`}>
          <button>Delete</button>
        </Form> */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default SpiritListItem;
