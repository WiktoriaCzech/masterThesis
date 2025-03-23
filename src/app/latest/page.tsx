"use client";

import styles from "../page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import dateToString from "@/utils/stringToDate";
import { IExampleData } from "@/types";

function LatestIncidents() {
  const issuedDate = new Date("2025-01-08T06:34:30.000Z");
  const issuedDate2 = new Date("2024-12-27T12:30:37.000Z");
  const issuedDate3 = new Date("2024-12-18T08:13:08.000Z");

  const completedDate = new Date("2025-01-08T06:42:39.000Z");
  const completedDate2 = new Date("2025-01-09T06:23:03.000Z");
  const completedDate3 = new Date("2024-12-19T09:06:12.000Z");

  const timeDifference = dateToString(
    new Date(completedDate.getTime() - issuedDate.getTime()),
    "time"
  );
  const timeDifference2 = dateToString(
    new Date(completedDate2.getTime() - issuedDate2.getTime()),
    "time"
  );
  const timeDifference3 = dateToString(
    new Date(completedDate3.getTime() - issuedDate3.getTime()),
    "time"
  );

  const exampleData: IExampleData[] = [
    {
      content: {
        letter: "A",
        name: "ManipulatorPVH2",
        description: "Manipulator PV H2 (monodragon)",
        issuedDate: dateToString(issuedDate, "full"),
        completedDate: dateToString(completedDate, "full"),
      },
      details: {
        serviceTime: timeDifference,
        category: "Diagnostyka / Naprawa",
        maintainerNote: "Brak ciśnienia w układzie podawania",
        maintainer: "Mariusz Kowalski",
        priority: 3,
      },
    },
    {
      content: {
        letter: "D",
        name: "LWenH2",
        issuedDate: dateToString(issuedDate2, "full"),
        description: "Laminator Wenhoner Variolam",
        completedDate: dateToString(completedDate2, "full"),
      },
      details: {
        serviceTime: timeDifference2,
        category: "Diagnostyka / Naprawa",
        maintainerNote: "Przerobienie gniazd",
        maintainer: "Kamil Dzięciołek",
        priority: 2,
      },
    },
    {
      content: {
        letter: "B",
        name: "TIOKH1",
        issuedDate: dateToString(issuedDate3, "full"),
        description: "Tiokolarka H1 (LL)",
        completedDate: dateToString(completedDate3, "full"),
      },
      details: {
        serviceTime: timeDifference3,
        category: "Diagnostyka / Naprawa",
        maintainerNote: "Brak ciśnienia w układzie podawania",
        maintainer: "Amadeusz Mozart",
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
            type="latest"
          />
        ))}
      </section>
      <Footer url="/questions" />
    </main>
  );
}

export default LatestIncidents;
