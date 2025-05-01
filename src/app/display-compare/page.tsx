import Image from "next/image";
import styles from "./page.module.css";
import panel from "@/../public/panel_operatorski.png";
import Footer from "@/components/footer/Footer";
import NewDisplay from "@/components/NewOpDisplay";

function CompareDisplaysPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image
            src={panel}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            priority
          />
        </div>
        <div className={styles.displayWrapper}>
          <NewDisplay />
        </div>
      </main>
      <Footer url="/questions" />
    </>
  );
}

export default CompareDisplaysPage;
