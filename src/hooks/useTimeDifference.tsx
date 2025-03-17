import { useEffect, useState } from "react";
import calculateTime from "@/utils/calculateTime";

export default function useTimeDifference(targetDate?: Date) {
  // Start with an empty string to avoid rendering incorrect data during SSR.
  const [timeDifference, setTimeDifference] = useState<string>("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    function tick() {
      const now = new Date();

      if (targetDate) {
        setTimeDifference(calculateTime(targetDate, now)); 
      } else {
        setTimeDifference(now.toLocaleTimeString());
      }

      const delay = 1000 - now.getMilliseconds();
      timer = setTimeout(tick, delay);
    }

    tick();

    return () => clearTimeout(timer);
  }, [targetDate]);

  return timeDifference;
}
