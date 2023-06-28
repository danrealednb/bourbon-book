import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import SpiritsList from "~/components/spirits/SpiritList";
import { getSpirits } from "~/data/spirits.sever";

export default function SpiritsPage() {
  const spirits = useLoaderData();
  const hasSpirits = spirits && spirits.length > 0;
  return (
    <>
      <h1>Spirits</h1>
      <main>
        <Link to="add">
          <FaPlus />
          <span>Add Spirit</span>
        </Link>
        {hasSpirits && <SpiritsList spirits={spirits} />}
        {!hasSpirits && (
          <section id="no-events">
            <h1>No spirits found</h1>
            <p>
              Start <Link to="add">adding some</Link> today.
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export async function loader() {
  console.log("---SPIRITS LOADER---");
  const spirits = await getSpirits();
  return spirits;
}
