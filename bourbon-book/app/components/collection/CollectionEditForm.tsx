import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
} from "@remix-run/react";
import { useState } from "react";

function CollectionForm() {
  const { spiritData, spirits } = useLoaderData();
  const params = useParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";

  const defaultValues = spiritData
    ? {
        spiritId: spiritData.spiritId,
        spiritName: spiritData.spiritName,
        opened: spiritData.opened,
        finished: spiritData.finished,
      }
    : {
        spiritId: "",
        spiritName: "",
        opened: "",
        finished: "",
      };

  const [open_cb, setOpenCB] = useState(defaultValues.opened);
  const [spirit_name, setSpiritName] = useState(defaultValues.spiritName);

  const handleOpenCB = (e) => {
    setOpenCB(e.target.checked);
  };
  const handleSpiritName = (e) => {
    const val = e.target.value;
    const name = spirits.filter((spirit) => spirit.id === val);
    setSpiritName(`${name[0].brandName} - ${name[0].name}`);
  };

  const [finished_cb, setFinishedCB] = useState(defaultValues.finished);

  const handleFinishedCB = (e) => {
    setFinishedCB(e.target.checked);
  };

  if (params.id && !spiritData) {
    // invalid id
    return <p>Invalid Collection Item Id</p>;
  }

  // const isOpenCBChecked = open_cb === true ? "true" : "false";
  return (
    <Form method="patch" className="form" id="collection-form">
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
              className="border-2 border-white rounded"
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
      <div className="flex justify-center items-center space-x-2">
        <input
          id="opened"
          type="checkbox"
          value={open_cb === true ? "true" : "false"}
          checked={open_cb}
          name="opened"
          className="rounded"
          onChange={handleOpenCB}
        />
        <label htmlFor="opened-radio" className="text-white">
          Opened
        </label>
        {/* <input
          type="hidden"
          id="opened"
          name="opened"
          value={open_cb === true ? "true" : "false"}
        /> */}
        <input
          id="finished"
          type="checkbox"
          value={finished_cb === true ? "true" : "false"}
          name="finished"
          className="rounded"
          onChange={handleFinishedCB}
          checked={finished_cb}
        />
        <label htmlFor="finished-radio" className="text-white">
          Finished
        </label>
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

export default CollectionForm;
