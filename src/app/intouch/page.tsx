"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/popup/popup";
import styles from "./page.module.css";
import zbiornik from "@/../public/intouch_zbiornik.png";

export default function Intouch() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };
  return (
    <main className={styles.main}>
      <h3 className={styles.intouchMessage}>
        W którym miejscu kliknał byś na poniższym panelu operatorskim aby
        zmienić poziom wody w zbiorniku ?
      </h3>
      {showPopup && (
        <Popup
          message="Twoja odpowiedź została przesłana."
          onClose={() => setShowPopup(false)}
        />
      )}
      <div className={`${styles.imageWrapper} ${styles.pointer}`}>
        <Image
          src={zbiornik}
          draggable={false}
          onClick={handleClick}
          alt=""
          style={{
            width: "100%",
            maxWidth: "2000px",
            height: "100%",
            objectFit: "contain",
          }}
          priority
        />
      </div>
      <Footer url={"/cars"} />
    </main>
  );
}
