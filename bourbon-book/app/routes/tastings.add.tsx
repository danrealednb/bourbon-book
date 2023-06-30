import { redirect } from "@remix-run/node";
import TastingAddForm from "~/components/tastings/TastingAddForm";
import { getSpirits } from "~/data/spirits.sever";
import { addTasting } from "~/data/tastings.sever";
import { requireUserSession } from "~/data/auth.server";

export default function AddCollectionPage() {
  return (
    <>
      <h1 className="text-white text-xl flex justify-center py-5">
        Add Tasting
      </h1>
      <TastingAddForm />
    </>
  );
}

export async function loader() {
  const spirits = await getSpirits();
  return spirits;
}

export async function action({ request }) {
  const userId = await requireUserSession(request);
  const formData = await request.formData();
  const tastingData = Object.fromEntries(formData);

  await addTasting(tastingData, userId);
  return redirect("/tastings");
}
