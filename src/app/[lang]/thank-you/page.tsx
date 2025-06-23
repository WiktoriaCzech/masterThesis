import styles from "./page.module.css";
import { ThankYouTranslation } from "@/types";
import pl from "@/dictionaries/pl.json";
import en from "@/dictionaries/en.json";

type Lang = "en" | "pl";

interface Dictionary {
  thankYou: ThankYouTranslation;
}

function getDictionary(lang: Lang): Dictionary {
  return lang === "pl" ? pl : en;
}

interface RawParams {
  lang?: Lang;
}

export default async function ThankYouPage({
  params,
}: {
  params: Promise<RawParams>;
}) {
  // Await the params before using
  const { lang = "en" } = await params;
  const { thankYou: t } = getDictionary(lang);

  return (
    <main className={styles.main}>
      <div className={styles.thankYouBox}>
        <h2 className={styles.thankYouTitle}>{t.title}</h2>
        {t.texts.map((para, i) => (
          <p key={i} className={styles.thankYouText}>
            {para}
          </p>
        ))}
      </div>
    </main>
  );
}
