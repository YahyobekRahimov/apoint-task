import { useState } from "react";
import type { IChildCategory } from "../..";
import { Button } from "@/components/ui/button";
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

  return (
    <>
      <tr className={styles.childCategory}>
        <td>
          <Button onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "-" : "+"}
          </Button>
          {`${childCategory.name} (${childCategory.childrenCount})`}
        </td>
      </tr>

      {collapsed &&
        materials &&
        materials.map((child, i) => (
          <tr key={child.name} className={styles.childCategoryItem}>
            <td>{`${i + 1}. ${child.name}`}</td>
          </tr>
        ))}
    </>
  );
}
