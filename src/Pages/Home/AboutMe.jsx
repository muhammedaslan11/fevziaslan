import { FaAward, FaGraduationCap } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <h1 className="herosection--title">Benim Hakkımda</h1>
      <div className="about--section-container">
        <div className="about--section-container-left">
          <img src="./img/fvzlast.png" alt="" />
        </div>
        <div className="about--section-container-right">
          <div className="about--section-container-right-boxes">
            <div className="experience-box">
              <FaAward size={"2.5rem"} />
              <b>
                <h3>Deneyim</h3>
              </b>
              <p>Say Mekanik 2+ Yıl</p>
              <p>Oyak Beton 2+ Yıl</p>
              <p>Peker İnşaat 1+ Yıl</p>
            </div>
            <div className="experience-box">
              <FaGraduationCap size={"2.5rem"} />
              <b>
                <h3>Eğitim</h3>
              </b>
              <b>
                <p>Karadeniz Teknik Üniversitesi</p>
              </b>
              <b>
                <p>İnşaat Mühendisliği</p>
              </b>
            </div>
          </div>
          <div className="desc">
            <p className="text-md">
              Her proje bir öyküdür, ben ise her detayda inşa ettiğim hikayenin
              mimarıyım. Sorumlulukla, tutkuyla ve mükemmeliyetle dokunuşlarımı
              işlediğim her yapı, geleceğe güvenle taşınan birer eserdir. İnşaat
              mühendisi olarak, her çizdiğim çizgiyle sadece binalar değil, aynı
              zamanda hayalleri de yükseltiyorum. Geleceği inşa etmek için
              buradayım.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
