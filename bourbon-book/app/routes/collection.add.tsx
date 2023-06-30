import { addCollectionItem, getCollection } from "~/data/collection.server";
import { redirect } from "@remix-run/node";
import CollectionAddForm from "~/components/collection/CollectionAddForm";
import { getSpirits } from "~/data/spirits.sever";

export default function AddCollectionPage() {
  return (
    <>
      <h1 className="text-white text-xl flex justify-center py-5">
        Add To Collection
      </h1>
      <CollectionAddForm />
    </>
  );
}

export async function loader() {
  const spirits = await getSpirits();
  return spirits;
}

export async function action({ request }) {
  const formData = await request.formData();
  const collectionData = Object.fromEntries(formData);

  const obj = {
    spiritId: collectionData.spiritId,
    spiritName: collectionData.spiritName,
    opened: collectionData.opened === "true",
    finished: collectionData.finished === "true",
  };
  console.log(obj);

  await addCollectionItem(obj);
  return redirect("/collection");
}
