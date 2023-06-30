import TastingEditForm from "~/components/tastings/TastingEditForm";
import { getSpirits } from "~/data/spirits.sever";
import { redirect } from "@remix-run/node";
import {
  deleteTasting,
  getTasting,
  updateTasting,
} from "~/data/tastings.sever";

export default function UpdateTastingPage() {
  return (
    <>
      <h1 className="text-white text-xl flex justify-center py-5">
        Update Tasting
      </h1>
      <TastingEditForm />
    </>
  );
}

export async function loader({ params }) {
  const spirits = await getSpirits();

  const tastingId = params.id;

  const tastingData = await getTasting(tastingId);
  if (!tastingData) {
    throw new Response("Tasting not found", { status: 404 });
  }
  return { tastingData, spirits };
}

export async function action({ params, request }) {
  const tastingId = params.id;
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const tastingData = Object.fromEntries(formData);
    // console.log(collectionData);

    await updateTasting(tastingId, tastingData);
    return redirect("/tastings");
  } else if (request.method === "DELETE") {
    await deleteTasting(tastingId);
    return redirect("/tastings");
    // return { deletedId: data };
  }
}
