"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Panel, SectionHeading } from "@/components/ui";

const tooltipStyle = {
  backgroundColor: "rgba(15, 23, 42, 0.95)",
  border: "1px solid rgba(148, 163, 184, 0.18)",
  borderRadius: "16px",
  color: "#e2e8f0",
};

export function LineChartCard({
  title,
  description,
  data,
  lines,
}: {
  title: string;
  description: string;
  data: object[];
  lines: Array<{ key: string; color: string }>;
}) {
  return (
    <Panel>
      <SectionHeading title={title} description={description} />
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={tooltipStyle} />
            {lines.map((line) => (
              <Line key={line.key} dataKey={line.key} type="monotone" stroke={line.color} strokeWidth={3} dot={false} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export function BarChartCard({
  title,
  description,
  data,
  xKey,
  barKey,
  colors,
}: {
  title: string;
  description: string;
  data: object[];
  xKey: string;
  barKey: string;
  colors: string[];
}) {
  return (
    <Panel>
      <SectionHeading title={title} description={description} />
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
            <XAxis dataKey={xKey} stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={tooltipStyle} />
            <Bar dataKey={barKey} radius={[14, 14, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`${String((entry as Record<string, string | number>)[xKey])}-${String(
                    (entry as Record<string, string | number>)[barKey],
                  )}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}
