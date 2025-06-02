"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Footer.module.css";
import ArrowSVG from "@/../../public/svg/ArrowSVG";
import type { UrlObject } from "url";
import { isMobile, isTablet } from "react-device-detect";

interface FooterProps {
  href: string | UrlObject;
  disabled?: boolean;
}

export default function Footer({ href, disabled = false }: FooterProps) {
  const router = useRouter();

  const [isSmaller, setIsSmaller] = useState(false);

  useEffect(() => {
    setIsSmaller(isMobile || isTablet);
  }, []);

  return (
    <footer className={styles.footerWrapper}>
      {disabled ? (
        <span className={`${styles.button} ${styles.disabled}`}>
          Dalej
          <ArrowSVG width={isSmaller ? 22 : 28} />
        </span>
      ) : (
        <Link href={href} className={styles.button}>
          Dalej
          <ArrowSVG width={isSmaller ? 22 : 28} />
        </Link>
      )}

      <button
        onClick={() => router.back()}
        className={`${styles.button} ${styles.special}`}
      >
        <ArrowSVG
          width={isSmaller ? 22 : 28}
          transform="rotate(180, 16, 12.5)"
        />
        Wstecz
      </button>
    </footer>
  );
}
