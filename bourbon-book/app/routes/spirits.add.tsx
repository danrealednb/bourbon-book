import { getBrands } from "~/data/brands.server";
import { addSpirit } from "~/data/spirits.sever";
import { redirect } from "@remix-run/node";
import SpiritAddForm from "~/components/spirits/SpiritAddForm";

export default function AddSpiritPage() {
  return (
    <>
      <h1 className="text-white text-xl flex justify-center py-5">
        Add New Spirit
      </h1>
      <SpiritAddForm />
    </>
  );
}

// loader to get spirits for dropdown
// action to send data
export async function loader() {
  console.log("---SPIRITS ADD LOADER---");
  const brands = await getBrands();
  return brands;
}

export async function action({ request }) {
  const formData = await request.formData();
  const spiritData = Object.fromEntries(formData);
  // console.log(spiritData);
  await addSpirit(spiritData);
  return redirect("/spirits");
}
