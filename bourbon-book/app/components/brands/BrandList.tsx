import BrandListItem from "./BrandListItem";

function BrandsList({ brands }) {
  return (
    <ol id="expenses-list">
      {brands.map((brand) => (
        <li key={brand.id}>
          <BrandListItem id={brand.id} brand={brand.name} />
        </li>
      ))}
    </ol>
  );
}

export default BrandsList;
