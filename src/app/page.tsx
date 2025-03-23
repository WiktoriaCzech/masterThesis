import Image from "next/image";
import panel from "@/../public/panel_operatorski.png";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.overrideMain}`}>
      <h3>
        Zapoznaj się z poniższym widokiem panelu operatorskiego. Przeanalizuj go
        pod kątem sposobu prezentacji danych oraz przejrzystości wizualizacji.
        Zastanów się:
      </h3>
      <ul className={styles.list}>
        <li>Czy potrafisz szybko odnaleźć istotne informacje?</li>
        <li>Czy układ danych jest dla Ciebie intuicyjny?</li>
      </ul>
      <h3>
        Następnie przejdź do nowej, ulepszonej wersji panelu operatorskiego klikając w przycisk &quot;Dalej&quot;.
        Nowy widok jest interaktywny – możesz klikać w poszczególne elementy,
        aby zobaczyć dodatkowe informacje lub działania.
      </h3>
      <h3>Po zapoznaniu się z obydwoma wersjami panelu odpowiedz na pytania:</h3>
      <ul className={styles.list}>
        <li>Czy nowy panel jest bardziej czytelny?</li>
        <li>Czy łatwiej jest Ci znaleźć potrzebne informacje?</li>
        <li>
          Czy interaktywność wpływa pozytywnie na odbiór i obsługę panelu?
        </li>
      </ul>
      <div className={styles.imageWrapper}>
        <Image
          src={panel}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          priority
        />
      </div>
      <Footer url={"/current"} />
    </main>
  );
}
