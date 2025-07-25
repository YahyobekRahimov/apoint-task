interface ColorDisplayProps {
  color?:
    | {
        color: string;
        name: string;
      }
    | string
    | null;
}

export function ColorDisplay({ color }: ColorDisplayProps) {
  if (!color) return null;

  if (typeof color === "string") {
    return <span>{color}</span>;
  }

  if (typeof color === "object" && color.color) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: color.color,
            border: "1px solid #ccc",
            marginRight: 4,
          }}
          title={color.name}
        />
        {color.name}
      </span>
    );
  }

  return null;
}
