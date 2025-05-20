import CarSelector from "@/components/CarSelector";
import { Slug } from "@/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { slug: "step1" },
    { slug: "step2" },
    { slug: "step3" },
    { slug: "step4" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const safeSlug = slug as Slug;

  return <CarSelector slug={safeSlug} />;
}
