import HomeClient from "@/components/Home";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "pl" }>;
}) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center justify-items-center min-h-screen">
      <HomeClient t={dict.home} />
    </main>
  );
}
