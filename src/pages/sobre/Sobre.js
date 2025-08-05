import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-container">
      <h1>Sobre Nós</h1>
      
      <p>
        Somos apaixonados por oferecer produtos de alta qualidade
        e um excelente atendimento ao cliente.
      </p>
      <p>
        Na Adornik proporcionamos uma experiência de compra única, com uma seleção cuidadosamente
        escolhida de itens que atendem às suas necessidades e desejos.
      </p>
      


      {/* Depoimentos */}
      <div className="depoimentos">
        <h2>O que dizem nossos clientes</h2>
        <blockquote>
          "Atendimento incrível e produtos que superaram minhas expectativas!" – <strong>Marina R.</strong>
        </blockquote>
        <blockquote>
          "Já comprei várias vezes e sempre fui muito bem atendida." – <strong>Lucas F.</strong>
        </blockquote>
      </div>

  
    </div>
  );
}

export default Sobre;