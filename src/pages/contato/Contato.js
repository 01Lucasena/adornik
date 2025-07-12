import './Contato.css';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function Contato() {
  return (
    <div className="contato-container">
      <h1>Fale Conosco</h1>
      <p>Estamos disponíveis para dúvidas, orçamentos ou pedidos personalizados.</p>

      {/* Links de contato */}
      <div className="contato-links">
        <a
          href="https://wa.me/5599999999999?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="contato-link whatsapp"
        >
          <FaWhatsapp size={24} /> WhatsApp
        </a>

        <a
          href="https://instagram.com/suaempresa"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-link instagram"
        >
          <FaInstagram size={24} /> Instagram
        </a>

        <a
          href="https://facebook.com/suaempresa"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-link facebook"
        >
          <FaFacebook size={24} /> Facebook
        </a>
      </div>

      {/* Endereço e horário */}
      <div className="contato-info">
        <p><strong>Endereço:</strong> Praça Bartolomeu Santos, 05 Centro – Pojuca/BA</p>
        <p><strong>Horário:</strong> Segunda a Sexta, 8h às 17h</p>
      </div>

      {/* Mapa Google */}
      <div className="mapa-container">
        <iframe
          title="mapa-localizacao"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15615.70377800155!2d-38.3378!3d-12.3456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x715b1e35283bbd5%3A0x9cf88fc191b9a!2sPojuca%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contato;
