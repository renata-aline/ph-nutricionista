import ButtonDialog from "../ButtonDialog";

const AboutContent = () => {
  return (
    <section className="about" id="about">
      <h2>Sobre Mim</h2>
      <div className="about-information">
        <img src="ph-nutricionista/assets/foto-ph.png" alt="foto nutricionista pablo" />
        <div>
          <h1>
            Pablo henrique <span>Nutricionista</span>
          </h1>
          <p>
            Um skatista que desenrola a nutrição pra você.Especialista em
            nutrição esportiva,hipertrofia e emagrecimento.
          </p>
        </div>
      </div>
      <ButtonDialog />
    </section>
  );
};

export default AboutContent;
