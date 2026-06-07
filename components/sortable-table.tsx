"use client";

import { useMemo, useState } from "react";
import { ArrowDownUp } from "lucide-react";
import { searchRecords, sortRecords, SortDirection } from "@/lib/table";

type Align = "left" | "right";

export interface ColumnDefinition<T> {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
  align?: Align;
}

export function SortableTable<T extends object>({
  rows,
  columns,
  initialSortKey,
  searchTerm,
  searchKeys,
}: {
  rows: T[];
  columns: ColumnDefinition<T>[];
  initialSortKey: keyof T;
  searchTerm: string;
  searchKeys: Array<keyof T>;
}) {
  const [sortKey, setSortKey] = useState<keyof T>(initialSortKey);
  const [direction, setDirection] = useState<SortDirection>("desc");

  const filteredRows = useMemo(() => {
    const searched = searchRecords(rows, searchTerm, searchKeys);
    return sortRecords(searched, sortKey, direction);
  }, [rows, searchTerm, searchKeys, sortKey, direction]);

  const onSort = (key: keyof T) => {
    if (sortKey === key) {
      setDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setDirection("desc");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-border/80">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border/80">
          <thead className="bg-surface/65">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted ${
                    column.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSort(column.key)}
                    className="inline-flex items-center gap-2"
                  >
                    {column.header}
                    <ArrowDownUp className="h-3.5 w-3.5" />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 bg-panel/80">
            {filteredRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="transition hover:bg-accent/5">
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={`whitespace-nowrap px-4 py-4 text-sm ${column.align === "right" ? "text-right" : "text-left"} ${column.className ?? ""}`}
                  >
                    {column.render ? column.render(row) : String(row[column.key as keyof T])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
