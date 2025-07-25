import { useGetMaterialsQuery } from "@/services/features/reports";
import styles from "./reports-page.module.css";
import type { MaterialsRes } from "@/services/features/reports/types";
import ParentCategory from "./components/parent-category";

export interface IParentCategory
  extends Omit<Partial<MaterialsRes>, "category" | "parent"> {
  childrenCount: number;
}

export interface IChildCategory
  extends Omit<Partial<MaterialsRes>, "category"> {
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
  const sumProperties = [
    "remind_start_amount",
    "remind_start_sum",
    "remind_income_amount",
    "remind_income_sum",
    "remind_outgo_amount",
    "remind_outgo_sum",
    "remind_end_amount",
    "remind_end_sum",
  ];

  const totals = getSumOfProperties(materials, sumProperties);

  // Extracting the parent and child categories from materials
  materials?.forEach((material) => {
    const existingParent = parentCategories.find(
      (p: IParentCategory) => p?.name === material.parent
    );
    const existingCategory = childCategories.find(
      (c: IChildCategory) =>
        c?.name === material.category && c?.parent === material.parent
    );

    if (material.parent && !existingParent) {
      const filteredMaterials = materials.filter(
        (m) => m.parent === material.parent
      );

      parentCategories.push({
        childrenCount: 1,
        name: material.parent,
        ...getSumOfProperties(filteredMaterials, sumProperties),
      });
    } else if (existingParent) {
      existingParent.childrenCount += 1;
    }

    if (material.category && !existingCategory) {
      const filteredMaterials = materials.filter(
        (m) =>
          m.category === material.category &&
          m.parent === material.parent
      );

      childCategories.push({
        childrenCount: 1,
        name: material.category,
        parent: material.parent,
        ...getSumOfProperties(filteredMaterials, sumProperties),
      });
    } else if (existingCategory) {
      existingCategory.childrenCount += 1;
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <table className={styles.reportsTable}>
          <thead>
            <tr>
              <th rowSpan={2}>Наименование</th>
              <th rowSpan={2}>Цвет</th>
              <th rowSpan={2}>Ед изм</th>
              <th rowSpan={2}>Артикул</th>
              <th rowSpan={2}>Цена учетная</th>
              <th colSpan={2}>Сальдо начало периода</th>
              <th colSpan={2}>Приход</th>
              <th colSpan={2}>Расход</th>
              <th colSpan={2}>Сальдо на конец периода</th>
            </tr>
            <tr>
              <th>Кол-во</th>
              <th>Сумма</th>
              <th>Кол-во</th>
              <th>Сумма</th>
              <th>Кол-во</th>
              <th>Сумма</th>
              <th>Кол-во</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {/* Summary row with totals */}
            <tr
              style={{
                backgroundColor: "#f8f9fa",
                fontWeight: "bold",
              }}
            >
              <td>Итого</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span>{totals.remind_start_amount || 0}</span>
              </td>
              <td>
                <span>{totals.remind_start_sum || 0}</span>
              </td>
              <td>
                <span>{totals.remind_income_amount || 0}</span>
              </td>
              <td>
                <span>{totals.remind_income_sum || 0}</span>
              </td>
              <td>
                <span>{totals.remind_outgo_amount || 0}</span>
              </td>
              <td>
                <span>{totals.remind_outgo_sum || 0}</span>
              </td>
              <td>
                <span>{totals.remind_end_amount || 0}</span>
              </td>
              <td>
                <span>{totals.remind_end_sum || 0}</span>
              </td>
            </tr>

            {parentCategories?.map((report) => (
              <ParentCategory
                key={report.name}
                materials={materials}
                parentCategory={report}
                childCategories={childCategories.filter(
                  (child) => child.parent === report.name
                )}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function getSumOfProperties(
  materials: MaterialsRes[] | undefined,
  properties: string[]
) {
  if (!materials) return {};
  const sums: Record<string, number> = {};
  materials.forEach((item) => {
    properties.forEach((key) => {
      sums[key] =
        (sums[key] || 0) +
        ((item[key as keyof MaterialsRes] as number) || 0);
    });
  });
  return sums;
}
