import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
  useActionData,
} from "@remix-run/react";

import { useState } from "react";

// import DropdownSpirits from "~/components/util/DropdownSpirits";
import { WHISKEY_TYPES } from "~/data/whiskey_types";
// const WHISKEY_TYPES = ["Bourbon", "Scotch", "Rye"];

type BRAND = { id: string; name: string; dateAdded: string };

function SpiritAddForm() {
  const brands = useLoaderData();
  const validationErrors = useActionData();
  // const [whiskey_type, setType] = useState(WHISKEY_TYPES.BOURBON);
  //   const [whiskey_type, setType] = useState(WHISKEY_TYPES[0]);
  //   const handleChange = (e) => setType(e.target.value);

  const [whiskey_brand, setBrand] = useState(brands[0].name);
  const handleChangeBrand = (e) => {
    const brandName = e.target[e.target.selectedIndex].text;
    setBrand(brandName);
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  return (
    <Form method="post" className="form" id="spirit-form">
      <p className="grid justify-center py-5">
        <label htmlFor="name" className="text-white py-2 text-center">
          Spirit Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border-2 border-white rounded"
        />
      </p>

      <div className="form-actions flex justify-center items-center py-5">
        <p className="form-actions grid justify-center items-center">
          <label htmlFor="brandId" className="text-white py-2 text-center">
            Brand
          </label>
          <p>
            <select
              id="brandId"
              name="brandId"
              onChange={handleChangeBrand}
              className="border-2 border-white rounded"
            >
              {brands.map((brand: BRAND) => {
                return (
                  <option key={brand.name} value={brand.id}>
                    {brand.name}
                  </option>
                );
              })}
            </select>
          </p>
          {/* <p>Selectd Brand {whiskey_brand}</p> */}
        </p>
      </div>
      <div className="form-actions flex justify-center items-center">
        <input
          type="hidden"
          id="brandName"
          name="brandName"
          value={whiskey_brand}
        />
      </div>
      <div className="form-actions flex justify-center items-center py-5">
        <p className="form-actions grid justify-center items-center">
          <label htmlFor="proof" className="text-white py-2 text-center">
            Proof
          </label>
          <input
            className="border-2 border-white rounded"
            type="number"
            id="proof"
            name="proof"
            required
            placeholder="Enter Proof"
            step="0.01"
            min="0"
          />
        </p>
      </div>
      <div className="form-actions flex justify-center items-center py-5">
        <p className="form-actions grid justify-center items-center">
          <label htmlFor="age" className="text-white py-2 text-center">
            Age
          </label>
          <input
            className="border-2 border-white rounded"
            type="number"
            id="age"
            name="age"
            required
            placeholder="Enter Age"
            step="1"
            min="0"
          />
        </p>
      </div>
      <div className="form-actions flex justify-center items-center py-5">
        <p className="form-actions grid justify-center items-center">
          <label htmlFor="type" className="text-white py-2 text-center">
            Whiskey Type
          </label>
          <p>
            <select
              id="type"
              name="type"
              defaultValue={WHISKEY_TYPES[0]}
              className="border-2 border-white rounded"
            >
              {WHISKEY_TYPES.map((whiskey) => {
                return (
                  <option key={whiskey} value={whiskey}>
                    {whiskey}
                  </option>
                );
              })}
            </select>
          </p>
        </p>
      </div>
      {validationErrors && (
        <ul className="flex justify-center">
          {Object.values(validationErrors).map((error) => (
            <li className="text-white text-xl" key={error}>
              {error}
            </li>
          ))}
        </ul>
      )}
      <div className="form-actions flex justify-center items-center py-5 space-x-2">
        <button
          disabled={isSubmitting}
          className="px-1 text-white border-2 rounded"
        >
          {isSubmitting ? "Saving..." : "Save Spirit"}
        </button>
        <button
          disabled={isSubmitting}
          className="px-1 text-white border-2 rounded"
        >
          <Link to="..">Cancel</Link>
        </button>
      </div>
    </Form>
  );
}

export default SpiritAddForm;
