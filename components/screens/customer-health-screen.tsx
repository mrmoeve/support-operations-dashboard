"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { BarChartCard } from "@/components/chart-card";
import { FilterToolbar } from "@/components/filter-toolbar";
import { SortableTable } from "@/components/sortable-table";
import { Panel, Pill, SectionHeading } from "@/components/ui";
import { customerAccounts } from "@/lib/mock-data";

const healthDistribution = customerAccounts.map((account) => ({
  account: account.name.split(" ")[0],
  score: account.healthScore,
})) as Array<Record<string, string | number>>;

export function CustomerHealthScreen() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const rows = useMemo(() => {
    return customerAccounts.filter((account) => selected === "All" || account.segment === selected);
  }, [selected]);

  return (
    <AppShell
      title="Customer Health"
      description="Monitor post-support health signals, usage adoption, and renewal exposure across the customer portfolio."
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_1.15fr]">
        <BarChartCard
          title="Health Score Distribution"
          description="Enterprise outliers show the sharpest pressure from recent support events."
          data={healthDistribution}
          xKey="account"
          barKey="score"
          colors={["#2dd4bf", "#38bdf8", "#14b8a6", "#f97316"]}
        />
        <Panel>
          <SectionHeading title="Portfolio Summary" description="Quick health segmentation for leadership review." />
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-surface/70 p-4">
              <div className="text-sm text-muted">Healthy</div>
              <div className="mt-2 text-3xl font-semibold">{customerAccounts.filter((item) => item.healthScore >= 80).length}</div>
            </div>
            <div className="rounded-3xl bg-surface/70 p-4">
              <div className="text-sm text-muted">Watchlist</div>
              <div className="mt-2 text-3xl font-semibold">{customerAccounts.filter((item) => item.healthScore >= 65 && item.healthScore < 80).length}</div>
            </div>
            <div className="rounded-3xl bg-surface/70 p-4">
              <div className="text-sm text-muted">At Risk</div>
              <div className="mt-2 text-3xl font-semibold">{customerAccounts.filter((item) => item.healthScore < 65).length}</div>
            </div>
          </div>
        </Panel>
      </div>

      <Panel className="mt-6">
        <SectionHeading title="Customer Health Table" description="Search and sort customer risk indicators, adoption, and satisfaction." />
        <FilterToolbar
          search={search}
          onSearch={setSearch}
          selected={selected}
          onSelectedChange={setSelected}
          options={[
            { label: "All Segments", value: "All" },
            { label: "Enterprise", value: "Enterprise" },
            { label: "Mid-Market", value: "Mid-Market" },
            { label: "SMB", value: "SMB" },
          ]}
        />
        <div className="mt-5">
          <SortableTable
            rows={rows}
            initialSortKey="healthScore"
            searchTerm={search}
            searchKeys={["name", "segment", "renewalRisk", "executiveSponsor"]}
            columns={[
              { key: "name", header: "Account" },
              { key: "segment", header: "Segment" },
              { key: "healthScore", header: "Health", align: "right" },
              {
                key: "renewalRisk",
                header: "Renewal Risk",
                render: (row) => <Pill tone={row.renewalRisk === "High" ? "danger" : row.renewalRisk === "Moderate" ? "warning" : "success"}>{row.renewalRisk}</Pill>,
              },
              { key: "monthlyUsage", header: "Usage", align: "right" },
              { key: "csat", header: "CSAT", align: "right" },
              { key: "executiveSponsor", header: "Executive Sponsor" },
            ]}
          />
        </div>
      </Panel>
    </AppShell>
  );
}
