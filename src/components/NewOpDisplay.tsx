"use client";

import { useMemo } from "react";
import styles from "./NewDisplay.module.css";
import Card from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import useTimeDifferences from "@/hooks/useTimeDifference";
import dateToString from "@/utils/stringToDate";
import { IExampleData, ViewKey } from "@/types";
import buildCurrentData from "@/data/buildCurrentData";
import buildLatestData from "@/data/buildLatestData";
import buildMaintainData from "@/data/buildMaintainData";

interface NewDisplayProps {
  view: ViewKey;
  onChangeView: (newView: ViewKey) => void;
}

function NewDisplay({ view, onChangeView }: NewDisplayProps) {
  const isoDates = useMemo(() => {
    switch (view) {
      case "current":
        return [
          "2025-03-01T06:19:28.000Z",
          "2025-02-24T19:52:36.000Z",
          "2025-01-29T08:13:08.000Z",
        ];
      case "latest":
        return [
          "2025-01-08T06:34:30.000Z",
          "2024-12-27T12:30:37.000Z",
          "2024-12-18T08:13:08.000Z",
        ];
      case "maintain":
        return [
          "2025-04-27T06:34:30.000Z",
          "2025-05-12T06:34:30.000Z",
          "2025-09-15T06:34:30.000Z",
          "2026-02-21T06:34:30.000Z",
        ];
      default:
        return [];
    }
  }, [view]);

  const completedIsoDates = [
    new Date("2025-01-08T06:42:39.000Z"),
    new Date("2025-01-09T06:23:03.000Z"),
    new Date("2024-12-19T09:06:12.000Z"),
  ];

  const issuedDates = useMemo(
    () => isoDates.map((s) => new Date(s)),
    [isoDates]
  );

  const issuedDTS = issuedDates.map((d) =>
    view === "maintain" ? dateToString(d, "date") : dateToString(d, "full")
  );
  const completedDTS = issuedDates.map((d) => dateToString(d, "full"));
  const timeDifferences = useTimeDifferences(issuedDates);

  const completedTimeDifferences = completedIsoDates.map((d, index) =>
    dateToString(new Date(d.getTime() - issuedDates[index].getTime()), "time")
  );

  const currentData = useMemo(
    () => buildCurrentData({ issuedDTS, timeDifferences }),
    [issuedDTS, timeDifferences]
  );

  const latestData = useMemo(
    () =>
      buildLatestData({
        issuedDTS,
        completedDTS,
        completedTimeDifferences,
      }),
    [issuedDTS, completedDTS, completedTimeDifferences]
  );

  const maintainData = useMemo(
    () => buildMaintainData({ issuedDTS }),
    [issuedDTS]
  );

  let exampleData: IExampleData[] = [];
  let cardType: "danger" | "latest" | "commingSoon" = "danger";
  switch (view) {
    case "current":
      exampleData = currentData;
      cardType = "danger";
      break;
    case "latest":
      exampleData = latestData;
      cardType = "latest";
      break;
    case "maintain":
      exampleData = maintainData;
      cardType = "commingSoon";
      break;
  }

  return (
    <main className={styles.main}>
      <Navbar activeView={view} onSelect={onChangeView} />
      <section className={styles.sectionWrapper}>
        {exampleData.map((item, index) => (
          <Card
            key={`card_${index}`}
            content={item.content}
            details={item.details}
            type={cardType}
          />
        ))}
      </section>
    </main>
  );
}

export default NewDisplay;
