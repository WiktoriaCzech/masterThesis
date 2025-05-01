"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ModalHelper from "../modal/modalHelper";
import CalendarSVG from "@/../../public/svg/CalendarSVG";
import DangerSVG from "@/../../public/svg/DangerSVG";
import InfoSVG from "@/../../public/svg/InfoSVG";
import WrenchSVG from "@/../../public/svg/WrenchSVG";
import useCurrentDate from "@/hooks/useCurrentDate";
import useTimeDifference from "@/hooks/useTimeDifference";

export default function Navbar() {
  const buttonsData = [
    {
      icon: <DangerSVG color="#000" width={28} />,
      text: "Bieżące awarie",
      url: "/current",
    },
    {
      icon: <WrenchSVG color="#000" width={32} />,
      text: "Ostatnie awarie",
      url: "/latest",
    },
    {
      icon: <CalendarSVG color="#000" width={29} />,
      text: "Serwisy i konserwacje",
      url: "/mantain",
    },
  ];

  const time = useTimeDifference();
  const today = useCurrentDate();

  const [showInfo, setShowInfo] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleInfoToggle = () => setShowInfo(!showInfo);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <nav role="navigation" className={styles.navWrapper}>
        <button
          className={styles.hamburger}
          onClick={toggleDrawer}
          aria-label="Menu"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

        <div className={styles.buttonsWrapper}>
          {buttonsData.map((btn, i) => (
            <Link key={i} className={styles.button} href={btn.url}>
              {btn.icon}
              <span>{btn.text}</span>
            </Link>
          ))}
          <button className={styles.button} onClick={handleInfoToggle}>
            <InfoSVG color="#000" width={25} />
          </button>
        </div>

        <div className={styles.clock}>
          <b>{time}</b>
          <b>{today.toLocaleDateString()}</b>
        </div>
      </nav>

      <div
        className={`${styles.drawerOverlay} ${drawerOpen ? styles.open : ""}`}
        onClick={toggleDrawer}
      />

      <aside
        id="mobile-drawer"
        className={`${styles.drawer} ${drawerOpen ? styles.open : ""}`}
      >
        <div className={styles.drawerHeader}>
          <button
            onClick={toggleDrawer}
            className={styles.closeBtn}
            aria-label="Zamknij"
          >
            &times;
          </button>
        </div>
        <ul className={styles.drawerList}>
          {buttonsData.map((btn, i) => (
            <li key={i}>
              <Link
                href={btn.url}
                onClick={toggleDrawer}
                className={styles.drawerLink}
              >
                {btn.icon}
                <span>{btn.text}</span>
              </Link>
            </li>
          ))}
          <li>
            <button
              className={styles.drawerLink}
              onClick={() => {
                handleInfoToggle();
                toggleDrawer();
              }}
            >
              <InfoSVG color="#000" width={30} />
              <span>Info</span>
            </button>
          </li>
        </ul>
      </aside>

      {showInfo && <ModalHelper onClose={handleInfoToggle} />}
    </>
  );
}
