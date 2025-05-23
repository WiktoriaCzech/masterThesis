"use client";

import { useSearchParams } from "next/navigation";
import InteractiveGrid from "@/components/InteractiveGrid";

export default function InteractiveTilesClient() {
  const params = useSearchParams();
  const ranks = {
    settings: params.get("settings") ?? "",
    music: params.get("music") ?? "",
    battery: params.get("battery") ?? "",
    navigation: params.get("navigation") ?? "",
    phone: params.get("phone") ?? "",
    ac: params.get("ac") ?? "",
  };

  return <InteractiveGrid ranks={ranks} />;
}
