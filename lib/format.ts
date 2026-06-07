export function formatPercent(value: number, digits = 0) {
  return `${value.toFixed(digits)}%`;
}

export function formatHours(value: number) {
  return `${value.toFixed(1)}h`;
}

export function formatCount(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}
