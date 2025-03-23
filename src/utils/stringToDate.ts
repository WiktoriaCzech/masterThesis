export default function dateToString(
  date: Date,
  mode: "full" | "date" | "time"
): string {
  // Helper to pad numbers to 2 digits
  const pad = (n: number) => n.toString().padStart(2, "0");

  switch (mode) {
    case "full": {
      const day = pad(date.getDate());
      const month = pad(date.getMonth() + 1); // month is 0-indexed
      const year = date.getFullYear();
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
      // Get the short day-of-week
      const weekday = date.toLocaleDateString("pl-PL", { weekday: "short" });
      return `${day}-${month}-${year}(${weekday}), ${hours}:${minutes}:${seconds}`;
    }
    case "date": {
      // Return a date-only string in ISO format (yyyy-mm-dd)
      const year = date.getFullYear();
      const month = pad(date.getMonth() + 1);
      const day = pad(date.getDate());
      return `${year}-${month}-${day}`;
    }
    case "time": {
      // Return a time-only string in HH:MM:SS format
      const hours = pad(date.getHours());
      const minutes = pad(date.getMinutes());
      const seconds = pad(date.getSeconds());
      return `${hours}h : ${minutes}min : ${seconds}sek`;
    }
    default:
      return date.toString();
  }
}
