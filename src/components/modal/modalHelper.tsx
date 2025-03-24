import React from "react";
import styles from "./modalHelper.module.css";

function ModalHelper( { onClose }: { onClose: () => void }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>🛈 Pomoc – Jak korzystać z panelu operatorskiego</h2>
        <ul>
          <li>Panel umożliwia przegląd <strong>aktualnych awarii</strong>, <strong>ostatnich awarii</strong> oraz <strong>serwisów i konserwacji</strong>.</li>
          <li>Użyj górnego menu, aby przełączać się między widokami.</li>
          <li>Każdy wpis zawiera kluczowe informacje: maszynę, czas, przyczynę oraz osobę odpowiedzialną.</li>
          <li>Czerwone oznaczenia i ikony wskazują <strong>priorytet i typ zgłoszenia</strong>.</li>
          <li>Przyciski <strong>„Dalej”</strong> i <strong>„Wstecz”</strong> pozwalają przeglądać kolejne strony.</li>
          <li>Interfejs zaprojektowano zgodnie z zasadami <strong>UI/UX</strong> – z naciskiem na czytelność i prostotę.</li>
          <li>Możesz klikać w elementy – wiele z nich jest <strong>interaktywnych</strong>.</li>
        </ul>
        <div>
            <button onClick={onClose} className={styles.closeButton}>Zamknij</button>
        </div>
      </div>
    </div>
  );
}

export default ModalHelper;
