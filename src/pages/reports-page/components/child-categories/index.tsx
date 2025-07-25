import type { IChildCategory } from "../..";

export default function ChildCategoriesList({
  categories,
}: {
  categories?: IChildCategory[];
}) {
  if (!categories) return null;
  return <div>index</div>;
}
