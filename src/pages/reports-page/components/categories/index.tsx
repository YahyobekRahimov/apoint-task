import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { IChildCategory, IParentCategory } from "../..";

interface CategoriesProps {
  childCategories?: IChildCategory[];
  isChildCategories?: boolean;
}

export default function Categories({
  childCategories,
  isChildCategories = false,
}: CategoriesProps) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed((prev) => !prev);

  return (
    <tr>
      {childCategories?.map((category, i) => (
        <td key={i} className="category-item">
          <Button onClick={handleToggle} variant="outline">
            {collapsed ? "Expand" : "Collapse"}
          </Button>
          {category.name}
        </td>
      ))}
      {collapsed && !isChildCategories && (
        <Categories
          childCategories={childCategories}
          isChildCategories={true}
        />
      )}
    </tr>
  );
}
