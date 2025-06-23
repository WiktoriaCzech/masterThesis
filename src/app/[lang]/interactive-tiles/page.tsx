import { Suspense } from "react";
import InteractiveTilesClient from "@/components/InteractiveTilesClient";
import Footer from "@/components/footer/Footer";
import pl from "@/dictionaries/pl.json";
import en from "@/dictionaries/en.json";
import { InteractiveTilesTranslation } from "@/types";

type Lang = "en" | "pl";
interface Dictionary {
  interactiveTiles: InteractiveTilesTranslation;
}
function getDictionary(lang: Lang): Dictionary {
  return lang === "pl" ? pl : en;
}

interface RawParams {
  lang?: Lang;
}

export default async function Page({
  params,
}: {
  // note params is a Promise
  params: Promise<RawParams>;
}) {
  const { lang = "pl" } = await params;
  const dict = getDictionary(lang);
  const t = dict.interactiveTiles;

  return (
    <>
      <Suspense fallback={<div>Loading…</div>}>
        <InteractiveTilesClient t={t} />
      </Suspense>
      <Footer href={`/${lang}/thank-you`} />
    </>
  );
}
