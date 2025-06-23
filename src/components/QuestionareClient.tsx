"use client";

import { useState } from "react";
import styles from "./QuestionareClient.module.css";
import Footer from "@/components/footer/Footer";
import { QuestionareTranslation, RankElements } from "@/types";

interface QuestionareProps {
  t: QuestionareTranslation;
  lang: "en" | "pl";
}

export default function QuestionareClient({ t, lang }: QuestionareProps) {
  const [ranks, setRanks] = useState<RankElements>({
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
        <h2>{t.heading}</h2>

        <form className={styles.questionsForm}>
          <ol>
            <li>
              <label>{t.questions.rankElements}</label>
              {(
                Object.entries(t.questions.elements) as Array<
                  [keyof RankElements, string]
                >
              ).map(([key, label]) => (
                <div className={styles.answer} key={key}>
                  <label>
                    {label}{" "}
                    <input
                      type="number"
                      min="1"
                      max="6"
                      inputMode="numeric"
                      pattern="[1-6]"
                      className={styles.rankInput}
                      value={ranks[key]}
                      onChange={(e) => handleRankChange(e, key)}
                    />
                  </label>
                </div>
              ))}
            </li>

            <li>
              <label>{t.questions.layoutPrefer}</label>
              {Object.entries(t.questions.layoutOptions).map(
                ([value, label]) => (
                  <div className={styles.answer} key={value}>
                    <input
                      type="radio"
                      id={`layout-${value}`}
                      name="layout"
                      value={value}
                      checked={pos === value}
                      onChange={(e) => setPos(e.target.value as "horizontal")}
                    />
                    <label htmlFor={`layout-${value}`}>{label}</label>
                  </div>
                )
              )}
            </li>

            <li>
              <label>{t.questions.scrollable}</label>
              {Object.entries(t.questions.scrollableOptions).map(
                ([value, label]) => (
                  <div className={styles.answer} key={value}>
                    <input
                      type="radio"
                      id={`scroll-${value}`}
                      name="scrollable"
                      value={value}
                    />
                    <label htmlFor={`scroll-${value}`}>{label}</label>
                  </div>
                )
              )}
            </li>

            <li>
              <label>{t.questions.scrollDirection}</label>
              {Object.entries(t.questions.scrollDirectionOptions).map(
                ([value, label]) => (
                  <div className={styles.answer} key={value}>
                    <input
                      type="radio"
                      id={`scroll-dir-${value}`}
                      name="scrollDirection"
                      value={value}
                    />
                    <label htmlFor={`scroll-dir-${value}`}>{label}</label>
                  </div>
                )
              )}
            </li>
          </ol>
        </form>

        <Footer
          disabled={!firstQuestionComplete}
          href={{
            pathname: `/${lang}/interactive-tiles`,
            query: {
              ...ranks,
              pos,
            },
          }}
        />
      </div>
    </main>
  );
}
