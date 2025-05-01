"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ModalHelper from "../modal/modalHelper";
import CalendarSVG from "@/../../public/svg/CalendarSVG";
import DangerSVG from "@/../../public/svg/DangerSVG";
import InfoSVG from "@/../../public/svg/InfoSVG";
import WrenchSVG from "@/../../public/svg/WrenchSVG";
import useCurrentDate from "@/hooks/useCurrentDate";
import useCurrentTime from "@/hooks/useCurrentTime";
import { ViewKey } from "@/types";

interface NavProps {
  activeView: ViewKey;
  onSelect: (v: ViewKey) => void;
}

export default function Navbar({ activeView, onSelect }: NavProps) {
  const buttons = [
    {
      key: "current" as const,
      icon: <DangerSVG color="#000" width={28} />,
      text: "Bieżące awarie",
    },
    {
      key: "latest" as const,
      icon: <WrenchSVG color="#000" width={32} />,
      text: "Ostatnie awarie",
    },
    {
      key: "maintain" as const,
      icon: <CalendarSVG color="#000" width={29} />,
      text: "Serwisy",
    },
  ];

  const time = useCurrentTime();
  const today = useCurrentDate();

  const [showInfo, setShowInfo] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleInfoToggle = () => setShowInfo(!showInfo);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    const wrapper = document.getElementById("newDisplay");
    if (wrapper) {
      wrapper.style.overflow = drawerOpen ? "hidden" : "";
    }
  }, [drawerOpen]);

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
          {buttons.map((btn) => (
            <button
              key={btn.key}
              className={`${styles.button} ${activeView === btn.key ? styles.active : ""}`}
              onClick={() => onSelect(btn.key)}
            >
              {btn.icon}
              <span>{btn.text}</span>
            </button>
          ))}
          <button className={styles.button} onClick={handleInfoToggle}>
            <InfoSVG color="#000" width={25} />
          </button>
        </div>

        <div className={styles.clock}>
          <b>{time.toLocaleTimeString()}</b>
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
          {buttons.map((btn) => (
            <li key={btn.key}>
              <button
                className={styles.drawerLink}
                onClick={() => {
                  onSelect(btn.key);
                  toggleDrawer();
                }}
              >
                {btn.icon}
                <span>{btn.text}</span>
              </button>
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
