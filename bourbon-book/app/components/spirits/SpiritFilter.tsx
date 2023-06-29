import { Form } from "@remix-run/react";

function SpiritFilter({ brands }) {
  return (
    <Form method="get" className="form" id="spirit-filter">
      <div className="flex justify-center space-x-2">
        <select id="filter" name="filter">
          {brands.map((brand: any) => {
            return (
              <option key={brand.name} value={brand.id}>
                {brand.name}
              </option>
            );
          })}
        </select>

        <button className="px-1 text-white border-2 rounded">Search</button>
      </div>
    </Form>
  );
}

export default SpiritFilter;
