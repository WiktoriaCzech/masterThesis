"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/popup/popup";
import styles from "./OperatorPanel.module.css";
import zbiornik from "@/../public/intouch_zbiornik.png";
import engine from "@/../public/turbina.png";
import pump from "@/../public/ekran_pompy.png";
import { PanelTypes } from "@/types";

interface OperatorPanelProps {
  slug: PanelTypes;
}

export default function OperatorPanel({ slug }: OperatorPanelProps) {
  const [showPopup, setShowPopup] = useState(false);

  const questions: Record<PanelTypes, string> = {
    "water-tank":
      "Poniższy ekran przedstawia uproszczoną wizualizację układu grzewczego z głównym zbiornikiem, pompą, zaworami i systemem mieszania. Klikając lewym przyciskiem myszy wskaż miejsce, w którym zmieniłbyś / zmieniłabyś poziom wody w zbiorniku.",
    pump: "Poniższy ekran przedstawia wizualizację procesu przepływu cieczy w instalacji przemysłowej, złożonej ze zbiorników, pomp i zaworów sterujących. W którym miejscu kliknąłbyś / kliknęłabyś na poniższym panelu operatorskim, aby uruchomić górną pompę wody (Pump 1)?",
    house:
      "Poniższy ekran przedstawia interfejs służący do sterowania turbiną parową w zakładzie przemysłowym. Schemat ilustruje przepływ pary, kluczowe parametry operacyjne takie jak ciśnienie, temperatura i obroty, a także stan zaworów. W którym miejscu kliknąłbyś / kliknęłabyś na poniższym panelu operatorskim, aby uruchomić sterowanie turbiną ?",
  };

  const nextUrls: Record<PanelTypes, string> = {
    "water-tank": "/intouch/pump",
    pump: "/intouch/house",
    house: "/cars/step1",
  };

  const images: Record<PanelTypes, StaticImageData> = {
    "water-tank": zbiornik,
    house: engine,
    pump: pump,
  };

  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const img = e.currentTarget;
    const { width: cw, height: ch } = img.getBoundingClientRect();
    const ratio = img.naturalWidth / img.naturalHeight;

    // determine actual drawn image size
    let iw = cw,
      ih = ch;
    if (cw / ch > ratio) {
      // limited by height
      iw = ch * ratio;
    } else {
      // limited by width
      ih = cw / ratio;
    }

    const marginX = (cw - iw) / 2;
    const marginY = (ch - ih) / 2;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    // only open popup if inside the actual image
    if (
      x >= marginX &&
      x <= marginX + iw &&
      y >= marginY &&
      y <= marginY + ih
    ) {
      setShowPopup(true);
    }
  };
  const handleClose = () => setShowPopup(false);

  const question = questions[slug];
  const footerUrl = nextUrls[slug];
  const image = images[slug];

  return (
    <main className={styles.main}>
      <h3 className={styles.intouchMessage}>{question}</h3>
      {showPopup && (
        <Popup
          message="Twoja odpowiedź została przesłana."
          onClose={handleClose}
        />
      )}

      <div className={styles.imageWrapper}>
        <Image
          src={image}
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
          quality={slug === "house" ? 100 : 75}
        />
      </div>
      {slug === "pump" && (
        <p className={styles.source}>
          Źródło:{" "}
          <a href="https://www.jointjs.com/demos/scada">
            https://www.jointjs.com/demos/scada
          </a>
        </p>
      )}

      <Footer href={footerUrl} />
    </main>
  );
}
