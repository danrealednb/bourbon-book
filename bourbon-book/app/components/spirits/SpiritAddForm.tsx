import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
} from "@remix-run/react";

import { useState } from "react";

// import DropdownSpirits from "~/components/util/DropdownSpirits";
import { WHISKEY_TYPES } from "~/data/whiskey_types";
// const WHISKEY_TYPES = ["Bourbon", "Scotch", "Rye"];

type BRAND = { id: string; name: string; dateAdded: string };

function SpiritAddForm() {
  const brands = useLoaderData();

  // const [whiskey_type, setType] = useState(WHISKEY_TYPES.BOURBON);
  //   const [whiskey_type, setType] = useState(WHISKEY_TYPES[0]);
  //   const handleChange = (e) => setType(e.target.value);

  const [whiskey_brand, setBrand] = useState(brands[0].name);
  const handleChangeBrand = (e) => {
    console.log("Selected Brand Id", e.target.value);
    const brandName = e.target[e.target.selectedIndex].text;
    console.log("Selected Brand Name", brandName);
    setBrand(brandName);
  };

  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  return (
    <Form method="post" className="form" id="spirit-form">
      <div>
        <p>
          <label htmlFor="name">Spirit Name</label>
          <input type="text" id="name" name="name" required />
        </p>
      </div>
      <div className="form-row">
        <p>
          <label htmlFor="brandId">Brand</label>
          <p>
            <select id="brandId" name="brandId" onChange={handleChangeBrand}>
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
      <div>
        <input
          type="hidden"
          id="brandName"
          name="brandName"
          value={whiskey_brand}
        />
      </div>
      <div>
        <p>
          <label htmlFor="proof">Proof</label>
          <input type="number" id="proof" name="proof" required />
        </p>
      </div>
      <div>
        <div className="form-row">
          <p>
            <label htmlFor="type">Whiskey Type</label>
            <p>
              <select id="type" name="type" defaultValue={WHISKEY_TYPES[0]}>
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
      </div>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Spirit"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default SpiritAddForm;
