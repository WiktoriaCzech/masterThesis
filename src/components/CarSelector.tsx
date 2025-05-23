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
import { Slug } from "@/types";

interface CarSelectorProps {
  slug: Slug;
}

export default function CarSelector({ slug }: CarSelectorProps) {
  const [showPopup, setShowPopup] = useState(false);

  const questions: Record<Slug, string> = {
    step1:
      "Spośród czterech przedstawionych paneli samochodowych wybierz ten, z którego obsługą czułbyś się najbardziej komfortowo i intuicyjnie podczas jazdy.",
    step2:
      "Spośród czterech paneli dotykowych wybierz ten, w którym najłatwiej byłoby Ci zmienić ustawienia klimatyzacji.",
    step3:
      "Spośród czterech paneli dotykowych wybierz ten, w którym najłatwiej byłoby Ci włączyć nawigację.",
    step4:
      "Spośród czterech paneli  wybierz ten, na którym jest ci najłatwiej wybrać numer telefonu. ",
  };

  const nextUrls: Record<Slug, string> = {
    step1: "/cars/step2",
    step2: "/cars/step3",
    step3: "/cars/step4",
    step4: "/energy-consumption",
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

  const question = questions[slug];
  const footerUrl = nextUrls[slug];

  return (
    <main className={styles.main}>
      <h3 className={styles.message}>{question}</h3>

      {showPopup && (
        <Popup
          message="Twoja odpowiedź została przesłana."
          onClose={handleClose}
        />
      )}

      <div className={styles.imageGridWrapper}>
        {displays.map((display, index) => (
          <Image
            key={index}
            className={styles.imageItem}
            onClick={handleClick}
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

      <Footer href={footerUrl} />
    </main>
  );
}
