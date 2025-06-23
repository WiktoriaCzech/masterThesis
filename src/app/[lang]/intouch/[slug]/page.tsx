import OperatorPanel from "@/components/OperatorPanel";
import { getDictionary } from "../../dictionaries";
import { OperatorPanelTranslation, PanelTypes } from "@/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "water-tank" }, { slug: "pump" }, { slug: "house" }];
}

interface RawParams {
  slug: string;
  lang?: "en" | "pl";
}

export default async function Page({ params }: { params: Promise<RawParams> }) {
  // await the params promise
  const { slug, lang = "pl" } = await params;
  const safeSlug = slug as PanelTypes;

  const dict = await getDictionary(lang);
  const t = dict.intouch as OperatorPanelTranslation;

  return <OperatorPanel slug={safeSlug} t={t} currentLocale={lang} />;
}
