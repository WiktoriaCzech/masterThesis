import Image from "next/image";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import bmw from "../../../public/BMW.webp";
import toyota from "../../../public/toyota.jpg";
import ford from "../../../public/ford.jpg";
import tesla from "../../../public/tesla.jpg";

export default function Cars() {
  const displays = [bmw, toyota, ford, tesla];

  return (
    <main className={styles.main}>
      <h3 className={styles.message}>
        Spośród czterech przedstawionych paneli dotykowych wybierz ten, z
        którego obsługą czułbyś się najbardziej komfortowo i intuicyjnie podczas
        jazdy.
      </h3>
      <div className={styles.imageGridWrapper}>
        {displays.map((display, index) => (
          <Image
            className={styles.imageItem}
            key={`car_display_${index}`}
            src={display}
            draggable={false}
            alt=""
            style={{
              objectFit: "cover",
              cursor: "pointer",
            }}
            priority
          />
        ))}
      </div>
      <Footer url={"/thank-you"} />
    </main>
  );
}
