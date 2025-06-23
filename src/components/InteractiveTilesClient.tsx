"use client";

import { useSearchParams } from "next/navigation";
import InteractiveGrid from "@/components/InteractiveGrid";
import { InteractiveTilesTranslation } from "@/types";
import { Ranks } from "@/types";

interface Props {
  t: InteractiveTilesTranslation;
}

export default function InteractiveTilesClient({ t }: Props) {
  const params = useSearchParams();
  const ranks: Ranks = {
    settings: params.get("settings") ?? "",
    music: params.get("music") ?? "",
    battery: params.get("battery") ?? "",
    navigation: params.get("navigation") ?? "",
    phone: params.get("phone") ?? "",
    ac: params.get("ac") ?? "",
  };

  const pos =
    (params.get("pos") as "horizontal" | "vertical" | "grid" | "") || "";

  return <InteractiveGrid ranks={ranks} pos={pos} t={t} />;
}
