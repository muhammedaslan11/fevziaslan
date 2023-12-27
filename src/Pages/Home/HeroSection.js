import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div style={{ width: "100%", height: "73px", backgroundColor: "#fff" }} />
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">
              <TypeAnimation
                sequence={[t("animationTypeText"), 700, "", 700]}
                repeat={Infinity}
              />
            </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">
                {t("titlePart1")}
              </span>{" "}
              <br />
              {t("titlePart2")}
            </h1>
            <p className="hero--section-description">
              {t("sectionDescPart1")}
              <br /> {t("sectionDescPart2")}
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => window.open("https://wa.me/+905444038307")}
          >
            {t("getContactTitle")}
          </button>
        </div>
        <div className="hero--section--img">
          <img src="./img/fevz.png" alt="Hero Section" />
        </div>
      </section>
    </>
  );
}
