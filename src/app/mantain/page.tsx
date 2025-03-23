"use client";

import styles from "../page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Footer from "@/components/footer/Footer";
import dateToString from "@/utils/stringToDate";
import { IExampleData } from "@/types";

function MantainSchedules() {
  const exampleData: IExampleData[] = [
    {
      content: {
        letter: "C",
        name: "MBH2",
        description: "Myjka Benteler",
      },
      details: {
        maintainerNote: "Wymiana wody",
        comingServiceDate: dateToString(
          new Date("2025-04-27T06:34:30.000Z"),
          "date"
        ),
      },
    },
    {
      content: {
        letter: "F",
        name: "ManipulatorPVH2",
        description: "Manipulator PV H2 (monodragon)",
      },
      details: {
        maintainerNote: "Smarowanie łożysk",
        comingServiceDate: dateToString(
          new Date("2025-05-12T06:34:30.000Z"),
          "date"
        ),
      },
    },
    {
      content: {
        letter: "D",
        name: "PrasaPSIH6",
        description: "Prasa ciśnieniowa H6",
      },
      details: {
        maintainerNote: "Wymiana butli z Argonem",
        comingServiceDate: dateToString(
          new Date("2025-09-15T06:34:30.000Z"),
          "date"
        ),
      },
    },
    {
      content: {
        letter: "C",
        name: "MBH2",
        description: "Myjka Benteler",
      },
      details: {
        maintainerNote: "Wymiana wody",
        comingServiceDate: dateToString(
          new Date("2026-02-21T06:34:30.000Z"),
          "date"
        ),
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
            type="commingSoon"
          />
        ))}
      </section>
      <Footer url="/questions" />
    </main>
  );
}

export default MantainSchedules;
