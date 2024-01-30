import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Endereço</h2>
      <div className="contact-address">
        <p>
          Rua: Gregório Allegri, 105 - Vila das belezas, <br />
          São Paulo - SP, 05842-070{" "}
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7022120115676!2d-46.7450725!3d-23.6508333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5163a9f2e989%3A0x8c7ffbf353cefb3!2sRua%20Greg%C3%B3rio%20Allegri%2C%20105%20-%20Vila%20das%20Belezas%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005842-070!5e0!3m2!1spt-BR!2sbr!4v1706119370812!5m2!1spt-BR!2sbr"
        
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contacts-social-media">
        <a href="https://www.instagram.com/nutri.ph/" target="_blank" rel="noreferrer" className="social-media-icon-insta">
          <InstagramIcon  fontSize="inherit"/>
        </a>
        <a href="" target="_blank" rel="noreferrer"  className="social-media-icon-mail">
          <MailOutlineIcon  fontSize="inherit"/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
