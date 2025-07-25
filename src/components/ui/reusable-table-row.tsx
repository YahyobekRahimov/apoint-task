import { Button } from "@/components/ui/button";
import { ColorDisplay } from "@/components/ui/color-display";
import Arrow from "../icons";

interface TableRowData {
  name?: string;
  color?:
    | {
        color: string;
        name: string;
      }
    | string
    | null;
  unit?: string | number;
  code?: string | number;
  last_price?: string | number;
  remind_start_amount?: string | number;
  remind_start_sum?: string | number;
  remind_income_amount?: string | number;
  remind_income_sum?: string | number;
  remind_outgo_amount?: string | number;
  remind_outgo_sum?: string | number;
  remind_end_amount?: string | number;
  remind_end_sum?: string | number;
  childrenCount?: number;
}

interface ReusableTableRowProps {
  data: TableRowData;
  className?: string;
  hasButton?: boolean;
  isExpanded?: boolean;
  onButtonClick?: () => void;
  prefix?: string;
}

export function ReusableTableRow({
  data,
  className,
  hasButton = false,
  isExpanded = false,
  onButtonClick,
  prefix = "",
}: ReusableTableRowProps) {
  const displayName = data.childrenCount
    ? `${data.name || ""} (${data.childrenCount})`
    : data.name || "";

  return (
    <tr className={className}>
      <td>
        {hasButton && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onButtonClick}
            style={{
              padding: "4px 8px",
              marginRight: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f8f9fa",
              transition: "all 0.2s ease",
            }}
          >
            <Arrow isExpanded={isExpanded} />
          </Button>
        )}
        {prefix}
        {displayName}
      </td>
      <td>
        <ColorDisplay color={data.color} />
      </td>
      <td>{data.unit}</td>
      <td>{data.code}</td>
      <td>{data.last_price}</td>
      <td>
        <span>{data.remind_start_amount}</span>
      </td>
      <td>
        <span>{data.remind_start_sum}</span>
      </td>
      <td>
        <span>{data.remind_income_amount}</span>
      </td>
      <td>
        <span>{data.remind_income_sum}</span>
      </td>
      <td>
        <span>{data.remind_outgo_amount}</span>
      </td>
      <td>
        <span>{data.remind_outgo_sum}</span>
      </td>
      <td>
        <span>{data.remind_end_amount}</span>
      </td>
      <td>
        <span>{data.remind_end_sum}</span>
      </td>
    </tr>
  );
}
