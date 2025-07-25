import { useState } from "react";
import type { IChildCategory, IParentCategory } from "../..";
import { Button } from "@/components/ui/button";
import ChildCategory from "../child-category";
import type { MaterialsRes } from "@/services/features/reports/types";
import styles from "./parent-category.module.css";

export default function ParentCategory({
  parentCategory,
  childCategories,
  materials,
}: {
  parentCategory?: IParentCategory;
  childCategories?: IChildCategory[];
  materials?: MaterialsRes[];
}) {
  const [collapsed, setCollapsed] = useState(false);
  if (!parentCategory) return null;

  return (
    <>
      <tr className={styles.parentCategory}>
        <td>
          <Button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "-" : "+"}
          </Button>
          {`${parentCategory.name} (${parentCategory.childrenCount})`}
        </td>
      </tr>

      {collapsed &&
        childCategories &&
        childCategories.map((childCategory) => (
          <ChildCategory
            childCategory={childCategory}
            materials={materials?.filter(
              (material) =>
                material.parent === parentCategory.name &&
                material.category === childCategory.name
            )}
          />
        ))}
    </>
  );
}
