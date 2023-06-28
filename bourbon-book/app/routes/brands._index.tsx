import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "@remix-run/react";
import BrandsList from "~/components/brands/BrandList";
import { getBrands } from "~/data/brands.server";

export default function BrandsPage() {
  const brands = useLoaderData();
  const hasBrands = brands && brands.length > 0;
  return (
    <>
      <h1>Brands</h1>
      <main>
        <Link to="add">
          <FaPlus />
          <span>Add Brand</span>
        </Link>
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
