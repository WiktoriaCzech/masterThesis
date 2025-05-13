"use client";

import React, { useEffect } from "react";
import styles from "./popup.module.css";

type PopupProps = {
  message: string;
  onClose: () => void;
  duration?: number;
};

const Popup: React.FC<PopupProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return <div className={styles.popup}>{message}</div>;
};

export default Popup;
