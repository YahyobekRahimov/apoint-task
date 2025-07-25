import { useState } from "react";
import type { IChildCategory, IParentCategory } from "../..";
import { ReusableTableRow } from "@/components/ui/reusable-table-row";
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
      <ReusableTableRow
        data={parentCategory}
        className={styles.parentCategory}
        hasButton={true}
        isExpanded={collapsed}
        onButtonClick={() => setCollapsed(!collapsed)}
      />

      {collapsed &&
        childCategories &&
        childCategories?.map((childCategory) => (
          <ChildCategory
            key={childCategory.name}
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
