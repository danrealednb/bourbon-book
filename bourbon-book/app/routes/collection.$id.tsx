import CollectionEditForm from "~/components/collection/CollectionEditForm";
import { getSpirits } from "~/data/spirits.sever";
import { redirect } from "@remix-run/node";
import {
  deleteCollectionItem,
  getCollectionItem,
  updateCollectionItem,
} from "~/data/collection.server";

export default function UpdateCollectionPage() {
  return (
    <>
      <h1 className="text-white text-xl flex justify-center py-5">
        Update Collection Item
      </h1>
      <CollectionEditForm />
    </>
  );
}

export async function loader({ params }) {
  const spirits = await getSpirits();

  const spiritId = params.id;
  const spiritData = await getCollectionItem(spiritId);
  if (!spiritData) {
    throw new Response("Collection Item not found", { status: 404 });
  }
  return { spiritData, spirits };
}

export async function action({ params, request }) {
  const spiritId = params.id;
  if (request.method === "PATCH") {
    const formData = await request.formData();
    const collectionData = Object.fromEntries(formData);
    // console.log(collectionData);
    const obj = {
      spiritId: collectionData.spiritId,
      spiritName: collectionData.spiritName,
      opened: collectionData.opened === "true",
      finished: collectionData.finished === "true",
    };
    console.log(obj);

    await updateCollectionItem(spiritId, obj);
    return redirect("/collection");
  } else if (request.method === "DELETE") {
    await deleteCollectionItem(spiritId);
    return redirect("/collection");
    // return { deletedId: data };
  }
}
