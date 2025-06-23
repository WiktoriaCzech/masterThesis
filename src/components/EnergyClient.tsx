"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/popup/popup";
import styles from "./EnergyClient.module.css";
import monitor from "@/../public/energy_monitor.png";
import { EnergyTranslation } from "@/types";

interface EnergyProps {
  t: EnergyTranslation;
  lang: "en" | "pl";
}

export default function EnergyClient({ t, lang }: EnergyProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <main className={styles.main}>
      <h3 className={styles.message}>{t.question}</h3>

      {showPopup && <Popup message={t.popupMessage} onClose={handleClose} />}

      <div className={styles.imageGridWrapper}>
        <Image
          key="car-energy-consumption"
          className={styles.imageItem}
          onClick={handleClick}
          src={monitor}
          draggable={false}
          alt=""
          priority
        />
      </div>

      <Footer href={`/${lang}/questionare`} />
    </main>
  );
}
