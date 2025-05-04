import styles from "./page.module.css";

function ThankYouPage() {
  return (
    <main className={styles.main}>
      <div className={styles.thankYouBox}>
        <h2 className={styles.thankYouTitle}>
          ✅ Dziękuję za udział w badaniu!
        </h2>
        <p className={styles.thankYouText}>
          Twoje odpowiedzi oraz opinie są dla mnie niezwykle cenne. Pomogą w
          dalszym doskonaleniu interfejsów operatorskich zgodnych z zasadami
          UI/UX oraz w tworzeniu bardziej intuicyjnych narzędzi wspierających
          pracę automatyków.
        </p>
        <p className={styles.thankYouText}>
          Dziękujemy za poświęcony czas i zaangażowanie!
        </p>
      </div>
    </main>
  );
}

export default ThankYouPage;
