import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-text">
                <p> Copyright © 2025, todos os direitos reservados.</p>
                <p>Adornik Arte e Aço Ltda.</p>
                <p>CNPJ: 84.453.844/0001-21</p>
                <p>Endereço: Praça Bartolomeu Santos 05 centro, Pojuca 48120-000</p>
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} className="social-icon" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} className="social-icon" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={24} className="social-icon" />
                </a>
            </div>

                

        </div>
    )
}

export default Footer;