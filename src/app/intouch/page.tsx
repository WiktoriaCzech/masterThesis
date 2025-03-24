import Image from "next/image";
import Footer from "@/components/footer/Footer";
import styles from "../page.module.css";
import zbiornik from "@/../public/intouch_zbiornik.png";

export default function Intouch() {
  return (
    <main className={`${styles.main} ${styles.overrideMain}`}>
      <h3>
        W którym miejscu kliknał byś na poniższym panelu operatorskim aby zmienić poziom wody w zbiorniku ?
      </h3>
      <div className={`${styles.imageWrapper} ${styles.pointer}`}>
        <Image
          src={zbiornik}
          alt=""
          style={{
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
          priority
        />
      </div>
      <Footer url={"/thank-you"} />
    </main>
  );
}
