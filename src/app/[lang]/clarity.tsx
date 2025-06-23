"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityClient({ projectId }: { projectId: string }) {
  useEffect(() => {
    Clarity.init(projectId);
  }, [projectId]);

  return null;
}
