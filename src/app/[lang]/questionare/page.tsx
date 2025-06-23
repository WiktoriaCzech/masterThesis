import QuestionareClient from "@/components/QuestionareClient";
import { getDictionary } from "../dictionaries";
import { QuestionareTranslation } from "@/types";

type Lang = "en" | "pl";
interface RawParams {
  lang?: Lang;
}

export default async function Page({ params }: { params: Promise<RawParams> }) {
  const { lang = "pl" } = await params;
  const dict = await getDictionary(lang);
  const t = dict.questionare as QuestionareTranslation;

  return <QuestionareClient t={t} lang={lang} />;
}
