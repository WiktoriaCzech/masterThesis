"use client";

import { useState } from "react";
import styles from "./InteractiveGrid.module.css";
import { Ranks } from "@/types";

interface Props {
  ranks: Ranks;
  pos: "horizontal" | "vertical" | "grid" | "";
  onComplete?: (placements: Record<number, string[]>) => void;
}

export default function InteractiveGrid({ ranks, pos, onComplete }: Props) {
  const polishMap: Record<string, string> = {
    settings: "Ustawienia",
    music: "Muzyka",
    battery: "Bateria",
    navigation: "Nawigacja",
    phone: "Telefon",
    ac: "Klimatyzacja",
  };

  const orderedElements = Object.entries(ranks)
    .sort(([, a], [, b]) => Number(a) - Number(b))
    .map(([key]) => key);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [tileAssignments, setTileAssignments] = useState<
    Record<number, string[]>
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
            Wybierz położenie elementu:&nbsp;
            <span className={styles.highlight}>
              {polishMap[orderedElements[currentIndex]]}
            </span>
          </>
        ) : (
          <>Rozmieszczenie zakończone! Możesz przejść dalej</>
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
                <div key={idx}>{polishMap[key]}</div>
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
        Wyczyść
      </button>
    </div>
  );
}
