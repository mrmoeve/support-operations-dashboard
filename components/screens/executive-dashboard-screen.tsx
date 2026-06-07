"use client";

import { AppShell } from "@/components/app-shell";
import { KpiCard } from "@/components/kpi-card";
import { BarChartCard, LineChartCard } from "@/components/chart-card";
import { Panel, Pill, SectionHeading } from "@/components/ui";
import { backlogTrend, capacityTrend, customerAccounts, escalations, tickets } from "@/lib/mock-data";
import { getExecutiveMetrics } from "@/lib/metrics";
import { Activity, AlertTriangle, BadgePercent, HeartPulse, ShieldAlert, Timer, Users } from "lucide-react";

const metrics = getExecutiveMetrics();

export function ExecutiveDashboardScreen() {
  return (
    <AppShell
      title="Executive Dashboard"
      description="A leadership view of operational load, customer risk, SLA integrity, and support team capacity."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        <KpiCard label="Open Tickets" value={metrics.openTickets} change={-8.2} icon={Activity} />
        <KpiCard label="SLA Breaches" value={metrics.slaBreaches} change={-16.4} icon={ShieldAlert} />
        <KpiCard label="Average Resolution Time" value={metrics.avgResolutionTime} change={-6.1} icon={Timer} format="hours" />
        <KpiCard label="Escalation Rate" value={metrics.escalationRate} change={4.8} icon={AlertTriangle} format="percent" />
        <KpiCard label="CSAT" value={metrics.csat} change={1.6} icon={BadgePercent} format="percent" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.65fr_1fr]">
        <LineChartCard
          title="Backlog Trend"
          description="Backlog volume and breach count are moving in the right direction after queue balancing."
          data={backlogTrend}
          lines={[
            { key: "backlog", color: "#2dd4bf" },
            { key: "breaches", color: "#f97316" },
          ]}
        />

        <Panel>
          <SectionHeading title="Executive Signals" description="Customer risk and workforce posture requiring leadership attention." />
          <div className="space-y-4">
            <div className="rounded-3xl bg-surface/70 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted">Customer Health Score</div>
                  <div className="mt-2 text-2xl font-semibold">{metrics.healthScore.toFixed(0)}</div>
                </div>
                <HeartPulse className="h-10 w-10 text-accent" />
              </div>
              <p className="mt-3 text-sm text-muted">Enterprise health is most at risk in healthcare and transit accounts tied to active escalations.</p>
            </div>
            <div className="rounded-3xl bg-surface/70 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted">Renewal Risk</div>
                  <div className="mt-2 text-2xl font-semibold">{metrics.renewalRisk} accounts</div>
                </div>
                <Users className="h-10 w-10 text-warning" />
              </div>
              <p className="mt-3 text-sm text-muted">Two accounts have declining health scores with elevated backlog and executive-visible incidents.</p>
            </div>
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_1.35fr]">
        <BarChartCard
          title="Team Capacity"
          description="Escalation coverage remains the tightest area relative to the target utilization band."
          data={capacityTrend}
          xKey="team"
          barKey="utilization"
          colors={["#2dd4bf", "#38bdf8", "#34d399", "#f59e0b"]}
        />

        <Panel>
          <SectionHeading title="Priority Watchlist" description="High-risk accounts and live escalations requiring coordinated follow-up." />
          <div className="space-y-4">
            {customerAccounts.slice(0, 4).map((account) => {
              const activeEscalation = escalations.find((item) => item.account === account.name && item.status !== "Resolved");
              return (
                <div key={account.id} className="rounded-3xl border border-border/80 bg-surface/65 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-base font-semibold">{account.name}</div>
                      <div className="mt-1 text-sm text-muted">
                        Health {account.healthScore} · Usage {account.monthlyUsage}% · Active tickets {account.activeTickets}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pill tone={account.renewalRisk === "High" ? "danger" : account.renewalRisk === "Moderate" ? "warning" : "success"}>
                        {account.renewalRisk} renewal risk
                      </Pill>
                      {activeEscalation ? <Pill tone="danger">{activeEscalation.severity}</Pill> : null}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted">
                    {activeEscalation
                      ? `${activeEscalation.recoveryPlan}. Executive sponsor: ${account.executiveSponsor}.`
                      : `Stable operational profile with no live executive-visible escalations. Executive sponsor: ${account.executiveSponsor}.`}
                  </p>
                </div>
              );
            })}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Panel>
          <div className="text-sm text-muted">Executive-visible escalations</div>
          <div className="mt-3 text-3xl font-semibold">{escalations.filter((item) => item.executiveVisible && item.status !== "Resolved").length}</div>
        </Panel>
        <Panel>
          <div className="text-sm text-muted">Backlog trend</div>
          <div className="mt-3 text-3xl font-semibold">{metrics.backlogTrend.toFixed(1)}%</div>
        </Panel>
        <Panel>
          <div className="text-sm text-muted">Team capacity</div>
          <div className="mt-3 text-3xl font-semibold">{metrics.teamCapacity.toFixed(0)}%</div>
        </Panel>
      </div>
    </AppShell>
  );
}
