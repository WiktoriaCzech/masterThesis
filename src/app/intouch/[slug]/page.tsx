import OperatorPanel from "@/components/OperatorPanel";
import { PanelTypes } from "@/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: "water-tank" }, { slug: "pump" }, { slug: "house" }];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const safeSlug = slug as PanelTypes;

  return <OperatorPanel slug={safeSlug} />;
}
