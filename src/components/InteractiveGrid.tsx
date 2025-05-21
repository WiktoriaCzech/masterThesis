"use client";

import { useState } from "react";
import styles from "./InteractiveGrid.module.css";
import { Ranks } from "@/types";

interface Props {
  ranks: Ranks;
  onComplete?: (placements: Record<number, string[]>) => void;
}

export default function InteractiveGrid({ ranks, onComplete }: Props) {
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

  const handleTileClick = (pos: number) => {
    if (currentIndex >= orderedElements.length) return;
    const key = orderedElements[currentIndex];
    setTileAssignments((prev) => {
      const arr = prev[pos] || [];
      return { ...prev, [pos]: [...arr, key] };
    });
    const next = currentIndex + 1;
    setCurrentIndex(next);
    if (next === orderedElements.length && onComplete) {
      onComplete({
        ...tileAssignments,
        [pos]: [...(tileAssignments[pos] || []), key],
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
      {!isDone ? (
        <h3 className={styles.question}>
          Wybierz położenie elementu:&nbsp;
          <span className={styles.highlight}>
            {polishMap[orderedElements[currentIndex]]}
          </span>
        </h3>
      ) : (
        <h3 className={styles.question}>Rozmieszczenie zakończone!</h3>
      )}

      <div className={styles.grid}>
        {Array.from({ length: 6 }, (_, i) => {
          const pos = i + 1;
          const assigned = tileAssignments[pos] || [];
          return (
            <div
              key={pos}
              className={`${styles.tile} ${
                assigned.length ? styles.filled : styles.empty
              }`}
              onClick={() => !isDone && handleTileClick(pos)}
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
