import type { IParentCategory } from "../..";

export default function ParentCategoriesList({
  categories,
}: {
  categories?: IParentCategory[];
}) {
  if (!categories) return null;
  return (
    <>
      {categories.map((category, i) => (
        <div key={category.name + i} className="category-item">
          {category.name}
        </div>
      ))}
    </>
  );
}
