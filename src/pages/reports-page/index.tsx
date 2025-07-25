import { useGetMaterialsQuery } from "@/services/features/reports";
import styles from "./reports-page.module.css";
import type { MaterialsRes } from "@/services/features/reports/types";
import Categories from "./components/categories";

export interface IParentCategory
  extends Omit<MaterialsRes, "category" | "parent"> {
  childrenCount: number;
}

export interface IChildCategory
  extends Omit<MaterialsRes, "category"> {
  childrenCount: number;
}

export default function ReportsPage() {
  const { data: materials } = useGetMaterialsQuery({
    sort: "name",
    start: "2025-07-01",
    end: "2025-07-31",
  });
  const parentCategories: IParentCategory[] = [];
  const childCategories: IChildCategory[] = [];

  materials?.forEach((material) => {
    const existingParent = parentCategories.find(
      (p: IParentCategory) => p?.name === material.parent
    );
    const existingCategory = childCategories.find(
      (c: IChildCategory) =>
        c?.name === material.category && c?.parent === material.parent
    );

    if (material.parent && !existingParent) {
      parentCategories.push({
        ...material,
        childrenCount: 1,
        name: material.parent,
      });
    } else if (existingParent) {
      existingParent.childrenCount += 1;
    }

    if (material.category && !existingCategory) {
      childCategories.push({
        ...material,
        childrenCount: 1,
        name: material.category,
        parent: material.parent,
      });
    } else if (existingCategory) {
      existingCategory.childrenCount += 1;
    }
  });

  console.log("parentCategories", parentCategories);
  console.log("childCategories", childCategories);
  console.log("materials", materials);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reports Dashboard</h1>
      </div>
      <table className={styles.reportsTable}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parentCategories?.map((report) => (
            <>
              <tr key={report.name}>
                <td>{report.name}</td>
                <td>{report.childrenCount}</td>
              </tr>
              <Categories
                childCategories={childCategories.filter(
                  (child) => child.parent === report.name
                )}
              />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
