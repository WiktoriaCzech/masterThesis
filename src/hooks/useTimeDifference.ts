import { useEffect, useState } from "react";
import calculateTime from "@/utils/calculateTime";

export default function useTimeDifferences(dates: Date[]) {
  const [diffs, setDiffs] = useState<string[]>([]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    function tick() {
      const now = new Date();
      setDiffs(dates.map((d) => calculateTime(d, now)));
      // schedule next update right after the next second tick
      timer = setTimeout(tick, 1000 - now.getMilliseconds());
    }

    tick();
    return () => clearTimeout(timer);
  }, [dates]);

  return diffs;
}
