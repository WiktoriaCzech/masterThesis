"use client";

import Link from "next/link";
import styles from "./page.module.css";
import ArrowSVG from "@/../public/svg/ArrowSVG";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.overrideMain}`}>
      <div className={styles.cardWrapper}>
        <h1>Dziękuje za wyrażenie chęci udziału w badaniu.</h1>
        <h2>
          Celem badania jest analiza zachowań użytkowników (operatorów) podczas
          obsługi interfejsów wizualizacji procesu w systemach automatyki,
          takich jak panele operatorskie HMI i ekrany synoptyczne SCADA, a także
          w systemach automatyki transportowej, np. ekrany dotykowe w pojazdach.
          Badanie obejmuje przeprowadzenie testowych symulacji i wizualizacji, a
          jego wyniki posłużą do sformułowania wytycznych projektowych dla
          budowy przejrzystych, intuicyjnych i przyjaznych interfejsów
          operatora.
        </h2>

        <form
          className={styles.questionsForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <ol>
            <li>
              <label>Do której kategorii wiekowej należysz?</label>
              <div className={styles.answer}>
                <input type="radio" id="q4a" name="q4" value="18-30" />
                <label htmlFor="q4a">18 - 30</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q4b" name="q4" value="30-40" />
                <label htmlFor="q4b">30 - 40</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q4c" name="q4" value="40-50" />
                <label htmlFor="q4c">40 - 50</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q4d" name="q4" value="50+" />
                <label htmlFor="q4d">50+</label>
              </div>
            </li>

            <li>
              <label>Określ swoją płeć:</label>
              <div className={styles.answer}>
                <input type="radio" id="q1a" name="q1" value="Kobieta" />
                <label htmlFor="q1a">Kobieta</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q1b" name="q1" value="Mężczyzna" />
                <label htmlFor="q1b">Mężczyzna</label>
              </div>
            </li>

            <li>
              <label>Czy jesteś osobą prawo- czy leworęczną?</label>
              <div className={styles.answer}>
                <input type="radio" id="q2a" name="q2" value="Praworęczny/a" />
                <label htmlFor="q2a">Praworęczny/a</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q2b" name="q2" value="Leworęczny/a" />
                <label htmlFor="q2b">Leworęczny/a</label>
              </div>
            </li>
            <li>
              <label>[Opcjonalnie]: Podaj swoje imie: </label>
              <div className={styles.answer}>
                <input type="text" id="q3" name="q3" />
              </div>
            </li>
          </ol>
        </form>

        <p>
          <strong>Informacja o prywatności</strong>: Ta strona korzysta z
          narzędzia Microsoft Clarity, które rejestruje anonimowe dane dotyczące
          interakcji użytkowników, takie jak kliknięcia, przewijanie strony czy
          ruchy kursora. Żadne dane osobowe (np. imię, nazwisko, hasła) nie są
          gromadzone ani zapisywane. Zebrane informacje służą wyłącznie do
          przeprowadzenia badania.
        </p>

        <Link href="/intouch/water-tank" className={styles.button}>
          Dalej
          <ArrowSVG width={28} />
        </Link>
      </div>
    </main>
  );
}
