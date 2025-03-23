"use client";

import { useMemo } from "react";
import styles from "../page.module.css";
import Card from "@/components/card/Card";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import useTimeDifference from "@/hooks/useTimeDifference";
import dateToString from "@/utils/stringToDate";
import { IExampleData } from "@/types";

function CurrentFaliure() {
  const issuedDate = useMemo(() => new Date("2025-03-01T06:19:28.000Z"), []);
  const issuedDate2 = useMemo(() => new Date("2025-02-24T19:52:36.000Z"), []);
  const issuedDate3 = useMemo(() => new Date("2025-01-29T08:13:08.000Z"), []);

  const issuedDateInString = dateToString(issuedDate, "full");
  const issuedDateInString2 = dateToString(issuedDate2, "full");
  const issuedDateInString3 = dateToString(issuedDate3, "full");

  const timeDifference = useTimeDifference(issuedDate);
  const timeDifference2 = useTimeDifference(issuedDate2);
  const timeDifference3 = useTimeDifference(issuedDate3);

  const exampleData: IExampleData[] = [
    {
      content: {
        letter: "F",
        name: "Stringer Stringerownia",
        issuedDate: issuedDateInString,
        description: "Stringer 2/S10",
      },
      details: {
        serviceTime: timeDifference,
        maintainerNote: "Wstążka nie trafia na pada celki",
        maintainer: "Janusz Jankowski",
        priority: 1,
      },
    },
    {
      content: {
        letter: "D",
        name: "Laminator 1",
        issuedDate: issuedDateInString2,
        description: "Laminator nr.1 Bootsolar H6",
      },
      details: {
        serviceTime: timeDifference2,
        maintainerNote: "Przerobienie gniazd",
        maintainer: "Paweł Pawłowski",
      },
    },
    {
      content: {
        letter: "B",
        name: "NorthGlass H6",
        issuedDate: issuedDateInString3,
        description: "Szlifierka szkła Benteler M1+M2",
      },
      details: {
        serviceTime: timeDifference3,
        maintainerNote: "Wstążka nie trafia na pada celki",
        maintainer: "Tadeusz Mocny",
        priority: 2,
      },
    },
  ];

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.sectionWrapper}>
        {exampleData.map((item, index) => (
          <Card
            key={`current_faliure_problem_${index}`}
            content={item.content}
            details={item.details}
            type="danger"
          />
        ))}
      </section>
      <Footer url="/questions" />
    </main>
  );
}

export default CurrentFaliure;
