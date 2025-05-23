"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";

export default function Questionare() {
  const [ranks, setRanks] = useState({
    settings: "",
    music: "",
    battery: "",
    navigation: "",
    phone: "",
    ac: "",
  });

  const [pos, setPos] = useState<"horizontal" | "vertical" | "grid" | "">("");

  const handleRankChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof typeof ranks
  ) => {
    const value = e.target.value;
    if (/^[1-6]?$/.test(value)) {
      setRanks((prev) => ({ ...prev, [key]: value }));
    }
  };

  const firstQuestionComplete =
    Object.values(ranks).every((v) => v !== "") && pos !== "";

  return (
    <main className={`${styles.main} ${styles.overrideMain}`}>
      <div className={styles.cardWrapper}>
        <h2>
          Odpowiedz na poniższe pytania dotyczące preferowanego układu elementów
          interfejsu użytkownika.
        </h2>

        <form className={styles.questionsForm}>
          <ol>
            <li>
              <label>
                W jakiej kolejności (1–6) uznajesz poniższe elementy za
                najważniejsze? (1–najważniejsze, 6–najmniej ważne)
              </label>
              <div className={styles.answer}>
                <label>
                  Ustawienia:{" "}
                  <input
                    type="number"
                    min="1"
                    max="6"
                    inputMode="numeric"
                    pattern="[1-6]"
                    className={styles.rankInput}
                    value={ranks.settings}
                    onChange={(e) => handleRankChange(e, "settings")}
                  />
                </label>
              </div>
              <div className={styles.answer}>
                <label>
                  Muzyka:{" "}
                  <input
                    type="number"
                    min="1"
                    max="6"
                    inputMode="numeric"
                    pattern="[1-6]"
                    className={styles.rankInput}
                    value={ranks.music}
                    onChange={(e) => handleRankChange(e, "music")}
                  />
                </label>
              </div>
              <div className={styles.answer}>
                <label>
                  Bateria:{" "}
                  <input
                    type="number"
                    min="1"
                    max="6"
                    inputMode="numeric"
                    pattern="[1-6]"
                    className={styles.rankInput}
                    value={ranks.battery}
                    onChange={(e) => handleRankChange(e, "battery")}
                  />
                </label>
              </div>
              <div className={styles.answer}>
                <label>
                  Nawigacja:{" "}
                  <input
                    type="number"
                    min="1"
                    max="6"
                    inputMode="numeric"
                    pattern="[1-6]"
                    className={styles.rankInput}
                    value={ranks.navigation}
                    onChange={(e) => handleRankChange(e, "navigation")}
                  />
                </label>
              </div>
              <div className={styles.answer}>
                <label>
                  Telefon:{" "}
                  <input
                    type="number"
                    min="1"
                    max="6"
                    inputMode="numeric"
                    pattern="[1-6]"
                    className={styles.rankInput}
                    value={ranks.phone}
                    onChange={(e) => handleRankChange(e, "phone")}
                  />
                </label>
              </div>
              <div className={styles.answer}>
                <label>
                  Klimatyzacja:
                  <input
                    type="number"
                    min="1"
                    max="6"
                    inputMode="numeric"
                    pattern="[1-6]"
                    className={styles.rankInput}
                    value={ranks.ac}
                    onChange={(e) => handleRankChange(e, "ac")}
                  />
                </label>
              </div>
            </li>

            <li>
              <label>
                W jakim układzie preferujesz rozmieszczenie elementów
                interfejsu?
              </label>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="layout-horizontal"
                  name="layout"
                  value="horizontal"
                  checked={pos === "horizontal"}
                  onChange={(e) => setPos(e.target.value as "horizontal")}
                />
                <label htmlFor="layout-horizontal">Poziomym</label>
              </div>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="layout-vertical"
                  name="layout"
                  value="vertical"
                  checked={pos === "vertical"}
                  onChange={(e) => setPos(e.target.value as "vertical")}
                />
                <label htmlFor="layout-vertical">Pionowym</label>
              </div>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="layout-grid"
                  name="layout"
                  value="grid"
                  checked={pos === "grid"}
                  onChange={(e) => setPos(e.target.value as "grid")}
                />
                <label htmlFor="layout-vertical">Siatka</label>
              </div>
            </li>

            <li>
              <label>Czy elementy interfejsu powinny być przewijalne?</label>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="scroll-yes"
                  name="scrollable"
                  value="yes"
                />
                <label htmlFor="scroll-yes">Tak</label>
              </div>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="scroll-no"
                  name="scrollable"
                  value="no"
                />
                <label htmlFor="scroll-no">Nie</label>
              </div>
            </li>

            <li>
              <label>
                [Opcjonalnie] Jeśli uważasz, że elementy powinny być przewijalne
                – w którym kierunku?
              </label>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="scroll-dir-vertical"
                  name="scrollDirection"
                  value="vertical"
                />
                <label htmlFor="scroll-dir-vertical">W pionie</label>
              </div>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="scroll-dir-horizontal"
                  name="scrollDirection"
                  value="horizontal"
                />
                <label htmlFor="scroll-dir-horizontal">W poziomie</label>
              </div>
            </li>
          </ol>
        </form>

        <Footer
          disabled={!firstQuestionComplete}
          href={{
            pathname: "/interactive-tiles",
            query: {
              settings: ranks.settings,
              music: ranks.music,
              battery: ranks.battery,
              navigation: ranks.navigation,
              phone: ranks.phone,
              ac: ranks.ac,
              pos,
            },
          }}
        />
      </div>
    </main>
  );
}
