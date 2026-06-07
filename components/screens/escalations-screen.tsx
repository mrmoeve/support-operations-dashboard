"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { FilterToolbar } from "@/components/filter-toolbar";
import { SortableTable } from "@/components/sortable-table";
import { Panel, Pill, SectionHeading } from "@/components/ui";
import { escalations } from "@/lib/mock-data";

export function EscalationsScreen() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("Active");

  const rows = useMemo(() => {
    if (selected === "Executive") {
      return escalations.filter((item) => item.executiveVisible);
    }
    if (selected === "Resolved") {
      return escalations.filter((item) => item.status === "Resolved");
    }
    return escalations.filter((item) => item.status !== "Resolved");
  }, [selected]);

  return (
    <AppShell
      title="Escalations"
      description="Manage live critical incidents, executive exposure, and recovery plans with a single operational view."
    >
      <Panel>
        <SectionHeading title="Escalation Tracker" description="Live incident governance across severity, owners, and stakeholder visibility." />
        <FilterToolbar
          search={search}
          onSearch={setSearch}
          selected={selected}
          onSelectedChange={setSelected}
          options={[
            { label: "Active", value: "Active" },
            { label: "Executive", value: "Executive" },
            { label: "Resolved", value: "Resolved" },
          ]}
        />
        <div className="mt-5">
          <SortableTable
            rows={rows}
            initialSortKey="hoursOpen"
            searchTerm={search}
            searchKeys={["id", "ticketId", "account", "owner", "recoveryPlan"]}
            columns={[
              { key: "id", header: "Escalation" },
              { key: "ticketId", header: "Ticket" },
              { key: "account", header: "Account" },
              {
                key: "severity",
                header: "Severity",
                render: (row) => <Pill tone={row.severity === "SEV-1" ? "danger" : row.severity === "SEV-2" ? "warning" : "default"}>{row.severity}</Pill>,
              },
              { key: "owner", header: "Owner" },
              { key: "hoursOpen", header: "Hours Open", align: "right" },
              {
                key: "status",
                header: "Status",
                render: (row) => <Pill tone={row.status === "Resolved" ? "success" : "warning"}>{row.status}</Pill>,
              },
            ]}
          />
        </div>
      </Panel>
    </AppShell>
  );
}
