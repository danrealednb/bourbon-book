import BrandListItem from "./BrandListItem";

function BrandsList({ brands }) {
  return (
    <article>
      <h2 className="text-white flex justify-center text-4xl underline py-5">
        Brands
      </h2>
      <ol
        id="expenses-list"
        className="space-y-5 grid items-center justify-center py-5"
      >
        {brands.map((brand) => (
          <li key={brand.id} className="text-white">
            <BrandListItem id={brand.id} brand={brand.name} />
          </li>
        ))}
      </ol>
    </article>
  );
}

export default BrandsList;
