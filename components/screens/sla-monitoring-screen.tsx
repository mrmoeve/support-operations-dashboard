"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { FilterToolbar } from "@/components/filter-toolbar";
import { SortableTable } from "@/components/sortable-table";
import { Panel, Pill, SectionHeading } from "@/components/ui";
import { tickets } from "@/lib/mock-data";
import { formatHours } from "@/lib/format";

export function SlaMonitoringScreen() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filtered = useMemo(() => {
    return tickets.filter((ticket) => selected === "All" || ticket.status === selected);
  }, [selected]);

  return (
    <AppShell
      title="SLA Monitoring"
      description="Track breach exposure, response health, and queues with the highest operational risk."
    >
      <Panel>
        <SectionHeading title="SLA Queue Coverage" description="Search and filter live work to isolate risk hotspots." />
        <FilterToolbar
          search={search}
          onSearch={setSearch}
          selected={selected}
          onSelectedChange={setSelected}
          options={[
            { label: "All", value: "All" },
            { label: "Open", value: "Open" },
            { label: "Pending", value: "Pending" },
            { label: "Breached", value: "Breached" },
            { label: "Resolved", value: "Resolved" },
          ]}
        />

        <div className="mt-5">
          <SortableTable
            rows={filtered}
            initialSortKey="resolutionHours"
            searchTerm={search}
            searchKeys={["id", "account", "owner", "queue", "subject"]}
            columns={[
              { key: "id", header: "Ticket" },
              { key: "account", header: "Account" },
              { key: "queue", header: "Queue" },
              { key: "owner", header: "Owner" },
              {
                key: "status",
                header: "Status",
                render: (ticket) => (
                  <Pill tone={ticket.status === "Breached" ? "danger" : ticket.status === "Resolved" ? "success" : "warning"}>
                    {ticket.status}
                  </Pill>
                ),
              },
              {
                key: "slaBreached",
                header: "SLA",
                render: (ticket) => <span>{ticket.slaBreached ? "Breached" : "On Track"}</span>,
              },
              {
                key: "resolutionHours",
                header: "Resolution",
                render: (ticket) => (ticket.resolutionHours ? formatHours(ticket.resolutionHours) : "In progress"),
                align: "right",
              },
            ]}
          />
        </div>
      </Panel>
    </AppShell>
  );
}
