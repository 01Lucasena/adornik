import { useState } from 'react';
import './Catalogo.css';

export default function Catalogo() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtos = [
    {
      id: 1,
      categoria: 'Anéis',
      nome: 'Anel Clássico',
      descricao: 'Design elegante em aço inox escovado.',
      imagem: '/imagens/aneis1.jpg',
    },
    {
      id: 2,
      categoria: 'Anéis',
      nome: 'Anel Personalizado',
      descricao: 'Com gravação sob medida e acabamento fosco.',
      imagem: '/imagens/aneis2.jpg',
    },
    {
      id: 3,
      categoria: 'Colares',
      nome: 'Colar Infinito',
      descricao: 'Com pingente símbolo do infinito, em prata 925.',
      imagem: '/imagens/colares1.jpg',
    },
    {
      id: 4,
      categoria: 'Pulseiras',
      nome: 'Pulseira Aço',
      descricao: 'Fecho magnético e design moderno em aço inox.',
      imagem: '/imagens/pulseira1.jpg',
    },
    {
      id: 5,
      categoria: 'Canecas',
      nome: 'Caneca Personalizada',
      descricao: 'Impressão térmica com frases ou fotos.',
      imagem: '/imagens/caneca1.jpg',
    },
  ];

  
  const categorias = [...new Set(produtos.map(p => p.categoria))];

  return (
    <div className="catalogo-container">
      <h1>Conheça Nossos Produtos</h1>

      {categorias.map(categoria => (
        <section className="catalogo-section" key={categoria}>
          <h2>{categoria}</h2>
          <div className="catalogo-grid">
            {produtos
              .filter(p => p.categoria === categoria)
              .map(produto => (
                <div key={produto.id} className="produto-card">
                  <img src={produto.imagem} alt={produto.nome} />
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <button onClick={() => setProdutoSelecionado(produto)}>Ver detalhes</button>
                </div>
              ))}
          </div>
        </section>
      ))}

      
      {produtoSelecionado && (
        <div className="modal-overlay" onClick={() => setProdutoSelecionado(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} />
            <h2>{produtoSelecionado.nome}</h2>
            <p>{produtoSelecionado.descricao}</p>
            <button onClick={() => setProdutoSelecionado(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
