import { FaPlus, FaDownload } from "react-icons/fa";
import { Link } from "@remix-run/react";
export default function CollectionPage() {
  return (
    <>
      <h1>Future Collection List Page</h1>
      <main>
        <Link to="add">
          <FaPlus />
          <span>Add Collection</span>
        </Link>
        <div>Collection Listing Data Component Will Go Here</div>
      </main>
    </>
  );
}
