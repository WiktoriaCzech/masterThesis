import { useEffect, useState } from "react";

export default function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setHours(24, 0, 0, 0);

    const timeUntilMidnight = nextDay.getTime() - now.getTime();

    const timer = setTimeout(
      () => setCurrentDate(new Date()),
      timeUntilMidnight
    );

    return () => clearTimeout(timer);
  }, [currentDate]);

  return currentDate;
}
