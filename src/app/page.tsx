"use client";

import { useMemo } from "react";
import styles from "./page.module.css";
import Card from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import calculateTime from "@/utils/calculateTime";

import dateToString from "@/utils/stringToDate";
import CurrentFaliure from "./current/page";

export default function Home() {
  const issuedDate = useMemo(() => new Date("2025-01-08T06:34:30.000Z"), []);
  
  const completedDate = useMemo(() => new Date("2025-01-08T08:41:56.000Z"), []);
  const comingServices = useMemo(
    () => new Date("2024-09-17T00:00:00.000Z"),
    []
  );

  const issuedDateInString = dateToString(issuedDate, "full");
  const completedDateInString = dateToString(completedDate, "full");
  const comingServicesInString = dateToString(comingServices, "date");

 

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



  return (
    <>
      <Navbar />
        <main className={styles.main}>
          {/* <Card
            content={data.content}
            details={data.details}
            type="commingSoon"
          />
          <Card content={data2.content} details={data2.details} type="latest" /> */}
          <CurrentFaliure />
        </main>
 
    </>
  );
}
