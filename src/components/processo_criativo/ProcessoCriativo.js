import React from 'react';
import { FaLightbulb, FaTools, FaGem, FaTruck } from 'react-icons/fa';
import './ProcessoCriativo.css';

const etapas = [
  {
    icon: <FaLightbulb size={40} className="text-gold" />,
    titulo: 'Sua ideia',
    descricao: 'Você nos envia sua ideia, nome ou imagem com significado.',
    nota: 'Ideias com significado têm mais brilho.',
    animation: 'fade-up'
  },
  {
    icon: <FaTools size={40} className="text-gold" />,
    titulo: 'Criação personalizada',
    descricao: 'Transformamos em arte com design exclusivo e gravação precisa.',
    nota: 'Seu estilo traduzido em aço.',
    animation: 'fade-up'
  },
  {
    icon: <FaGem size={40} className="text-gold" />,
    titulo: 'Acabamento fino',
    descricao: 'Cada peça é finalizada à mão com atenção a cada detalhe.',
    nota: 'Detalhes que impressionam.',
    animation: 'fade-up'
  },
  {
    icon: <FaTruck size={40} className="text-gold" />,
    titulo: 'Envio com carinho',
    descricao: 'Entregamos em embalagem especial, pronta para emocionar.',
    nota: 'A experiência começa na caixa.',
    animation: 'fade-up'
  },
];

export default function ProcessoCriativo() {
  return (
    <section className="processo">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="etapas">
          {etapas.map((etapa, index) => (
                <div
                    key={index}
                    data-aos={etapa.animation}
                    className="flex flex-col items-center p-4 rounded-lg bg-[#1b1b1b] shadow-lg hover:shadow-gold transition-all"
                >
                    {etapa.icon}
                    <h3 className="text-xl font-semibold mt-4 mb-2 text-gold">{etapa.titulo}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed text-center">
                    {etapa.descricao}
                    <br />
                    <span className="text-xs text-gold italic">{etapa.nota}</span>
                    </p>
                </div>
                ))}
        </div>
      </div>
    </section>
  );
} 