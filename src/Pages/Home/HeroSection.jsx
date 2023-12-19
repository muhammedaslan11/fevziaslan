import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <>
      <div style={{ width: "100%", height: "73px", backgroundColor: "red" }} />
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">
              <TypeAnimation
                sequence={["Merhaba, Ben Fevzi Aslan", 700, "", 700]}
                repeat={Infinity}
              />
            </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">İnşaat</span> <br />
              Mühendisi
            </h1>
            <p className="hero--section-description">
              Sizlere projelerinizi Bize Sunun
              <br /> Biz Onları Hayata Geçirelim...
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => window.open("https://wa.me/+905444038307")}
          >
            İletişime Geç
          </button>
        </div>
        <div className="hero--section--img">
          <img src="./img/fevz.png" alt="Hero Section" />
        </div>
      </section>
    </>
  );
}
