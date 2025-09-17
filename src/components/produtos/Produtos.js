import React from "react";
import { NavLink } from "react-router-dom"; 
import "./Produtos.css";
import galeria1 from '../../assets/images/colar8.jpg';
import galeria2 from '../../assets/images/colar2.jpg';
import galeria3 from '../../assets/images/colar9.jpg';

function Produtos() {
    const produtos = [
        { imagem: galeria1, titulo: "Transforme lembranças especiais em uma peça única!" },
        { imagem: galeria2, titulo: "Um acessório exclusivo que guarda memórias eternas" },
        { imagem: galeria3, titulo: "Escolha sua foto favorita e leve para sempre consigo em um colar cheio de significado!" },
    ];

    return (
        <div className="produtos-container">
            <h1>Explore nossa coleção</h1>
            <p>Colares personalizados com gravação a laser.</p>
            <br />
            <div className="produtos-grid">
                {produtos.map((produto, index) => (
                    <div key={index} className="produto-item">
                        <img src={produto.imagem} alt={produto.titulo} />
                        <h2>{produto.titulo}</h2> 
                    </div>
                ))}
            </div>
            <NavLink to="/produtos" className="produtos-link">
                Veja Mais
            </NavLink>
        </div>
    );
}

export default Produtos;