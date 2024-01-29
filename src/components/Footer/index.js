import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Desenvolvido por Renata</p>
      <button className="whatsapp-button">
        <a href="https://api.whatsapp.com/send?phone=5511930006899" target="_blank" rel="noreferrer" >
          
        <WhatsAppIcon fontSize="inherit" className="whatsapp-icon" />
        </a>
        
      </button>
    </footer>
  );
};

export default Footer;
