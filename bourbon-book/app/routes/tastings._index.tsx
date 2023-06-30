import { FaPlus, FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import TastingsList from "~/components/tastings/TastingsList";
import { getTastings } from "~/data/tastings.sever";

export default function TastingsPage() {
  const tastings = useLoaderData();
  const hasTastings = tastings && tastings.length > 0;

  return (
    <>
      <main>
        <div className="flex justify-center py-5">
          <Link to="add">
            <span className="flex px-1 text-justify text-white border-2 rounded">
              <FaPlus />
              Add Tasting
            </span>
          </Link>
        </div>

        {/* <SpiritFilterBox /> */}

        {hasTastings && <TastingsList tastings={tastings} />}
        {!hasTastings && (
          <section id="no-events" className="flex justify-center">
            <div className="grid justify-center text-center">
              <h1 className="text-white">No tastings found</h1>
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

export async function loader() {
  const tastings = await getTastings();
  return tastings;
}
