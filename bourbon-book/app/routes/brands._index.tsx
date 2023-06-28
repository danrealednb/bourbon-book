import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import BrandsList from "~/components/brands/BrandList";
import { getBrands } from "~/data/brands.server";

export default function BrandsPage() {
  const brands = useLoaderData();
  const hasBrands = brands && brands.length > 0;
  return (
    <>
      {/* <h1>Brands</h1> */}
      <main className="">
        <div className="flex justify-center py-5">
          <Link to="add" className="">
            <span className="flex px-1 text-justify text-white border-2 rounded">
              <FaPlus className="text-white" />
              Add Brand
            </span>
          </Link>
        </div>

        {hasBrands && <BrandsList brands={brands} />}
        {!hasBrands && (
          <section id="no-events">
            <h1>No brands found</h1>
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
  console.log("---BRANDS LOADER---");
  const brands = await getBrands();
  return brands;
}
