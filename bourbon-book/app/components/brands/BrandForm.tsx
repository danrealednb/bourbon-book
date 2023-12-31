import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
  useActionData,
} from "@remix-run/react";
// import { useState } from "react";

function BrandForm() {
  const brandData = useLoaderData();
  const validationErrors = useActionData();
  const params = useParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const defaultValues = brandData
    ? {
        name: brandData.name,
      }
    : {
        name: "",
      };

  if (params.id && !brandData) {
    // invalid id
    return <p className="text-white">Invalid Brand Id</p>;
  }

  // const [buttonText, setButtonText] = useState("Cancel");

  return (
    <Form
      method={brandData ? "patch" : "post"}
      //   method="post"
      className="form"
      id="brand-form"
    >
      <p className="grid justify-center py-5">
        <label htmlFor="name" className="text-white py-2 text-center">
          Brand Name
        </label>
        <input
          className="border-2 border-white rounded"
          type="text"
          id="name"
          name="name"
          required
          defaultValue={defaultValues.name}
          placeholder="Enter Brand Here"
        />
      </p>
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
          {isSubmitting ? "Saving..." : "Save Brand"}
        </button>
        <button
          className="px-1 text-white border-2 rounded"
          // onClick={() => setButtonText("Cancelling...")}
        >
          {/* {buttonText} */}
          <Link to="..">{isSubmitting ? "Cancelling..." : "Cancel"}</Link>
        </button>
      </div>
    </Form>
  );
}

export default BrandForm;
