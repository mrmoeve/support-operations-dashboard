export type TicketStatus = "Open" | "Pending" | "Resolved" | "Breached";
export type TicketPriority = "Low" | "Medium" | "High" | "Urgent";
export type TicketChannel = "Email" | "Chat" | "Phone" | "API";
export type CustomerSegment = "Enterprise" | "Mid-Market" | "SMB";
export type HealthTrend = "Improving" | "Stable" | "Declining";

export interface Ticket {
  id: string;
  subject: string;
  account: string;
  owner: string;
  priority: TicketPriority;
  status: TicketStatus;
  channel: TicketChannel;
  queue: string;
  region: string;
  createdAt: string;
  dueAt: string;
  resolutionHours: number;
  slaBreached: boolean;
  escalated: boolean;
  csat: number;
}

export interface Escalation {
  id: string;
  ticketId: string;
  account: string;
  severity: "SEV-1" | "SEV-2" | "SEV-3";
  owner: string;
  hoursOpen: number;
  executiveVisible: boolean;
  recoveryPlan: string;
  status: "Mitigating" | "Watchlist" | "Resolved";
}

export interface CustomerAccount {
  id: string;
  name: string;
  segment: CustomerSegment;
  healthScore: number;
  renewalRisk: "Low" | "Moderate" | "High";
  activeTickets: number;
  monthlyUsage: number;
  csat: number;
  trend: HealthTrend;
  executiveSponsor: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  region: string;
  ticketsSolved: number;
  utilization: number;
  avgHandleHours: number;
  csat: number;
  backlogOwned: number;
  capacity: "Available" | "Balanced" | "Constrained";
}

export interface BacklogPoint {
  month: string;
  backlog: number;
  breaches: number;
}

export interface CapacityPoint {
  team: string;
  utilization: number;
  target: number;
}
