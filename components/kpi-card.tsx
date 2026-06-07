import { formatCount, formatHours, formatPercent } from "@/lib/format";
import { Panel, Pill } from "@/components/ui";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

export function KpiCard({
  label,
  value,
  format = "count",
  change,
  icon: Icon,
}: {
  label: string;
  value: number;
  format?: "count" | "percent" | "hours";
  change: number;
  icon: LucideIcon;
}) {
  const formattedValue =
    format === "percent" ? formatPercent(value, 1) : format === "hours" ? formatHours(value) : formatCount(value);
  const improving = change < 0 ? format !== "percent" : format === "percent";

  return (
    <Panel className="overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-muted">{label}</div>
          <div className="mt-3 text-3xl font-semibold">{formattedValue}</div>
        </div>
        <div className="rounded-2xl bg-accent/10 p-3 text-accent">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Pill tone={improving ? "success" : "warning"}>
          {improving ? <TrendingDown className="mr-1 inline h-3 w-3" /> : <TrendingUp className="mr-1 inline h-3 w-3" />}
          {Math.abs(change).toFixed(1)}%
        </Pill>
        <div className="text-xs text-muted">vs last month</div>
      </div>
    </Panel>
  );
}
