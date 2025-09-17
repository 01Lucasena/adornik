import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h2>Produtos Personalizados</h2>
        <div className="banner-texto-lista">
          <p>
            Nossos produtos personalizados trazem aço inoxidável de alta
            qualidade, onde sua foto é gravada a laser com riqueza de detalhes. Seja
            a imagem de um ente querido, um pet ou um momento marcante, cada peça é
            feita sob medida para você.
          </p>
          <ul>
            <li><strong>Material:</strong> Aço inox resistente, hipoalergênico e durável</li>
            <li><strong>Gravação:</strong> Foto em alta definição, que não desbota com o tempo</li>
            <li><strong>Design:</strong> Moderno, elegante e versátil, combina com qualquer estilo</li>
            <li><strong>Presente perfeito:</strong> Para aniversários, datas comemorativas ou simplesmente para carregar alguém especial sempre por perto</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
