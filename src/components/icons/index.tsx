export default function Arrow({
  isExpanded,
}: {
  isExpanded: boolean;
}) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
      }}
    >
      <polyline points="9,18 15,12 9,6"></polyline>
    </svg>
  );
}
