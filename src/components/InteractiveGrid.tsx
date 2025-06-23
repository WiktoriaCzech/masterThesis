"use client";

import { useState } from "react";
import styles from "./InteractiveGrid.module.css";
import { Ranks } from "@/types";
import { InteractiveTilesTranslation } from "@/types";

interface Props {
  ranks: Ranks;
  pos: "horizontal" | "vertical" | "grid" | "";
  t: InteractiveTilesTranslation;
  onComplete?: (placements: Record<number, string[]>) => void;
}

export default function InteractiveGrid({ ranks, pos, t, onComplete }: Props) {
  // cast entries to tuple for correct key type
  const orderedElements = (
    Object.entries(ranks) as Array<[keyof Ranks, string]>
  )
    .sort(([, a], [, b]) => Number(a) - Number(b))
    .map(([key]) => key);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tileAssignments, setTileAssignments] = useState<
    Record<number, Array<keyof Ranks>>
  >({});

  const handleTileClick = (posNum: number) => {
    if (currentIndex >= orderedElements.length) return;
    const key = orderedElements[currentIndex];
    setTileAssignments((prev) => ({
      ...prev,
      [posNum]: [...(prev[posNum] || []), key],
    }));
    const next = currentIndex + 1;
    setCurrentIndex(next);
    if (next === orderedElements.length && onComplete) {
      onComplete({
        ...tileAssignments,
        [posNum]: [...(tileAssignments[posNum] || []), key],
      });
    }
  };

  const handleClear = () => {
    setTileAssignments({});
    setCurrentIndex(0);
  };

  const isDone = currentIndex >= orderedElements.length;

  return (
    <div className={styles.container}>
      <h3 className={styles.question}>
        {!isDone ? (
          <>
            {t.questionPrefix}&nbsp;
            <span className={styles.highlight}>
              {t.labels[orderedElements[currentIndex]]}
            </span>
          </>
        ) : (
          <> {t.doneMessage} </>
        )}
      </h3>

      {/* apply one of three layout classes */}
      <div className={`${styles.wrapper} ${styles[pos] || ""}`}>
        {Array.from({ length: 6 }, (_, i) => {
          const posNum = i + 1;
          const assigned = tileAssignments[posNum] || [];
          return (
            <div
              key={posNum}
              className={`${styles.tile} ${
                assigned.length ? styles.filled : styles.empty
              }`}
              onClick={() => !isDone && handleTileClick(posNum)}
            >
              {assigned.map((key, idx) => (
                <div key={idx}>{t.labels[key]}</div>
              ))}
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={styles.clearButton}
        onClick={handleClear}
      >
        {t.clearButton}
      </button>
    </div>
  );
}
