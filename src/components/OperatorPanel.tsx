"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/popup/popup";
import styles from "./OperatorPanel.module.css";
import zbiornik from "@/../public/intouch_zbiornik.png";
import engine from "@/../public/turbina.png";
import pump from "@/../public/ekran_pompy.png";
import { OperatorPanelTranslation, PanelTypes } from "@/types";

interface OperatorPanelProps {
  slug: PanelTypes;
  t: OperatorPanelTranslation;
  currentLocale: "en" | "pl";
}

export default function OperatorPanel({
  slug,
  t,
  currentLocale,
}: OperatorPanelProps) {
  const [showPopup, setShowPopup] = useState(false);

  const nextUrls: Record<PanelTypes, string> = {
    "water-tank": `/${currentLocale}/intouch/pump`,
    pump: `/${currentLocale}/intouch/house`,
    house: `/${currentLocale}/cars/step1`,
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

  return (
    <main className={styles.main}>
      <h3 className={styles.intouchMessage}>{t.questions[slug]}</h3>

      {showPopup && <Popup message={t.popupMessage} onClose={handleClose} />}

      <div className={styles.imageWrapper}>
        <Image
          src={images[slug]}
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
          {t.sourceText}
          <a href="https://www.jointjs.com/demos/scada">
            https://www.jointjs.com/demos/scada
          </a>
        </p>
      )}

      <Footer href={nextUrls[slug]} />
    </main>
  );
}
