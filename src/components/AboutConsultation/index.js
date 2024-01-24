const AboutConsultation = () => {
  return (
    <section className="about-consultation">
      <div>
        <h2>Como Funciona a Consulta</h2>
        <video src="./assets/videos/teste.mp4" controls autoPlay muted></video>
      </div>

      <h2>O que está incluso no atendimento?</h2>
      <div className="about-service">
        <ul>
          <li>Consulta completa</li> 
          <li>Avaliação corporal</li>  
          <li>Planos alimentares individualizados</li>
          <li>Lista de substituição</li>
          <li>Suporte on-line pos consulta</li>
          <li>Entrego seu plano alimentar no dia da consulta</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutConsultation;
