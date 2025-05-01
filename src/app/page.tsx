import Link from "next/link";
import styles from "./page.module.css";
import ArrowSVG from "@/../public/svg/ArrowSVG";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.overrideMain}`}>
      <div className={styles.cardWrapper}>
        <h1>Dziękuje za wyrażenie chęci udziału w badaniu.</h1>
        <h2>
          Za chwilę zostaną Ci przedstawione dwa widoki panelu operatorskiego:
          po lewej stronie zobaczysz panel w formie zdjęcia, a po prawej — jego
          nową, interaktywną wersję.
        </h2>
        <h2>
          Przeanalizuj oba panele operatorskie pod kątem prezentacji danych oraz
          przejrzystości wizualizacji. Poniżej znajdziesz pytania pomocnicze,
          które pomogą Ci skupić uwagę na najistotniejszych aspektach.
        </h2>
        <ul className={styles.list}>
          <li>W którym panelu potrafisz szybko odnaleźć istotne informacje?</li>
          <li>
            W którym panelu układ danych jest dla Ciebie bardziej intuicyjny?
          </li>
          <li>
            W którym panelu jest łatwiej odnaleść Ci potrzebne informacje?
          </li>
        </ul>
        <p>
          <strong>Informacja o prywatności</strong>: Ta strona korzysta z
          narzędzia Microsoft Clarity, które rejestruje anonimowe dane dotyczące
          interakcji użytkowników, takie jak kliknięcia, przewijanie strony czy
          ruchy kursora. Żadne dane osobowe (np. imię, nazwisko, hasła) nie są
          gromadzone ani zapisywane. Zebrane informacje służą wyłącznie do
          przeprowadzenia badania.
        </p>
        <Link href="/display-compare" className={styles.button}>
          Dalej
          <ArrowSVG width={28} />
        </Link>
      </div>
    </main>
  );
}
