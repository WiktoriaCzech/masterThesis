import styles from "./Card.module.css";
import CompanyIconSVG from "../../../public/svg/CompanyIconSVG";
import WrenchSVG from "../../../public/svg/WrenchSVG";
import PersonSVG from "../../../public/svg/PersonSVG";
import CheckboxSVG from "../../../public/svg/CheckboxSVG";
import PenSVG from "../../../public/svg/PenSVG";
import CalendarSVG from "../../../public/svg/CalendarSVG";
import TimedWrenchSVG from "../../../public/svg/TimedWrenchSVG";
import DangerSVG from "../../../public/svg/DangerSVG";
import { ICardProps } from "@/types";

function Card({ content, details, type }: ICardProps) {
  const typeMapping = {
    danger: {
      themeClass: styles.danger,
      color: "#d70004",
    },
    latest: {
      themeClass: styles.latest,
      color: "#134b73",
    },
    commingSoon: {
      themeClass: styles.commingSoon,
      color: "#f06400",
    },
  };

  const { themeClass, color } = typeMapping[type] || {
    themeClass: "",
    color: "",
  };

  const displayDetails = [
    {
      icon:
        type === "danger" ? (
          <TimedWrenchSVG color={color} width={36} />
        ) : (
          <WrenchSVG color={color} width={32} />
        ),
      text: details.serviceTime ? details.serviceTime : "",
    },
    {
      icon: <CalendarSVG color={color} width={32} />,
      text: details.comingServiceDate ? (
        <>
          Data planowanego serwisu: <b>{details.comingServiceDate}</b>
        </>
      ) : (
        ""
      ),
    },
    {
      icon: <PersonSVG color={color} width={32} />,
      text: details.maintainer || "",
    },
    {
      icon: <CheckboxSVG color={color} width={32} />,
      text: details.category || "",
    },

    {
      icon: <PenSVG color={color} width={32} />,
      text: details.maintainerNote || "",
    },
  ];

  return (
    <div className={`${styles.cardWrapper} ${themeClass}`}>
      <div className={styles.leftSide}>
        <div className={styles.sectorWrapper}>
          <h1 className="applyColor">{content.letter}</h1>
          <CompanyIconSVG width={40} />
        </div>
        <div className={styles.paddingBottom}>
          <h1>{content.name}</h1>
          <h2>{content.description}</h2>
        </div>
        {content.issuedDate && (
          <p>
            {type === "latest" ? (
              <>
                <span>Data zgłoszenia: </span>
                {content.issuedDate}
              </>
            ) : (
              <>
                <span>Wystąpienie: </span>
                <b>{content.issuedDate}</b>
              </>
            )}
          </p>
        )}
        {content.completedDate && (
          <p>
            <span>Zakończono:</span> {content.completedDate}
          </p>
        )}
      </div>
      <div className={`${styles.rightSide} ${themeClass}`}>
        {displayDetails
          .filter((item) => item.text)
          .map((item, index) => (
            <div key={index} className={`${styles.row}`}>
              {item.icon}
              {type !== "commingSoon" && index === 0 ? (
                <p>
                  <b>{item.text}</b>
                </p>
              ) : (
                <p
                  style={{
                    paddingLeft: type === "danger" ? "4px" : 0,
                  }}
                >
                  {item.text}
                </p>
              )}
            </div>
          ))}
        {details.priority && (
          <div className={styles.dangerPosition}>
            <h1
              style={{
                color: color,
                fontSize: type === "danger" ? "2.5rem" : "2rem",
                padding: 0,
              }}
            >
              {details.priority}
            </h1>
            <DangerSVG
              color={color}
              width={type === "danger" ? 38 : 32}
              height={type === "danger" ? 38 : 32}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
