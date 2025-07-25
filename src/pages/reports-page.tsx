import { useGetMaterialsQuery } from "@/services/features/reports";
import styles from "./reports-page.module.css";

export default function ReportsPage() {
  // Mock reports data
  const reports = [
    {
      id: 1,
      title: "Monthly Sales Report",
      date: "2025-01-15",
      status: "Completed",
    },
    {
      id: 2,
      title: "User Analytics Report",
      date: "2025-01-10",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Financial Summary",
      date: "2025-01-05",
      status: "Completed",
    },
    {
      id: 4,
      title: "Performance Metrics",
      date: "2025-01-01",
      status: "Draft",
    },
  ];

  const { data: materials } = useGetMaterialsQuery({
    sort: "name",
    start: "2025-07-01",
    end: "2025-07-31",
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Completed":
        return styles.statusCompleted;
      case "In Progress":
        return styles.statusInProgress;
      case "Draft":
        return styles.statusDraft;
      default:
        return styles.statusDraft;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Reports Dashboard</h1>
      </div>

      <div className={styles.actions}>
        <button className={styles.createButton}>
          Create New Report
        </button>
      </div>

      <div className={styles.reportsGrid}>
        {reports.map((report) => (
          <div key={report.id} className={styles.reportCard}>
            <h3 className={styles.reportTitle}>{report.title}</h3>
            <p className={styles.reportMeta}>Date: {report.date}</p>
            <div className={styles.reportStatus}>
              Status:
              <span
                className={`${
                  styles.statusBadge
                } ${getStatusBadgeClass(report.status)}`}
              >
                {report.status}
              </span>
            </div>
            <div className={styles.reportActions}>
              <button
                className={`${styles.actionButton} ${styles.viewButton}`}
              >
                View
              </button>
              <button
                className={`${styles.actionButton} ${styles.editButton}`}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
