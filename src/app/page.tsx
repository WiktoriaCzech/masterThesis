"use client";

import { useMemo } from "react";
import styles from "./page.module.css";
import Card from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import calculateTime from "@/utils/calculateTime";
import useTimeDifference from "@/hooks/useTimeDifference";
import dateToString from "@/utils/stringToDate";

export default function Home() {
  const issuedDate = useMemo(() => new Date("2025-01-08T06:34:30.000Z"), []);
  const issuedDate2 = useMemo(() => new Date("2025-01-29T08:13:08.000Z"), []);
  const completedDate = useMemo(() => new Date("2025-01-08T08:41:56.000Z"), []);
  const comingServices = useMemo(
    () => new Date("2024-09-17T00:00:00.000Z"),
    []
  );

  const issuedDateInString = dateToString(issuedDate, "full");
  const issuedDate2InString = dateToString(issuedDate2, "full");
  const completedDateInString = dateToString(completedDate, "full");
  const comingServicesInString = dateToString(comingServices, "date");

  const timeDifference = useTimeDifference(issuedDate2);

  const data = {
    content: {
      letter: "C",
      name: "MBH2",
      description: "Myjka Benteler",
    },
    details: {
      maintainerNote: "Wymiana wody",
      comingServiceDate: comingServicesInString,
    },
  };

  const data2 = {
    content: {
      letter: "A",
      name: "ManipulatorPVH2",
      description: "Manipulator PV H2 (monodragon)",
      issuedDate: issuedDateInString,
      completedDate: completedDateInString,
    },
    details: {
      serviceTime: calculateTime(issuedDate, completedDate),
      category: "Diagnostyka / Naprawa",
      maintainerNote: "Brak ciśnienia w układzie podawania",
      maintainer: "Mariusz Kowalski",
      priority: 3,
    },
  };

  const data3 = {
    content: {
      letter: "F",
      name: "Stringer Stringerownia",
      issuedDate: issuedDate2InString,
      description: "Stringer 2/S10",
    },
    details: {
      serviceTime: timeDifference,
      maintainerNote: "Wstążka nie trafia na pada celki",
      maintainer: "Janusz Jankowski",
      priority: 1,
    },
  };

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <main className={styles.main}>
          <Card
            content={data.content}
            details={data.details}
            type="commingSoon"
          />
          <Card content={data2.content} details={data2.details} type="latest" />
          <Card content={data3.content} details={data3.details} type="danger" />
        </main>
      </div>
    </>
  );
}
