import {
  Link,
  Form,
  useNavigation,
  useLoaderData,
  useParams,
} from "@remix-run/react";

function BrandForm() {
  const brandData = useLoaderData();
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
    return <p>Invalid Brand Id</p>;
  }

  return (
    <Form
      method={brandData ? "patch" : "post"}
      //   method="post"
      className="form"
      id="brand-form"
    >
      <p>
        <label htmlFor="name">Brand Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={defaultValues.name}
        />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Brand"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default BrandForm;
