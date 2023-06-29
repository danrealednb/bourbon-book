import { Form, useSearchParams } from "@remix-run/react";

function SpiritFilterBox() {
  const [params] = useSearchParams();

  return (
    <>
      <Form className="flex justify-center pt-5">
        <input
          type="text"
          name="query"
          placeholder="Search Spirits"
          defaultValue={params.get("query") || ""}
        ></input>
      </Form>
    </>
  );
}

export default SpiritFilterBox;
