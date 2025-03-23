"use client";

import { useMemo } from "react";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import calculateTime from "@/utils/calculateTime";

import dateToString from "@/utils/stringToDate";
import CurrentFaliure from "./current/page";

export default function Home() {
  // redirect("/current");

  const issuedDate = useMemo(() => new Date("2025-01-08T06:34:30.000Z"), []);

  const completedDate = useMemo(() => new Date("2025-01-08T08:41:56.000Z"), []);
  const comingServices = useMemo(
    () => new Date("2024-09-17T00:00:00.000Z"),
    []
  );

  const issuedDateInString = dateToString(issuedDate, "full");

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

  return (
    <>
      {/* <Card
            content={data.content}
            details={data.details}
            type="commingSoon"
          />
      */}
    </>
  );
}
