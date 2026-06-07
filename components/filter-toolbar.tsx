"use client";

interface FilterOption {
  label: string;
  value: string;
}

export function FilterToolbar({
  search,
  onSearch,
  selected,
  onSelectedChange,
  options,
}: {
  search: string;
  onSearch: (value: string) => void;
  selected: string;
  onSelectedChange: (value: string) => void;
  options: FilterOption[];
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <input
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search accounts, owners, queues..."
        className="w-full rounded-2xl border border-border bg-surface/70 px-4 py-3 outline-none ring-0 placeholder:text-muted md:max-w-sm"
      />
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelectedChange(option.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active ? "bg-accent text-slate-950" : "bg-surface/70 text-muted hover:text-text"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
