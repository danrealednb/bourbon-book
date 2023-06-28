import BrandForm from "~/components/brands/BrandForm";
import { addBrand } from "~/data/brands.server";
import { redirect } from "@remix-run/node";

export default function AddBrandPage() {
  return (
    <>
      <h1>Add New Brand</h1>
      <BrandForm />
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const brandData = Object.fromEntries(formData);
  // console.log(eventData, formData)

  await addBrand(brandData);
  return redirect("/brands");
}
