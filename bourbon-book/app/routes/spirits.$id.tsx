import SpiritForm from "~/components/spirits/SpiritForm";
import { getBrands, getBrand } from "~/data/brands.server";
import { updateSpirit, deleteSpirit, getSpirit } from "~/data/spirits.sever";
import { redirect } from "@remix-run/node";

export default function UpdateSpiritPage() {
  return (
    <>
      <h1 className="text-white text-xl flex justify-center py-5">
        Update Spirit
      </h1>
      <SpiritForm />
    </>
  );
}

export async function loader({ params }) {
  console.log("---SPIRITS UPDATE LOADER---");
  const brands = await getBrands();

  const spiritId = params.id;
  const spiritData = await getSpirit(spiritId);
  console.log("GOT SPIRIT", spiritData);
  if (!spiritData) {
    throw new Response("Spirit not found", { status: 404 });
  }
  return { spiritData, brands };
}

export async function action({ params, request }) {
  const spiritId = params.id;
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const spiritData = Object.fromEntries(formData);
    console.log(spiritData);
    await updateSpirit(spiritId, spiritData);
    return redirect("/spirits");
  } else if (request.method === "DELETE") {
    await deleteSpirit(spiritId);
    return redirect("/spirits");
    // return { deletedId: data };
  }
}
