import {
  getAverageHealthScore,
  getAverageResolutionTime,
  getCsat,
  getEscalationRate,
  getOpenTickets,
  getRenewalRiskCount,
  getSlaBreaches,
  getTeamCapacity,
} from "@/lib/metrics";

describe("metrics", () => {
  it("calculates open tickets", () => {
    expect(getOpenTickets()).toBe(9);
  });

  it("calculates SLA breaches", () => {
    expect(getSlaBreaches()).toBe(3);
  });

  it("calculates average resolution time", () => {
    expect(getAverageResolutionTime()).toBeCloseTo(17.188, 2);
  });

  it("calculates escalation rate", () => {
    expect(getEscalationRate()).toBeCloseTo(38.888, 2);
  });

  it("calculates CSAT", () => {
    expect(getCsat()).toBeCloseTo(88, 1);
  });

  it("calculates health score and renewal risk", () => {
    expect(getAverageHealthScore()).toBeCloseTo(72.666, 2);
    expect(getRenewalRiskCount()).toBe(2);
  });

  it("calculates team capacity", () => {
    expect(getTeamCapacity()).toBeCloseTo(82, 0);
  });
});
