import styles from "../page.module.css";
import Footer from "@/components/footer/Footer";

function Questions() {
  return (
    <main className={styles.main}>
      <section className={`${styles.sectionWrapper} ${styles.formOverride}`}>
        <h3>
          Dziękuję za zapoznanie się z obiema wersjami panelu operatorskiego.
          Poniżej znajduje się krótki test, którego celem jest porównanie
          ergonomii pracy na standardowym interfejsie HMI oraz jego
          zmodernizowanej wersji zaprojektowanej zgodnie z zasadami UI/UX.
        </h3>
        <form className={styles.form}>
          <ol>
            <li>
              <label>
                1. Czy w pierwszym (oryginalnym) panelu operatorskim łatwo było
                odnaleźć najważniejsze informacje?
              </label>
              <div className={styles.answer}>
                <input type="radio" id="q1a" name="q1" value="Tak" />
                <label htmlFor="q1a">Tak</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q1b" name="q1" value="Częściowo" />
                <label htmlFor="q1b">Częściowo</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q1c" name="q1" value="Nie" />
                <label htmlFor="q1c">Nie</label>
              </div>
            </li>

            <li>
              <label>
                2. Czy nowy (ulepszony) panel operatorski jest bardziej czytelny
                i zrozumiały?
              </label>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="q2a"
                  name="q2"
                  value="Zdecydowanie tak"
                />
                <label htmlFor="q2a">Zdecydowanie tak</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q2b" name="q2" value="Raczej tak" />
                <label htmlFor="q2b">Raczej tak</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q2c" name="q2" value="Raczej nie" />
                <label htmlFor="q2c">Raczej nie</label>
              </div>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="q2d"
                  name="q2"
                  value="Zdecydowanie nie"
                />
                <label htmlFor="q2d">Zdecydowanie nie</label>
              </div>
            </li>

            <li>
              <label>
                3. Czy interaktywność w nowym panelu ułatwia korzystanie z
                interfejsu?
              </label>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="q3a"
                  name="q3"
                  value="Tak, znacząco poprawia komfort"
                />
                <label htmlFor="q3a">Tak, znacząco poprawia komfort</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q3b" name="q3" value="Trochę pomaga" />
                <label htmlFor="q3b">Trochę pomaga</label>
              </div>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="q3c"
                  name="q3"
                  value="Nie robi różnicy"
                />
                <label htmlFor="q3c">Nie robi różnicy</label>
              </div>
              <div className={styles.answer}>
                <input
                  type="radio"
                  id="q3d"
                  name="q3"
                  value="Utrudnia korzystanie"
                />
                <label htmlFor="q3d">Utrudnia korzystanie</label>
              </div>
            </li>
          </ol>
        </form>
      </section>
      <Footer url="/intouch" />
    </main>
  );
}

export default Questions;
