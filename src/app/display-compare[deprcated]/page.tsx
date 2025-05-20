"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import panel from "@/../public/panel_operatorski.png";
import Footer from "@/components/footer/Footer";
import NewDisplay from "@/components/NewOpDisplay";
import { ViewKey } from "@/types";

function CompareDisplaysPage() {
  const [view, setView] = useState<ViewKey>("current");

  return (
    <>
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image
            src={panel}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            priority
          />
        </div>
        <div id="newDisplay" className={styles.displayWrapper}>
          <NewDisplay view={view} onChangeView={setView} />
        </div>
      </main>
      <Footer url="/questions" />
    </>
  );
}

export default CompareDisplaysPage;
