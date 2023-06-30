import { FaPlus, FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import CollectionList from "~/components/collection/CollectionList";
import { getCollection } from "~/data/collection.server";

export default function CollectionPage() {
  const collection = useLoaderData();
  const hasCollection = collection && collection.length > 0;

  return (
    <>
      <main>
        <div className="flex justify-center py-5">
          <Link to="add">
            <span className="flex px-1 text-justify text-white border-2 rounded">
              <FaPlus />
              Add To Collection
            </span>
          </Link>
        </div>

        {/* <SpiritFilterBox /> */}

        {hasCollection && <CollectionList spirits={collection} />}
        {!hasCollection && (
          <section id="no-events" className="flex justify-center">
            <div className="grid justify-center text-center">
              <h1 className="text-white">No spirits in collection found</h1>
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
  const collection = await getCollection();
  return collection;
}
