"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";
import ArrowSVG from "@/../../public/svg/ArrowSVG";

export default function Footer({ url }: { url: string }) {
  const router = useRouter();

  return (
    <footer className={styles.footerWrapper}>
      <Link href={url} className={styles.button}>
        Dalej
        <ArrowSVG width={28} />
      </Link>

      {url !== "/current" && (
        <button
          onClick={() => router.back()}
          className={`${styles.button} ${styles.special}`}
        >
          <ArrowSVG width={28} transform="rotate(180, 16, 12.5)" />
          Wstecz
        </button>
      )}
    </footer>
  );
}
