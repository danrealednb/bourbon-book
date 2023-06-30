import { Link, Form, useFetcher } from "@remix-run/react";

function SpiritListItem({ id, spirit }) {
  // const submit = useSubmit();
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm(
      `Are you sure? Do you want to delete this item?  (${spirit.brandName} ${spirit.name})`
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
          Deleting Dan {spirit.brandName} {spirit.name}...
        </p>
      </article>
    );
  }

  const getAge =
    spirit.age === 0
      ? "Unaged"
      : spirit.age === 1
      ? `${spirit.age} Year Old`
      : `${spirit.age} Years Old`;

  return (
    <article className="expense-item">
      <div>
        <p className="expense-title font-bold py-1 text-lg text-center">
          {spirit.name}
        </p>
        <p className="expense-title py-1 text-lg text-center">
          {spirit.brandName}
        </p>
        <p className="expense-title py-1 text-lg text-center">{spirit.type}</p>
        <p className="expense-title py-1 text-lg text-center">
          {spirit.proof} Proof
        </p>
        <p className="expense-title py-1 text-lg text-center">{getAge}</p>
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
