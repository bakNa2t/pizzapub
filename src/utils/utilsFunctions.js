export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateString));
}

export function calcMinutesLeft(dateString) {
  const date1 = new Date().getTime();
  const date2 = new Date(dateString).getTime();

  return Math.round((date2 - date1) / 60000);
}
