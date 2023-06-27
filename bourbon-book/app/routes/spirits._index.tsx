import { FaPlus, FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import SpiritsList from "~/components/spirits/SpiritList";
export default function SpiritPage() {
  const spirits = useLoaderData();
  const hasSpirits = spirits && spirits.length > 0;
  return (
    <>
      <h1>Future Spirits List Page</h1>
      <main>
        <Link to="add">
          <FaPlus />
          <span>Add Spirit</span>
        </Link>
        <div>Spirits Listing Data Component Will Go Here</div>
        {hasSpirits && <SpiritsList spirits={spirits} />}
      </main>
    </>
  );
}

export async function loader({ request }) {
  console.log("---SPIRITS LOADER---");
  return null;
}
