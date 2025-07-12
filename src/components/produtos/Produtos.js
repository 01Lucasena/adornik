import React from "react";
import "./Produtos.css";
import galeria1 from '../../assets/images/galeria-1.jpeg';
import galeria2 from '../../assets/images/galeria-2.jpeg';
import galeria3 from '../../assets/images/galeria-3.jpeg';

function Produtos() {
    const produtos = [
        { imagem: galeria1, titulo: "Produto 1", descricao: "Descrição do Produto 1" },
        { imagem: galeria2, titulo: "Produto 2", descricao: "Descrição do Produto 2" },
        { imagem: galeria3, titulo: "Produto 3", descricao: "Descrição do Produto 3" },
    ];

    return (
        <div className="produtos-container">
            <h2>Explore nossa coleção </h2>
            <br />
            <br />
            <div className="produtos-grid">
                {produtos.map((produto, index) => (
                    <div key={index} className="produto-item">
                        <img src={produto.imagem} alt={produto.titulo} />
                        <h2>{produto.titulo}</h2>
                        <p>{produto.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Produtos;
