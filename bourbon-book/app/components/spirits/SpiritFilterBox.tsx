import { Form, useSearchParams, useNavigate } from "@remix-run/react";
import { useState } from "react";

function SpiritFilterBox() {
  const navigate = useNavigate();

  const [params] = useSearchParams();

  const handleChange = () => {
    document.getElementById("query").value = "";
    params.delete("filter");
    navigate("/spirits");
  };

  return (
    <>
      <div className="flex justify-center pt-5 space-x-2 items-center">
        <Form className="flex space-x-2">
          <input
            id="query"
            type="text"
            name="query"
            placeholder="Search Spirits"
            className="rounded border-2 border-white"
          />
          <button className="text-white border-2 rounded px-1">Search</button>
        </Form>
        {params.get("query") && (
          <button
            id="clearBtn"
            name="clearBtn"
            className="text-white border-2 rounded px-1"
            onClick={handleChange}
          >
            Clear
          </button>
        )}
      </div>
    </>
  );
}

export default SpiritFilterBox;
