import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
} from "@remix-run/react";
import { useState } from "react";

function TastingAddForm() {
  const spiritData = useLoaderData();
  const params = useParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const [spirit_name, setSpiritName] = useState(
    `${spiritData[0].brandName} - ${spiritData[0].name}`
  );

  const handleSpiritName = (e) => {
    const val = e.target.value;
    const name = spiritData.filter((spirit) => spirit.id === val);
    setSpiritName(`${name[0].brandName} - ${name[0].name}`);
  };

  // const isOpenCBChecked = open_cb === true ? "true" : "false";
  return (
    <Form method="post" className="form" id="collection-form">
      <div className="form-actions flex justify-center items-center py-5">
        <p className="form-actions grid justify-center items-center">
          <label htmlFor="type" className="text-white py-2 text-center">
            Choose Spirit
          </label>
          <p>
            <select
              id="spiritId"
              name="spiritId"
              onChange={handleSpiritName}
              className="border-2 border-white rounded"
            >
              {spiritData.map((spirit) => {
                return (
                  <option key={spirit.name} value={spirit.id}>
                    {spirit.brandName} - {spirit.name}
                  </option>
                );
              })}
            </select>
          </p>
        </p>
      </div>
      <input
        type="hidden"
        id="spiritName"
        name="spiritName"
        value={spirit_name}
      />
      <div className="form-actions flex justify-center items-center py-5">
        <div className="form-actions grid justify-center items-center">
          <label htmlFor="notes" className="text-white py-2 text-center">
            Tasting Notes
          </label>
          <textarea
            className="border-2 border-white rounded"
            id="notes"
            name="notes"
            placeholder="Enter Tasting Notes Here"
            required
          />
        </div>
      </div>
      <div className="form-actions flex justify-center items-center py-5">
        <div className="form-actions grid justify-center items-center">
          <label htmlFor="rating" className="text-white py-2 text-center">
            Rating (Min 0 - Max 100)
          </label>
          <input
            className="border-2 border-white rounded"
            type="number"
            id="rating"
            name="rating"
            required
            placeholder="Enter Rating"
            step="0.1"
            min="0"
            max="100"
          />
        </div>
      </div>

      <div className="form-actions flex justify-center items-center py-5 space-x-2">
        <button
          disabled={isSubmitting}
          className="px-1 text-white border-2 rounded"
        >
          {isSubmitting ? "Saving..." : "Save Item"}
        </button>
        <button className="px-1 text-white border-2 rounded">
          <Link to="..">{isSubmitting ? "Cancelling..." : "Cancel"}</Link>
        </button>
      </div>
    </Form>
  );
}

export default TastingAddForm;
