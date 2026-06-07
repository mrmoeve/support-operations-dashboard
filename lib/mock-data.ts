import { BacklogPoint, CapacityPoint, CustomerAccount, Escalation, TeamMember, Ticket } from "@/lib/types";

export const tickets: Ticket[] = [
  { id: "TCK-1042", subject: "SSO provisioning failures for APAC admins", account: "Northstar Health", owner: "Avery Chen", priority: "Urgent", status: "Breached", channel: "API", queue: "Platform", region: "APAC", createdAt: "2026-06-01T09:00:00Z", dueAt: "2026-06-01T13:00:00Z", resolutionHours: 14.2, slaBreached: true, escalated: true, csat: 78 },
  { id: "TCK-1043", subject: "Bulk export delayed during billing sync", account: "Atlas One", owner: "Jules Ramirez", priority: "High", status: "Open", channel: "Email", queue: "Billing", region: "North America", createdAt: "2026-06-03T14:30:00Z", dueAt: "2026-06-04T14:30:00Z", resolutionHours: 0, slaBreached: false, escalated: false, csat: 0 },
  { id: "TCK-1044", subject: "CSM dashboard permissions mismatch", account: "BlueHarbor AI", owner: "Priya Singh", priority: "Medium", status: "Pending", channel: "Chat", queue: "Admin", region: "EMEA", createdAt: "2026-06-02T08:45:00Z", dueAt: "2026-06-05T08:45:00Z", resolutionHours: 0, slaBreached: false, escalated: false, csat: 0 },
  { id: "TCK-1045", subject: "Webhook retries exhausting rate limits", account: "Summit Peak", owner: "Avery Chen", priority: "Urgent", status: "Resolved", channel: "API", queue: "Platform", region: "North America", createdAt: "2026-05-28T10:20:00Z", dueAt: "2026-05-28T14:20:00Z", resolutionHours: 3.5, slaBreached: false, escalated: true, csat: 91 },
  { id: "TCK-1046", subject: "Voice queue reporting discrepancy", account: "Nova Retail", owner: "Leah Morgan", priority: "High", status: "Resolved", channel: "Phone", queue: "Reporting", region: "North America", createdAt: "2026-05-30T16:10:00Z", dueAt: "2026-05-31T16:10:00Z", resolutionHours: 18.4, slaBreached: false, escalated: false, csat: 88 },
  { id: "TCK-1047", subject: "Agent macros not loading in Chrome", account: "Kepler Energy", owner: "Daniel Brooks", priority: "Medium", status: "Resolved", channel: "Chat", queue: "Workspace", region: "EMEA", createdAt: "2026-05-31T13:40:00Z", dueAt: "2026-06-02T13:40:00Z", resolutionHours: 21.1, slaBreached: false, escalated: false, csat: 93 },
  { id: "TCK-1048", subject: "Regional failover created duplicate contacts", account: "Northstar Health", owner: "Priya Singh", priority: "Urgent", status: "Open", channel: "Email", queue: "Platform", region: "EMEA", createdAt: "2026-06-04T06:15:00Z", dueAt: "2026-06-04T12:15:00Z", resolutionHours: 0, slaBreached: true, escalated: true, csat: 0 },
  { id: "TCK-1049", subject: "Sandbox refresh missing custom objects", account: "Harbor Transit", owner: "Noah Patel", priority: "Low", status: "Pending", channel: "Email", queue: "Admin", region: "North America", createdAt: "2026-06-02T17:55:00Z", dueAt: "2026-06-06T17:55:00Z", resolutionHours: 0, slaBreached: false, escalated: false, csat: 0 },
  { id: "TCK-1050", subject: "CSAT webhook not posting to Snowflake", account: "Vertex Bio", owner: "Leah Morgan", priority: "High", status: "Resolved", channel: "API", queue: "Integrations", region: "North America", createdAt: "2026-06-01T11:25:00Z", dueAt: "2026-06-02T11:25:00Z", resolutionHours: 8.2, slaBreached: false, escalated: false, csat: 95 },
  { id: "TCK-1051", subject: "Playbooks paused after policy migration", account: "BlueHarbor AI", owner: "Jules Ramirez", priority: "High", status: "Breached", channel: "Email", queue: "Automation", region: "EMEA", createdAt: "2026-06-01T07:50:00Z", dueAt: "2026-06-02T07:50:00Z", resolutionHours: 31.3, slaBreached: true, escalated: true, csat: 74 },
  { id: "TCK-1052", subject: "Knowledge base articles missing localized assets", account: "Orchid Hotels", owner: "Daniel Brooks", priority: "Medium", status: "Open", channel: "Chat", queue: "Content", region: "APAC", createdAt: "2026-06-05T00:35:00Z", dueAt: "2026-06-07T00:35:00Z", resolutionHours: 0, slaBreached: false, escalated: false, csat: 0 },
  { id: "TCK-1053", subject: "Renewal usage report timing out for CFO view", account: "Atlas One", owner: "Avery Chen", priority: "High", status: "Resolved", channel: "Phone", queue: "Reporting", region: "North America", createdAt: "2026-05-29T19:05:00Z", dueAt: "2026-05-30T19:05:00Z", resolutionHours: 11.7, slaBreached: false, escalated: true, csat: 89 },
  { id: "TCK-1054", subject: "Role hierarchy import skipped 22 users", account: "Kepler Energy", owner: "Noah Patel", priority: "Medium", status: "Resolved", channel: "Email", queue: "Admin", region: "EMEA", createdAt: "2026-05-27T15:10:00Z", dueAt: "2026-05-30T15:10:00Z", resolutionHours: 29.4, slaBreached: false, escalated: false, csat: 90 },
  { id: "TCK-1055", subject: "Premium routing rule created loop in chat triage", account: "Vertex Bio", owner: "Leah Morgan", priority: "Urgent", status: "Open", channel: "Chat", queue: "Automation", region: "North America", createdAt: "2026-06-05T12:10:00Z", dueAt: "2026-06-05T16:10:00Z", resolutionHours: 0, slaBreached: false, escalated: true, csat: 0 },
  { id: "TCK-1056", subject: "Audit exports arriving with stale retention tags", account: "Summit Peak", owner: "Priya Singh", priority: "Medium", status: "Resolved", channel: "API", queue: "Security", region: "APAC", createdAt: "2026-05-30T05:50:00Z", dueAt: "2026-06-01T05:50:00Z", resolutionHours: 16.9, slaBreached: false, escalated: false, csat: 94 },
  { id: "TCK-1057", subject: "Agent status sync failing after IdP rollover", account: "Nova Retail", owner: "Jules Ramirez", priority: "High", status: "Pending", channel: "Phone", queue: "Integrations", region: "North America", createdAt: "2026-06-03T20:40:00Z", dueAt: "2026-06-04T20:40:00Z", resolutionHours: 0, slaBreached: false, escalated: true, csat: 0 },
  { id: "TCK-1058", subject: "Mobile SDK error surge on Android 16 beta", account: "Harbor Transit", owner: "Daniel Brooks", priority: "High", status: "Open", channel: "API", queue: "Platform", region: "North America", createdAt: "2026-06-04T23:30:00Z", dueAt: "2026-06-05T23:30:00Z", resolutionHours: 0, slaBreached: false, escalated: false, csat: 0 },
  { id: "TCK-1059", subject: "Regional data residency request awaiting legal", account: "Orchid Hotels", owner: "Noah Patel", priority: "Low", status: "Pending", channel: "Email", queue: "Compliance", region: "EMEA", createdAt: "2026-06-02T09:20:00Z", dueAt: "2026-06-09T09:20:00Z", resolutionHours: 0, slaBreached: false, escalated: false, csat: 0 },
];

export const escalations: Escalation[] = [
  { id: "ESC-201", ticketId: "TCK-1042", account: "Northstar Health", severity: "SEV-1", owner: "Avery Chen", hoursOpen: 14.2, executiveVisible: true, recoveryPlan: "Identity service rollback with staged tenant validation", status: "Mitigating" },
  { id: "ESC-202", ticketId: "TCK-1045", account: "Summit Peak", severity: "SEV-2", owner: "Avery Chen", hoursOpen: 3.5, executiveVisible: false, recoveryPlan: "Throttle webhook workers and replay dead-letter queue", status: "Resolved" },
  { id: "ESC-203", ticketId: "TCK-1048", account: "Northstar Health", severity: "SEV-1", owner: "Priya Singh", hoursOpen: 26.8, executiveVisible: true, recoveryPlan: "Deduplicate contacts and validate regional replication checkpoints", status: "Mitigating" },
  { id: "ESC-204", ticketId: "TCK-1051", account: "BlueHarbor AI", severity: "SEV-2", owner: "Jules Ramirez", hoursOpen: 31.3, executiveVisible: true, recoveryPlan: "Rehydrate policy mappings and rerun playbook execution ledger", status: "Watchlist" },
  { id: "ESC-205", ticketId: "TCK-1053", account: "Atlas One", severity: "SEV-2", owner: "Avery Chen", hoursOpen: 11.7, executiveVisible: false, recoveryPlan: "Index optimization and cache warm-up for finance cohort", status: "Resolved" },
  { id: "ESC-206", ticketId: "TCK-1055", account: "Vertex Bio", severity: "SEV-1", owner: "Leah Morgan", hoursOpen: 6.4, executiveVisible: true, recoveryPlan: "Disable looped route and backfill chat assignments", status: "Mitigating" },
  { id: "ESC-207", ticketId: "TCK-1057", account: "Nova Retail", severity: "SEV-3", owner: "Jules Ramirez", hoursOpen: 18.1, executiveVisible: false, recoveryPlan: "Refresh token grants and monitor status propagation", status: "Watchlist" },
];

export const customerAccounts: CustomerAccount[] = [
  { id: "ACC-1", name: "Northstar Health", segment: "Enterprise", healthScore: 61, renewalRisk: "High", activeTickets: 2, monthlyUsage: 86, csat: 81, trend: "Declining", executiveSponsor: "Mina Patel" },
  { id: "ACC-2", name: "Atlas One", segment: "Enterprise", healthScore: 76, renewalRisk: "Moderate", activeTickets: 1, monthlyUsage: 91, csat: 89, trend: "Stable", executiveSponsor: "Jordan Kim" },
  { id: "ACC-3", name: "BlueHarbor AI", segment: "Mid-Market", healthScore: 67, renewalRisk: "Moderate", activeTickets: 2, monthlyUsage: 72, csat: 79, trend: "Declining", executiveSponsor: "Emma Diaz" },
  { id: "ACC-4", name: "Summit Peak", segment: "Enterprise", healthScore: 84, renewalRisk: "Low", activeTickets: 0, monthlyUsage: 88, csat: 92, trend: "Improving", executiveSponsor: "Theo Martin" },
  { id: "ACC-5", name: "Nova Retail", segment: "SMB", healthScore: 73, renewalRisk: "Moderate", activeTickets: 1, monthlyUsage: 68, csat: 87, trend: "Stable", executiveSponsor: "Rina Shah" },
  { id: "ACC-6", name: "Kepler Energy", segment: "Mid-Market", healthScore: 82, renewalRisk: "Low", activeTickets: 0, monthlyUsage: 77, csat: 91, trend: "Improving", executiveSponsor: "Logan Park" },
  { id: "ACC-7", name: "Vertex Bio", segment: "Enterprise", healthScore: 69, renewalRisk: "Moderate", activeTickets: 1, monthlyUsage: 95, csat: 92, trend: "Stable", executiveSponsor: "Nadia Ross" },
  { id: "ACC-8", name: "Harbor Transit", segment: "Mid-Market", healthScore: 64, renewalRisk: "High", activeTickets: 2, monthlyUsage: 63, csat: 84, trend: "Declining", executiveSponsor: "Elias Green" },
  { id: "ACC-9", name: "Orchid Hotels", segment: "SMB", healthScore: 78, renewalRisk: "Low", activeTickets: 2, monthlyUsage: 74, csat: 88, trend: "Stable", executiveSponsor: "Sara Holt" },
];

export const teamMembers: TeamMember[] = [
  { id: "TM-1", name: "Avery Chen", role: "Senior Support Engineer", region: "North America", ticketsSolved: 42, utilization: 92, avgHandleHours: 7.4, csat: 90, backlogOwned: 5, capacity: "Constrained" },
  { id: "TM-2", name: "Priya Singh", role: "Technical Account Specialist", region: "EMEA", ticketsSolved: 37, utilization: 84, avgHandleHours: 8.1, csat: 93, backlogOwned: 4, capacity: "Balanced" },
  { id: "TM-3", name: "Jules Ramirez", role: "Escalation Manager", region: "North America", ticketsSolved: 29, utilization: 88, avgHandleHours: 9.3, csat: 85, backlogOwned: 3, capacity: "Balanced" },
  { id: "TM-4", name: "Leah Morgan", role: "Platform Support Lead", region: "North America", ticketsSolved: 34, utilization: 86, avgHandleHours: 6.8, csat: 91, backlogOwned: 3, capacity: "Balanced" },
  { id: "TM-5", name: "Daniel Brooks", role: "Product Support Specialist", region: "APAC", ticketsSolved: 31, utilization: 73, avgHandleHours: 7.9, csat: 92, backlogOwned: 2, capacity: "Available" },
  { id: "TM-6", name: "Noah Patel", role: "Support Operations Analyst", region: "EMEA", ticketsSolved: 27, utilization: 69, avgHandleHours: 8.6, csat: 89, backlogOwned: 2, capacity: "Available" },
];

export const backlogTrend: BacklogPoint[] = [
  { month: "Jan", backlog: 112, breaches: 8 },
  { month: "Feb", backlog: 118, breaches: 9 },
  { month: "Mar", backlog: 126, breaches: 11 },
  { month: "Apr", backlog: 121, breaches: 10 },
  { month: "May", backlog: 109, breaches: 7 },
  { month: "Jun", backlog: 97, breaches: 5 },
];

export const capacityTrend: CapacityPoint[] = [
  { team: "NA Core", utilization: 87, target: 80 },
  { team: "EMEA Desk", utilization: 76, target: 80 },
  { team: "APAC Pod", utilization: 72, target: 80 },
  { team: "Escalations", utilization: 91, target: 80 },
];
