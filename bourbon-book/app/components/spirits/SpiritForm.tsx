import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
} from "@remix-run/react";

import { useState } from "react";

import Dropdown from "~/components/util/Dropdown";
// import { WHISKEY_TYPES } from "~/data/whiskey_types";
const WHISKEY_TYPES = ["Bourbon", "Scotch", "Rye"];

function SpiritForm() {
  // const [whiskey_type, setType] = useState(WHISKEY_TYPES.BOURBON);
  const [whiskey_type, setType] = useState("Bourbon");
  const [whiskey_brand, setBrand] = useState("Buffalo Trace");
  const handleChange = (e) => setType(e.target.value);
  const handleChange2 = (e) => setBrand(e.target.value);

  console.log(whiskey_type);
  console.log(whiskey_brand);
  const { spiritData, brands } = useLoaderData();
  console.log("BRANDS-----", brands);
  const params = useParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const defaultValues = spiritData
    ? {
        name: spiritData.name,
        brand: spiritData.brand,
        type: spiritData.type,
        proof: spiritData.proof,
      }
    : {
        name: "",
        brand: "",
        type: "",
        proof: "",
      };

  if (params.id && !spiritData) {
    // invalid id
    return <p>Invalid Brand Id</p>;
  }

  return (
    <Form
      method={spiritData ? "patch" : "post"}
      //   method="post"
      className="form"
      id="spirit-form"
    >
      <div>
        <p>
          <label htmlFor="name">Spirit Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            defaultValue={defaultValues.name}
          />
        </p>
      </div>
      <div className="form-row">
        <p>
          <label htmlFor="type">Brand</label>
          <p>
            <Dropdown
              options={brands}
              id="type"
              defaultValue={defaultValues.brand}
              onChange={handleChange2}
            />
          </p>
        </p>
      </div>
      <div>
        <p>
          <label htmlFor="name">Proof</label>
          <input
            type="number"
            id="proof"
            name="proof"
            required
            defaultValue={defaultValues.proof}
          />
        </p>
      </div>
      <div>
        <div className="form-row">
          <p>
            <label htmlFor="type">Whiskey Type</label>
            <p>
              <Dropdown
                options={WHISKEY_TYPES}
                id="type"
                defaultValue={defaultValues.type}
                onChange={handleChange}
              />
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

export default SpiritForm;
