"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { BarChartCard } from "@/components/chart-card";
import { FilterToolbar } from "@/components/filter-toolbar";
import { SortableTable } from "@/components/sortable-table";
import { Panel, Pill, SectionHeading } from "@/components/ui";
import { teamMembers } from "@/lib/mock-data";

const teamThroughput = teamMembers.map((member) => ({
  engineer: member.name.split(" ")[0],
  solved: member.ticketsSolved,
})) as Array<Record<string, string | number>>;

export function TeamPerformanceScreen() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const rows = useMemo(() => {
    return teamMembers.filter((member) => selected === "All" || member.region === selected);
  }, [selected]);

  return (
    <AppShell
      title="Team Performance"
      description="Measure productivity, utilization, quality, and ownership across support operations."
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_1.1fr]">
        <BarChartCard
          title="Solved Tickets by Engineer"
          description="Top performers balance throughput with strong customer satisfaction."
          data={teamThroughput}
          xKey="engineer"
          barKey="solved"
          colors={["#2dd4bf", "#38bdf8", "#0ea5e9", "#34d399"]}
        />
        <Panel>
          <SectionHeading title="Capacity Overview" description="Utilization is strongest in North America and escalations coverage remains tight." />
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="rounded-3xl bg-surface/70 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="font-semibold">{member.name}</div>
                    <div className="mt-1 text-sm text-muted">{member.role}</div>
                  </div>
                  <Pill tone={member.capacity === "Constrained" ? "danger" : member.capacity === "Balanced" ? "warning" : "success"}>
                    {member.capacity}
                  </Pill>
                </div>
                <div className="mt-3 text-sm text-muted">
                  Utilization {member.utilization}% · Backlog owned {member.backlogOwned} · CSAT {member.csat}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel className="mt-6">
        <SectionHeading title="Team Table" description="Search and sort workload, quality, and capacity data by engineer or region." />
        <FilterToolbar
          search={search}
          onSearch={setSearch}
          selected={selected}
          onSelectedChange={setSelected}
          options={[
            { label: "All Regions", value: "All" },
            { label: "North America", value: "North America" },
            { label: "EMEA", value: "EMEA" },
            { label: "APAC", value: "APAC" },
          ]}
        />
        <div className="mt-5">
          <SortableTable
            rows={rows}
            initialSortKey="ticketsSolved"
            searchTerm={search}
            searchKeys={["name", "role", "region", "capacity"]}
            columns={[
              { key: "name", header: "Name" },
              { key: "role", header: "Role" },
              { key: "region", header: "Region" },
              { key: "ticketsSolved", header: "Solved", align: "right" },
              { key: "utilization", header: "Utilization", align: "right" },
              { key: "avgHandleHours", header: "Avg Handle", align: "right" },
              { key: "csat", header: "CSAT", align: "right" },
            ]}
          />
        </div>
      </Panel>
    </AppShell>
  );
}
