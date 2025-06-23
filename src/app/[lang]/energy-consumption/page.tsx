import EnergyClient from "@/components/EnergyClient";
import { getDictionary } from "../dictionaries";
import { EnergyTranslation } from "@/types";

type Lang = "en" | "pl";
interface RawParams {
  lang?: Lang;
}

export default async function Page({ params }: { params: Promise<RawParams> }) {
  const { lang = "pl" } = await params;
  const dict = await getDictionary(lang);
  const t = dict.energy as EnergyTranslation;

  return <EnergyClient t={t} lang={lang} />;
}
