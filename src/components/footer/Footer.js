import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-text">
                <p> Copyright © 2025, todos os direitos reservados.</p>
                <p>Adornik Arte e Aço Ltda.</p>
                <p>CNPJ: 84.453.844/0001-21</p>
                <p>Endereço: Praça Bartolomeu Santos 05 Centro, Pojuca/BA 48120-000</p>
            </div>
            <div className="footer-social">
                <a href="https://instagram.com/adornik_arteeaco" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} className="social-icon" />
                </a>
                <a href="https://wa.me/5573999778810?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento." target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={24} className="social-icon" />
                </a>
            </div>

                

        </div>
    )
}

export default Footer;