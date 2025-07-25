import { useState } from "react";
import type { IChildCategory } from "../..";
import { ReusableTableRow } from "@/components/ui/reusable-table-row";
import type { MaterialsRes } from "@/services/features/reports/types";
import styles from "./child-category.module.css";

export default function ChildCategory({
  childCategory,
  materials,
}: {
  childCategory?: IChildCategory;
  materials?: MaterialsRes[];
}) {
  const [collapsed, setCollapsed] = useState(false);
  if (!childCategory) return null;

  console.log(materials, "materials in child category component");

  return (
    <>
      <ReusableTableRow
        data={childCategory}
        className={styles.childCategory}
        hasButton={true}
        isExpanded={collapsed}
        onButtonClick={() => setCollapsed(!collapsed)}
      />

      {collapsed &&
        materials &&
        materials?.map((child, i) => (
          <ReusableTableRow
            key={child.name}
            data={child}
            className={styles.childCategoryItem}
            prefix={`${i + 1}. `}
          />
        ))}
    </>
  );
}
