import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
} from "@remix-run/react";

import { useState } from "react";

import { WHISKEY_TYPES } from "~/data/whiskey_types";
type BRAND = { id: string; name: string; dateAdded: string };

function SpiritForm() {
  const { spiritData, brands } = useLoaderData();
  const params = useParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const defaultValues = spiritData
    ? {
        name: spiritData.name,
        brand: spiritData.brandName,
        brandId: spiritData.brandId,
        type: spiritData.type,
        proof: spiritData.proof,
        age: spiritData.age,
      }
    : {
        name: "",
        brand: "",
        brandId: "",
        type: "",
        proof: "",
        age: "",
      };

  if (params.id && !spiritData) {
    // invalid id
    return <p>Invalid Spirit Id</p>;
  }

  const [whiskey_brand, setBrand] = useState(defaultValues.brand);
  const handleChangeBrand = (e) => {
    const brandName = e.target[e.target.selectedIndex].text;
    setBrand(brandName);
  };

  // console.log(whiskey_type);
  // console.log(whiskey_brand);

  return (
    <Form
      method={spiritData ? "patch" : "post"}
      //   method="post"
      className="form"
      id="spirit-form"
    >
      <p className="grid justify-center py-5">
        <label htmlFor="name" className="text-white py-2 text-center">
          Spirit Name
        </label>
        <input
          className="border-2 border-white rounded"
          type="text"
          id="name"
          name="name"
          required
          defaultValue={defaultValues.name}
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
              defaultValue={defaultValues.brandId}
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
      {/* <p>Selectd Brand {whiskey_brand}</p> */}
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
            defaultValue={defaultValues.proof}
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
            defaultValue={defaultValues.age}
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
              defaultValue={defaultValues.type}
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

export default SpiritForm;
