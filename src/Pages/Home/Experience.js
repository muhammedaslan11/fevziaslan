import { useTranslation } from "react-i18next";
import projectsDataTR from "../../data/projects.tr.json";
import projectsDataEN from "../../data/projects.en.json";

export default function Experience() {
  const { t, i18n } = useTranslation();
  const data = i18n.language === "tr" ? projectsDataTR : projectsDataEN;
  return (
    <section id="Projects" className="experience--section">
      <div className="experience--section--img">
        <img
          src="https://www.constructafrica.com/sites/default/files/inline-images/Construction%20Planning.jpg"
          alt=""
        />
      </div>
      <div className="hero--section--content--box experience--section--box">
        <div className="hero--section--content table-parent">
          <h3 className="sections--heading">{t("projectsThatIwereIn")}</h3>
          <table border="1" bordercolor="black" bgcolor="white">
            <tr>
              <td>
                {t("position")}/{window.innerWidth < 780 && <br />}{" "}
                {t("company")}
              </td>
              <td>
                {/* {t("proje")} */}
                {t("responsibilities")}
              </td>
              <td>{t("date")}</td>
            </tr>
            {data.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.position} | {item.company}
                </td>
                <td>{item.responsibilities}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
