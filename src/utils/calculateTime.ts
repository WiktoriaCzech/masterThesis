export default function calculateTime(startDate: Date, endDate: Date) {
  // Calculate the difference in milliseconds
  let diff = endDate.getTime() - startDate.getTime();

  if (diff < 0) return "0 sek";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff %= 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  if (days > 0) return `${days}d : ${hours}h : ${minutes}min : ${seconds}sek`;
  if (hours > 0) return `${hours}h : ${minutes}min : ${seconds}sek`;
  if (minutes > 0) return `${minutes}min : ${seconds}sek`;

  return `${seconds}sek`;
}
