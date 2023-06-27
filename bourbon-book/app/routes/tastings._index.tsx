import { FaPlus, FaDownload } from "react-icons/fa";
import { Link } from "@remix-run/react";
export default function TastingPage() {
  return (
    <>
      <h1>Future Tastings List Page</h1>
      <main>
        <Link to="add">
          <FaPlus />
          <span>Add Tasting</span>
        </Link>
        <div>Tasting Listing Data Component Will Go Here</div>
      </main>
    </>
  );
}
