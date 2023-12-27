import { FaAward, FaGraduationCap } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function AboutMe() {
  const { t, i18n } = useTranslation();

  const experiences = [
    {
      company: "Say Mekanik",
      years: 2,
    },
    {
      company: "Oyak Beton",
      years: 2,
    },
    {
      company: "Peker İnşaat",
      years: 1,
    },
  ];
  return (
    <section id="AboutMe" className="about--section">
      <h1 className="herosection--title">{t("aboutme")}</h1>
      <div className="about--section-container">
        <div className="about--section-container-left">
          <img src="./img/fvzlast.png" alt="" />
        </div>
        <div className="about--section-container-right">
          <div className="about--section-container-right-boxes">
            <div className="experience-box">
              <FaAward size={"2.5rem"} />
              <b>
                <h3>{t("experience")}</h3>
              </b>
              {experiences.map((item, index) => (
                <p key={index}>
                  {" "}
                  {item.company} {item.years}+ {t("year")}
                </p>
              ))}
            </div>
            <div className="experience-box">
              <FaGraduationCap size={"2.5rem"} />
              <b>
                <h3>{t("education")}</h3>
              </b>
              <b>
                <p>{t("ktu")}</p>
              </b>
              <b>
                <p>{t("civilEngineering")}</p>
              </b>
            </div>
          </div>
          <div className="desc">
            <p className="text-md">{t("aboutSaying")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
