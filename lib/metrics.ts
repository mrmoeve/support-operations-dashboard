import { backlogTrend, customerAccounts, escalations, teamMembers, tickets } from "@/lib/mock-data";

export function getOpenTickets() {
  return tickets.filter((ticket) => ticket.status === "Open" || ticket.status === "Pending").length;
}

export function getSlaBreaches() {
  return tickets.filter((ticket) => ticket.slaBreached).length;
}

export function getAverageResolutionTime() {
  const resolved = tickets.filter((ticket) => ticket.resolutionHours > 0);
  return resolved.reduce((sum, ticket) => sum + ticket.resolutionHours, 0) / resolved.length;
}

export function getEscalationRate() {
  return (tickets.filter((ticket) => ticket.escalated).length / tickets.length) * 100;
}

export function getCsat() {
  const scored = tickets.filter((ticket) => ticket.csat > 0);
  return scored.reduce((sum, ticket) => sum + ticket.csat, 0) / scored.length;
}

export function getAverageHealthScore() {
  return customerAccounts.reduce((sum, account) => sum + account.healthScore, 0) / customerAccounts.length;
}

export function getRenewalRiskCount() {
  return customerAccounts.filter((account) => account.renewalRisk === "High").length;
}

export function getBacklogTrendChange() {
  const first = backlogTrend[0]?.backlog ?? 0;
  const last = backlogTrend[backlogTrend.length - 1]?.backlog ?? 0;
  return ((last - first) / first) * 100;
}

export function getTeamCapacity() {
  return teamMembers.reduce((sum, member) => sum + member.utilization, 0) / teamMembers.length;
}

export function getExecutiveMetrics() {
  return {
    openTickets: getOpenTickets(),
    slaBreaches: getSlaBreaches(),
    avgResolutionTime: getAverageResolutionTime(),
    escalationRate: getEscalationRate(),
    csat: getCsat(),
    healthScore: getAverageHealthScore(),
    renewalRisk: getRenewalRiskCount(),
    backlogTrend: getBacklogTrendChange(),
    teamCapacity: getTeamCapacity(),
    activeEscalations: escalations.filter((item) => item.status !== "Resolved").length,
  };
}
