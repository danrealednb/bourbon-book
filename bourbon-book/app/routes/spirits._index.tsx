import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import SpiritsList from "~/components/spirits/SpiritList";
import { getSpirits, getSpiritsBySpirit } from "~/data/spirits.sever";
import SpiritFilterBox from "~/components/spirits/SpiritFilterBox";

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

        <SpiritFilterBox />

        {hasSpirits && <SpiritsList spirits={spirits} />}
        {!hasSpirits && (
          <section id="no-events" className="flex justify-center">
            <div className="grid justify-center text-center">
              <h1 className="text-white">No spirits found</h1>
              <p className="text-white">
                Start{" "}
                <Link to="add" className="underline">
                  adding some
                </Link>{" "}
                today.
              </p>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export async function loader({ request }) {
  // const spirits = await getSpirits();
  // return spirits;

  // get all brands
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  console.log("DAN1", search);
  console.log("DAN2", search.get("query"));
  const query = search.get("query") || "";
  const spirits = await getSpiritsBySpirit(query);
  console.log(spirits);
  return spirits;
  // const spirits = await getSpirits(search);
  // return ;
}
