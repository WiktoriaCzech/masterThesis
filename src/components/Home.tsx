"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import Select, { components } from "react-select";
import { ChevronDown } from "lucide-react";
import ArrowSVG from "@/../public/svg/ArrowSVG";
import styles from "../app/[lang]/page.module.css";
import { SurveyTranslation } from "@/types";

export default function HomeClient({ t }: { t: SurveyTranslation }) {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = (params.lang as "en" | "pl") ?? "pl";

  // build options from your dictionary
  const options = [
    { value: "en", label: t.locales.en },
    { value: "pl", label: t.locales.pl },
  ];
  const selectedOption = options.find((o) => o.value === currentLocale)!;

  const changeLocale = (opt: { value: string } | null) => {
    if (!opt) return;
    const newLocale = opt.value;
    const segments = pathname.split("/");
    segments[1] = newLocale; // replace lang segment
    router.push(segments.join("/"));
  };

  return (
    <main className={`${styles.main} ${styles.overrideMain}`}>
      <div className={styles.cardWrapper}>
        <div className={styles.localeSwitcher}>
          <Select
            instanceId="locale-select"
            value={selectedOption}
            onChange={changeLocale}
            options={options}
            isSearchable={false}
            classNamePrefix="react-select"
            styles={{
              control: (provided) => ({
                ...provided,
                width: 120,
                minHeight: 32,
                cursor: "pointer",
              }),
              indicatorSeparator: () => ({ display: "none" }),
              dropdownIndicator: (provided, state) => ({
                ...provided,
                transform: state.selectProps.menuIsOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                cursor: "pointer",
              }),
              option: (provided) => ({
                ...provided,
                cursor: "pointer",
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
              DropdownIndicator: (props) => (
                <components.DropdownIndicator {...props}>
                  <ChevronDown width={16} color="#000" />
                </components.DropdownIndicator>
              ),
            }}
            menuPlacement="auto"
          />
        </div>

        <h1 className={styles.overrideH1}>{t.thankYouMessage}</h1>
        <span className={styles.info}>{t.timeEstimate}</span>
        <h2>{t.studyPurpose}</h2>

        <form
          className={styles.questionsForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <ol>
            <li>
              <label>{t.questions.ageCategory}</label>
              <div className={styles.answer}>
                <input type="radio" id="q4a" name="q4" value="18-30" />
                <label htmlFor="q4a">{t.questions.ageOptions["18-30"]}</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q4b" name="q4" value="30-40" />
                <label htmlFor="q4b">{t.questions.ageOptions["30-40"]}</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q4c" name="q4" value="40-50" />
                <label htmlFor="q4c">{t.questions.ageOptions["40-50"]}</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q4d" name="q4" value="50+" />
                <label htmlFor="q4d">{t.questions.ageOptions["50+"]}</label>
              </div>
            </li>

            <li>
              <label>{t.questions.gender}</label>
              <div className={styles.answer}>
                <input type="radio" id="q1a" name="q1" value="Kobieta" />
                <label htmlFor="q1a">{t.questions.genderOptions.female}</label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q1b" name="q1" value="Mężczyzna" />
                <label htmlFor="q1b">{t.questions.genderOptions.male}</label>
              </div>
            </li>

            <li>
              <label>{t.questions.handedness}</label>
              <div className={styles.answer}>
                <input type="radio" id="q2a" name="q2" value="Praworęczny/a" />
                <label htmlFor="q2a">
                  {t.questions.handednessOptions.right}
                </label>
              </div>
              <div className={styles.answer}>
                <input type="radio" id="q2b" name="q2" value="Leworęczny/a" />
                <label htmlFor="q2b">
                  {t.questions.handednessOptions.left}
                </label>
              </div>
            </li>
            <li>
              <label>{t.questions.nameOptional} </label>
              <div className={styles.answer}>
                <input type="text" id="q3" name="q3" />
              </div>
            </li>
          </ol>
        </form>

        <p>
          <strong>{t.privacyTitle}</strong>: {t.privacyText}
        </p>

        <Link
          href={`/${currentLocale}/intouch/water-tank`}
          className={styles.button}
        >
          {t.nextButton}
          <ArrowSVG width={28} />
        </Link>
      </div>
    </main>
  );
}
