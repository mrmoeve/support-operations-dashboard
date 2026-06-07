export type SortDirection = "asc" | "desc";

export function sortRecords<T>(records: T[], key: keyof T, direction: SortDirection) {
  return [...records].sort((left, right) => {
    const a = left[key];
    const b = right[key];

    if (typeof a === "number" && typeof b === "number") {
      return direction === "asc" ? a - b : b - a;
    }

    const comparison = String(a).localeCompare(String(b));
    return direction === "asc" ? comparison : -comparison;
  });
}

export function searchRecords<T>(records: T[], term: string, keys: Array<keyof T>) {
  const normalized = term.trim().toLowerCase();
  if (!normalized) {
    return records;
  }

  return records.filter((record) =>
    keys.some((key) => String(record[key]).toLowerCase().includes(normalized)),
  );
}
