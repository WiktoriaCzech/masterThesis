"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Footer from "@/components/footer/Footer";
import Popup from "@/components/popup/popup";
import styles from "./CarSelector.module.css";

import bmw from "@/../public/BMW.webp";
import bmwZoom from "@/../public/bmw-zoom.png";
import toyota from "@/../public/toyota.jpg";
import toyotaZoom from "@/../public/toyota-crown-platinum-nav.jpg";
import ford from "@/../public/ford.jpg";
import fordZoom from "@/../public/ford-zoom.png";
import fordZoomAC from "@/../public/ford-zoom-ac.jpg";
import tesla from "@/../public/tesla.jpg";
import tesla3Zoom from "@/../public/Tesla-3-zoom.jpg";
import { CarSelectorTranslation, Slug } from "@/types";

interface CarSelectorProps {
  slug: Slug;
  t: CarSelectorTranslation;
  lang: "en" | "pl";
}

export default function CarSelector({ slug, t, lang }: CarSelectorProps) {
  const [showPopup, setShowPopup] = useState(false);

  const nextUrls: Record<Slug, string> = {
    step1: `/${lang}/cars/step2`,
    step2: `/${lang}/cars/step3`,
    step3: `/${lang}/cars/step4`,
    step4: `/${lang}/energy-consumption`,
  };

  const handleClick = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  let displays: StaticImageData[] = [];

  switch (slug) {
    case "step1":
      displays = [bmw, toyota, ford, tesla];
      break;
    case "step2":
      displays = [bmwZoom, toyotaZoom, fordZoomAC, tesla3Zoom];
      break;
    case "step3":
      displays = [bmwZoom, toyotaZoom, fordZoom, tesla3Zoom];
      break;
    case "step4":
      displays = [bmwZoom, toyotaZoom, fordZoom, tesla3Zoom];
      break;
  }

  return (
    <main className={styles.main}>
      <h3 className={styles.message}>{t.questions[slug]}</h3>

      {showPopup && <Popup message={t.popupMessage} onClose={handleClose} />}

      <div className={styles.imageGridWrapper}>
        {displays.map((display, idx) => (
          <Image
            key={idx}
            className={styles.imageItem}
            onClick={handleClick}
            src={display}
            draggable={false}
            alt=""
            style={{ objectFit: "cover", cursor: "pointer" }}
            priority
          />
        ))}
      </div>

      <Footer href={nextUrls[slug]} />
    </main>
  );
}
