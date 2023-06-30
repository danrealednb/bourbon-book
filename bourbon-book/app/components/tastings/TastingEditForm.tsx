import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
} from "@remix-run/react";
import { useState } from "react";

function TastingEditForm() {
  const { tastingData, spirits } = useLoaderData();
  const params = useParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const defaultValues = tastingData
    ? {
        spiritId: tastingData.spiritId,
        spiritName: tastingData.spiritName,
        rating: tastingData.rating,
        notes: tastingData.notes,
      }
    : {
        spiritId: "",
        spiritName: "",
        rating: "",
        notes: "",
      };

  const [spirit_name, setSpiritName] = useState(defaultValues.spiritName);

  const handleSpiritName = (e) => {
    const val = e.target.value;
    const name = spirits.filter((spirit) => spirit.id === val);
    setSpiritName(`${name[0].brandName} - ${name[0].name}`);
  };

  if (params.id && !tastingData) {
    // invalid id
    return <p>Invalid Tasting Id</p>;
  }

  // const isOpenCBChecked = open_cb === true ? "true" : "false";
  return (
    <Form method="patch" className="form" id="tasting-form">
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
              defaultValue={defaultValues.spiritId}
            >
              {spirits.map((spirit) => {
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
        // defaultValue={defaultValues.spiritName}
      />

      <div className="form-actions flex justify-center items-center py-5">
        <div className="form-actions grid justify-center items-center">
          <label htmlFor="notes" className="text-white py-2 text-center">
            Tasting Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Enter Tasting Notes Here"
            required
            defaultValue={tastingData.notes}
          />
        </div>
      </div>
      <div className="form-actions flex justify-center items-center py-5">
        <div className="form-actions grid justify-center items-center">
          <label htmlFor="rating" className="text-white py-2 text-center">
            Rating (Min 0 - Max 100)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            required
            placeholder="Enter Rating"
            step="0.1"
            min="0"
            max="100"
            defaultValue={tastingData.rating}
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

export default TastingEditForm;
