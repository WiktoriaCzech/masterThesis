"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/popup/popup";
import styles from "./page.module.css";

import monitor from "@/../public/energy_monitor.png";

export default function Energy() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <main className={styles.main}>
      <h3 className={styles.message}>
        Gdzie kliknąłbyś / kliknęłabyś na ekranie, aby uzyskać więcej informacji
        o stanie zużycia baterii?
      </h3>

      {showPopup && (
        <Popup
          message="Twoja odpowiedź została przesłana."
          onClose={handleClose}
        />
      )}

      <div className={styles.imageGridWrapper}>
        <Image
          key="car-energy-consumption"
          className={styles.imageItem}
          onClick={handleClick}
          src={monitor}
          draggable={false}
          alt="car energy consumption image panel"
          priority
        />
      </div>

      <Footer url="/thank-you" />
    </main>
  );
}
