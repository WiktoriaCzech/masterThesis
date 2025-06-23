import CarSelector from "@/components/CarSelector";
import { getDictionary } from "../../dictionaries";
import { CarSelectorTranslation, Slug } from "@/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "step1" },
    { slug: "step2" },
    { slug: "step3" },
    { slug: "step4" },
  ];
}

type Lang = "en" | "pl";
interface RawParams {
  slug: string;
  lang?: Lang;
}

export default async function Page({ params }: { params: Promise<RawParams> }) {
  const { slug, lang = "pl" } = await params;
  const safeSlug = slug as Slug;

  const dict = await getDictionary(lang);
  const t = dict.cars as CarSelectorTranslation;

  return <CarSelector slug={safeSlug} t={t} lang={lang} />;
}
