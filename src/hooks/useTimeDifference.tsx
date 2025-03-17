import { useEffect, useState } from "react";
import calculateTime from "@/utils/calculateTime";

export default function useTimeDifference(targetDate: Date) {
  // Start with an empty string to avoid rendering a time difference that uses new Date() during SSR.
  const [timeDifference, setTimeDifference] = useState<string>("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    function tick() {
      const now = new Date();
      setTimeDifference(calculateTime(targetDate, now));
      const delay = 1000 - now.getMilliseconds();
      timer = setTimeout(tick, delay);
    }

    // Start the ticking after mount
    tick();

    return () => clearTimeout(timer);
  }, [targetDate]);

  return timeDifference;
}
