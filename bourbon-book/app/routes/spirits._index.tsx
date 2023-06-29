import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import SpiritsList from "~/components/spirits/SpiritList";
import { getSpirits } from "~/data/spirits.sever";

export default function SpiritsPage() {
  const spirits = useLoaderData();
  const hasSpirits = spirits && spirits.length > 0;
  return (
    <>
      <main>
        <div className="flex justify-center py-5">
          <Link to="add">
            <span className="flex px-1 text-justify text-white border-2 rounded">
              <FaPlus />
              Add Spirit
            </span>
          </Link>
        </div>

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
  const spirits = await getSpirits();
  return spirits;
}
