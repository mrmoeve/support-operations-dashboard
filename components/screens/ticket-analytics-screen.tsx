"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { BarChartCard } from "@/components/chart-card";
import { FilterToolbar } from "@/components/filter-toolbar";
import { SortableTable } from "@/components/sortable-table";
import { Panel, SectionHeading } from "@/components/ui";
import { tickets } from "@/lib/mock-data";

const queueDistribution = [
  { queue: "Platform", volume: 4 },
  { queue: "Admin", volume: 3 },
  { queue: "Reporting", volume: 2 },
  { queue: "Automation", volume: 2 },
  { queue: "Integrations", volume: 2 },
  { queue: "Content", volume: 1 },
  { queue: "Compliance", volume: 1 },
  { queue: "Security", volume: 1 },
  { queue: "Billing", volume: 1 },
] as Array<Record<string, string | number>>;

export function TicketAnalyticsScreen() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const rows = useMemo(() => {
    return tickets.filter((ticket) => selected === "All" || ticket.region === selected);
  }, [selected]);

  return (
    <AppShell
      title="Ticket Analytics"
      description="Analyze inflow, queue composition, ticket mix, and resolution outcomes across regions."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <BarChartCard
          title="Queue Distribution"
          description="Platform and admin support continue to drive most current demand."
          data={queueDistribution}
          xKey="queue"
          barKey="volume"
          colors={["#2dd4bf", "#38bdf8", "#0ea5e9", "#f59e0b"]}
        />
        <Panel>
          <SectionHeading title="Region Snapshot" description="Ticket concentration and workload by geography." />
          <div className="grid gap-4 sm:grid-cols-3">
            {["North America", "EMEA", "APAC"].map((region) => {
              const regionRows = tickets.filter((ticket) => ticket.region === region);
              return (
                <div key={region} className="rounded-3xl bg-surface/70 p-4">
                  <div className="text-sm text-muted">{region}</div>
                  <div className="mt-2 text-3xl font-semibold">{regionRows.length}</div>
                  <div className="mt-2 text-sm text-muted">
                    {regionRows.filter((ticket) => ticket.slaBreached).length} breaches · {regionRows.filter((ticket) => ticket.escalated).length} escalations
                  </div>
                </div>
              );
            })}
          </div>
        </Panel>
      </div>

      <Panel className="mt-6">
        <SectionHeading title="Ticket Explorer" description="Search across subjects, accounts, and queues to inspect live and resolved work." />
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
            initialSortKey="csat"
            searchTerm={search}
            searchKeys={["id", "subject", "account", "queue", "owner", "region"]}
            columns={[
              { key: "id", header: "Ticket" },
              { key: "subject", header: "Subject" },
              { key: "account", header: "Account" },
              { key: "channel", header: "Channel" },
              { key: "queue", header: "Queue" },
              { key: "region", header: "Region" },
              { key: "csat", header: "CSAT", align: "right" },
            ]}
          />
        </div>
      </Panel>
    </AppShell>
  );
}
