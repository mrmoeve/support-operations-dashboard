import { searchRecords, sortRecords } from "@/lib/table";

const rows = [
  { name: "Northstar Health", score: 61, owner: "Avery Chen" },
  { name: "Atlas One", score: 76, owner: "Jules Ramirez" },
  { name: "BlueHarbor AI", score: 67, owner: "Priya Singh" },
];

describe("table utilities", () => {
  it("sorts numeric values descending", () => {
    expect(sortRecords(rows, "score", "desc").map((row) => row.score)).toEqual([76, 67, 61]);
  });

  it("sorts string values ascending", () => {
    expect(sortRecords(rows, "name", "asc").map((row) => row.name)).toEqual([
      "Atlas One",
      "BlueHarbor AI",
      "Northstar Health",
    ]);
  });

  it("searches across supplied keys", () => {
    expect(searchRecords(rows, "avery", ["owner"]).map((row) => row.name)).toEqual(["Northstar Health"]);
  });
});
