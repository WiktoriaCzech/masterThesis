import { Suspense } from "react";
import InteractiveTilesClient from "@/components/InteractiveTilesClient";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading…</div>}>
        <InteractiveTilesClient />
      </Suspense>
      <Footer href="/thank-you" />
    </>
  );
}
