import SpiritForm from "~/components/spirits/SpiritForm";
import { getBrands, getBrand } from "~/data/brands.server";
import { updateSpirit, deleteSpirit } from "~/data/spirits.sever";
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
  const spirit = await getBrand(spiritId);
  if (!spirit) {
    throw new Response("Spirit not found", { status: 404 });
  }
  return { spirit, brands };
}

export async function action({ params, request }) {
  const spiritId = params.id;
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const spiritData = Object.fromEntries(formData);
    await updateSpirit(spiritId, spiritData);
    return redirect("/spirits");
  } else if (request.method === "DELETE") {
    await deleteSpirit(spiritId);
    return redirect("/spirits");
    // return { deletedId: data };
  }
}
