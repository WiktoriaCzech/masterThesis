"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/popup/popup";
import styles from "./page.module.css";
import bmw from "../../../public/BMW.webp";
import toyota from "../../../public/toyota.jpg";
import ford from "../../../public/ford.jpg";
import tesla from "../../../public/tesla.jpg";

export default function Cars() {
  const displays = [bmw, toyota, ford, tesla];
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <main className={styles.main}>
      <h3 className={styles.message}>
        Spośród czterech przedstawionych paneli dotykowych wybierz ten, z
        którego obsługą czułbyś się najbardziej komfortowo i intuicyjnie podczas
        jazdy.
      </h3>

      {showPopup && (
        <Popup
          message="Twoja odpowiedź została przesłana."
          onClose={() => setShowPopup(false)}
        />
      )}

      <div className={styles.imageGridWrapper}>
        {displays.map((display, index) => (
          <Image
            className={styles.imageItem}
            onClick={handleClick}
            key={`car_display_${index}`}
            src={display}
            draggable={false}
            alt=""
            style={{
              objectFit: "cover",
              cursor: "pointer",
            }}
            priority
          />
        ))}
      </div>
      <Footer url={"/thank-you"} />
    </main>
  );
}
